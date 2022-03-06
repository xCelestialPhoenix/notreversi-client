import SockJS from 'sockjs-client';
import { Message, over } from 'stompjs';
import Tile from '../model/Tile';

const serverEndpoint = 'https://notreversi-server.herokuapp.com'; // Release
// const serverEndpoint = 'http://localhost:8080'; // Local

const socket = new SockJS(serverEndpoint);
const stompClient= over(socket);

export function connect(onGameReceived: ((message: Message) => any)) {
    console.log('Connecting...');
    stompClient.connect({}, onConnected(onGameReceived), onError);
}

export function placePiece(tile: Tile) {
    if (stompClient) {
        stompClient.send('/app/move', {}, JSON.stringify(tile))
    } else {
        throw new Error('Connection not established.')
    }
}

export function skipTurn() {
    if (stompClient) {
        stompClient.send('/app/cmd', {}, JSON.stringify({
            type: 'skip'
        }))
    } else {
        throw new Error('Connection not established.')
    }
}

export function newGame() {
    if (stompClient) {
        stompClient.send('/app/cmd', {}, JSON.stringify({
            type: 'reset'
        }))
    } else {
        throw new Error('Connection not established.')
    }
}

// ==========================================================================================

function onConnected(onGameReceived: ((message: Message) => any)) {
    return () => {
        console.log('Connected to server')
        stompClient.subscribe('/game', onGameReceived)
        try {
        console.log('Sending message');
        stompClient.send('/app/game', {}, 'Hello');
        console.log('Message sent');
    } catch (error) {
        console.log('Unable to send')
    }
    }
    
}

function onError(error: any) {
    console.error('Unable to connect to server');
    console.error(error);
}

const gameService = {connect, placePiece, skipTurn, newGame}

export default gameService;

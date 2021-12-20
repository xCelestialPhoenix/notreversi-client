import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';

import { StoreModule } from '@ngrx/store';
import { gameReducer } from '@store/reducers/game.reducer';

import { AppComponent } from 'app/app.component';
import { PieceComponent } from '@components/piece/piece.component';
import { FieldComponent } from '@components/field/field.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoboardComponent } from '@components/infoboard/infoboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ControlbarComponent } from './component/controlbar/controlbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PieceComponent,
    FieldComponent,
    InfoboardComponent,
    ControlbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ game: gameReducer }),
    HttpClientModule,

    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

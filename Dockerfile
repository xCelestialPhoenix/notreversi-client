# Use official nginx image as the base image
FROM nginx:1.21.4-alpine

# Copy the build output to replace the default nginx contents.
COPY ./dist/notreversi /usr/share/nginx/html

# Expose port 80
EXPOSE 80
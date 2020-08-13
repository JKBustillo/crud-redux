# CRUD-Redux

Simpĺe CRUD app with Redux to manage a list of products.

## Project Setup

    npm install

This project uses JSON Server as a fake API, so you need to install it.

    npm install -g json-server

## Run the React app

    npm start
    
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run the fake server

    json-server db.json --port 4000
    
Port 4000 is the default port in this project. You can change it manually in the src/config/axios.js file.

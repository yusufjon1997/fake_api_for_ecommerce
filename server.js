// const data = require('./db.json');

const express = require('express');
const jsonServer = require('json-server');

const server = express();


server.use('/', jsonServer.defaults() , jsonServer.router('./db.json'));

server.listen(4001 , ()=> console.log('server is running on 4001 port'));


// const jsonServer = require('json-server');

// const server = jsonServer.create();
// const middlewares = jsonServer.defaults();
// const router = server.router(data);

// server.use(middlewares);
// server.use(router);

// server.listen(4000)
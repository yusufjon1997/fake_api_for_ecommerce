// const data = require('./db.json');

const express = require('express');
const jsonServer = require('json-server');

const server = express();

const port = rocess.env.PORT || 4000;

server.use('/', jsonServer.defaults() , jsonServer.router('./db.json'));

server.listen(port , ()=> console.log('server is running on 4001 port'));


// const jsonServer = require('json-server');

// const server = jsonServer.create();
// const middlewares = jsonServer.defaults();
// const router = server.router(data);

// server.use(middlewares);
// server.use(router);

// server.listen(4000)
'use strict';
const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.post('/create', (req, res) => {
  res.send('Got a POST request');
})

app.get('/read', (req, res) => {
  res.send('Get request');
})

app.put('/update', (req, res) => {
  res.send('Put request');
})

app.delete('/delete', (req, res) => {
  res.send('Delete request');
})




module.exports.app = serverless(app)
/*==================================================
This file is used to demonstrate Express routing features in the server-side (back-end) Node.js environment.

Express Route definition syntax:
appname.method(path, handler)  
- appname: variable name for Express application
- method: type of HTTP request method; i.e., GET, POST, PUT, DELETE, etc. 
- path: URL path which the handler function responds to
- handler: function that handles the request
================================================== */
// Include (import) Express module
const express = require('express');
// Create an Express application called "app"
const app = express();

/* ROUTING */
// Define a route on "/hello/world"
app.get('/hello/world', function (request, response) {
  console.log('Request for "/hello/world"');
  // Response to request
  response.send('Hi there!'); 
});

/* PARAMETERIZED ROUTING */
// Define a route on "/hello/world/:name"
app.get('/hello/world/:name', function (request, response) {
  console.log(`Request for "/hello/world/${request.params.name}"`);
  // Response to request
  response.send(`Hi ${request.params.name}!`); // Use an expression to send back the parameter "name" in response
});

/* ERROR HANDLING */
// If routes are not matched, handle 404 status and return status message
app.get('*', function (request, response) {
  // Error response to request
  response.status(404).send('Sorry! Page not found!'); // Send back both status code and error message
});

// Set Express application to listen on a port
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

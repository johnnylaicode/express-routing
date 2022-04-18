/*==================================================
This file is used to demonstrate Express routing features.  
================================================== */
// Include (import) Express module
const express = require('express');
// Create an Express application called "app"
const app = express();

/* ROUTING */
// Define a route on "/hello/world"
app.get('/hello/world', function(request, response){
   console.log('Request for "/hello/world"');
   response.send('Hi there!');
});

/* PARAMETERIZED ROUTING */
// Define a route on "/hello/world/:name"
app.get('/hello/world/:name', function(request, response){
   console.log(`Request for "/hello/world/${request.params.name}"`);
   response.send(`Hi ${request.params.name}!`);
});

/* ERROR HANDLING */
// If routes are not matched, handle 404 status and return status message
app.get('*', function(request, response){
   response.status(404).send('Sorry! Page not found!');
});

// Set Express application to listen on a port
app.listen(3000, function(){
   console.log('App listening on port 3000!');
});

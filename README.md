# express-routing

This repository is an example Express.js (Express) application to demonstrate Express routing features.

### Prerequisite
- Node.js is already installed on your local machine. 

### Use the following steps to set up Express and run the application on your local machine
1.	Download the GitHub repository ZIP file to your local machine and unzip it.

2. Start a terminal (e.g., Git Bash) on your local machine.

3.	Go into the "express-routing" folder, enter the command: `npm init` 
   
   (It creates a package.json file containing some boilerplate information.)

4.	Install Express by entering the command: `npm install express` 

   (It installs Express and adds the Express version number to package.json file in the "dependencies" section.)

5.	Start the Express application by entering the command: `node express-routing.js` 

6. The Express application is now accessible at the address: `http://localhost:3000`

### Express Routing: 

The application sets up a route on `/hello/world`

To test the route, at a web browser, enter the URL:`http://localhost:3000/hello/world`

You should see `Hi there!` displayed on the web browser.

### Express Parameterized Routing: 

The application sets up a parameterized route on `/hello/world/:name`

To test the parameterized route, at a web browser, enter the URL: `http://localhost:3000/hello/world/Mary`

You should see `Hi Mary!` displayed on the web browser.

### Express Routing Error Handling: 

If routes are not matched, the application handles the 404 status and returns a status message.

To test the routing error handling, at a web browser, enter the URL: `http://localhost:3000/hello`

You should see `Sorry! Page not found!` displayed on the web browser.

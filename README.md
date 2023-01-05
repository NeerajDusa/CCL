# CCL
 CCL REACT APPLICATION REPORT
                                                   NEERAJ DUSA
This document is a quick guide for the existing project for the silence round.
Introduction:
This document is divided into 2 parts. The First Part demonstrates how to create a simple React app using ‘create-react-app’ CLI and explains the project structure.
The Second Part explains the existing code and demonstrates the use of components, communication between components, and making HTTP calls.
Setup:
Install NodeJS if not already present
NodeJS is needed since the Libraries Required for React are downloaded using node package manager ( npm ).
Refer to https://nodejs.org/en/ to install NodeJS.
Install create-react-app Node Package
create-react-app node package helps to set up a React project. Install create-react-app node package globally using the following command.
npm install -g create-react-app
 
 Creating the project
The project can be created using create-react-app. Use the following command to create the project.
npx create-react-app react-app
react-app is the name of the application. The above command creates a folder called react-app which is the project folder. In order to test if everything has been set up properly, go into the project folder and start the application using the following command.
cd react-app npm start
Go to your browser and go to the following URL localhost:3001
You should be able to see that your application is running. The Application will look like this in your browser:
Creating the server
I have created an index.js file and used the express server in the default PORT 3000. This facilitates data in a server and includes rendering your static files on the client side such as images, HTML, CSS, and JavaScript. When we run the server using nodemon server.js it logs “Hello from server!” and starts the server up and running.

 Here, nodemon is used to simply restart the node application whenever it observes the changes in the file present in the working directory of your project.
Creating Components:
The current application consists of the following components:
1. Form component:
In this component, we will show the following fields:
1) Favourite Animal ( It should be Short answer)
2.1) Highest Education level ( It should be Drop Down. Keep up to 6 popular education levels)
2.2) Previous Experience ( Short answer)
2.3) About You ( Paragraph)
3) Tea Quantity Range (MultiChoice )
i) 0-10 Kg
ii) 10-50 Kg
iii) 50-250 Kg
iv) 250-1000 Kg
v) 1000-5000Kg
4) ID proof Upload File Upload option

 5) last visited date to buy the Tea (Date)
6) Discount Coupon ID ( Short answer)
7) Full Name (Short answer)
8) Previous used Tea products (Checkbox) 9) Suggestions (Long paragraph)
All the fields are given their respective types and id tags.
Each input field is associated with an onChange handler which changes the state value according to the user's input.
When the form is submitted, All the state values are stored in an object called formData and is then converted into
a string using the JSON.stringify function and that string is then stored in the localstorage with formData as the key.
2. View Form Component:
In this component, we will show the form data that the user has submitted by accessing the data stored in the
local storage and converting it to normal object using JSON.parse.
Then each field in the object is accessed and rendered into the DOM.
Basic styles have been applied to the application to make it visually understandable.

 CCL form
  
 Filled the form and testing the input:
  Output:
 

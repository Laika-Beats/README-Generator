const inquirer = require("inquirer") //connects the inquirer library for use in this file
const fs = require("fs") //connects the fs library 
const utils = require("util") //connects the utils library

//prompts for user input/choice that will be written to README file
inquirer.prompt([
    {
    name: "title",
    type: "input",
    message: "What is the title of your project? "
    },
    {
        name: "description",
        type: "input",
        message: "Describe the project: "
    },
    {
        name: "tableContents",
        type: "confirm",
        message: "Do you want a Table of Contents (y/n)? "
    },
    {
        name: "usage",
        type: "input",
        message: "Provide instructions for use: "
    },
    {
        name: "license",
        type: "list",
        message: "Choose a License: ",
        choices: ["BSD", "MIT", "GPL"]
    },
    {
        name: "username",
        type: "input",
        message: "What is your GitHub username? "
    },
    {
        name: "email",
        type: "input",
        message: "What is your e-mail? "
    },
])
.then(function(answer){
    fs.appendFile("README.md", answer.title + "\n" + "\n", function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
    });
    fs.appendFile("README.md", answer.description + "\n" + "\n", function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
    });
    var tableOfContents = "1. Usage" + "\n" + "2. License" + "\n" + "3. Contributing" + "\n" + "4. Questions";
    if (answer.tableContents === true){
        fs.appendFile("README.md", tableOfContents + "\n" + "\n", function(err) {
            if (err) {
              return console.log(err);
            }
            console.log("Success!");
        });
    } else {
        console.log("No Table of Contents")
    };
})














// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

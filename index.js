// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
  
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [{
    type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of the project.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What needs to be installed in order to use the app (dependencies, etc)?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Where is the app to be used? (browser, terminal, etc.)',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What license is being used for this project?',
      choices: ['GNU GPL', 'MIT', 'Apache', 'Mozilla', 'Unlicensed']
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Were there any contributers on this project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What commands are required to test the app?',
    },
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        // console.log(fileName)
        // console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Success")
        }
    })
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            // console.log(data)
        }) 
}

// Function call to initialize app
init();

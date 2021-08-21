//  Include packages needed for this application

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

//  Create an array of questions for user input
const promptQuestions = [

  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
   
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project.',
    
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Explain how to install your project.',
    
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Explain how your project is meant to be used',
    
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Suggest how users can contribute to the project',
   
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions for your project.',
   
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project. Use the up and down arrows and enter to select. The most updated version of the license will be used ',
    choices: ['Apache', 'MIT', 'Mozilla', 'GNU', 'Boost', 'BSD', 'ISC', 'IBM', 'Unlicense', 'Eclipse'],

  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub Username ',
    
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
    
  },
];

// Function to write README file
function writeREADME(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      reject(err);
      return;
    }
  });
  
  console.log('Your README has been generated, check the dist folder')
};

// Function to initialize app
function init() {
  inquirer.prompt(promptQuestions)
    .then(function (data) {
      writeREADME('./dist/README.md', generateMarkdown(data));
    });
};


// call initialize app
init();
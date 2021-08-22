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
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter the title of your project.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project.',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please provide a description of your project.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Explain how to install your project.',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please provide instructions on how to install your project.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Explain how your project is meant to be used',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please provide usage information');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Suggest how users can contribute to the project',
    validate: contributeInput => {
      if (contributeInput) {
        return true;
      } else {
        console.log('Please provide information on how users can contribute to the project');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions for your project.',
    validate: testsInput => {
      if (testsInput) {
        return true;
      } else {
        console.log('Please provide test instructions for your project.');
        return false;
      }
    }
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
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email address.');
        return false;
      }
    }
  },
];

// Function to write README file
function writeREADME(savefileName, data) {
  fs.writeFile(savefileName, data, () => {});
  
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
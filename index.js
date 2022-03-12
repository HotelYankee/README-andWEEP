// packages needed for this application //
const inquirer = require('inquirer');
const fs = require('fs');
const markDwn = require('./utils/generateMarkdown');

// user input questions //
const questions = [{
            type: "input",
            name: "title",
            message: 'What is the project title?',
        },
        {
            type: "input",
            name: "description",
            message: ' Brief description of your project: ',
        },
        {
            type: "rawlist",
            name: "license",
            message: 'What license does the project have?',
            choices : ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSL 1','None']
        },
        {
            type: "input",
            name: "installation",
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
        },
        {
            type: "input",
            name: "tests",
            message: 'What command should be executed to run the tests?',
            default: 'npm test',
        },
        {
            type: "input",
            name: "repoInfo",
            message: 'What should the user need to know about using the repo?'
        },
        {
            type: "input",
            name: "repoCont",
            message: 'What does the user need to know about contributing to the repo?',
        },
        {
            type: "input",
            name: "githubId",
            message: 'What is your gitHub username?',
        },
        {
            type: "input",
            name: "emailId",
            message: 'What is your email id?',
        }
    ];

// README function //
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('README file created successfully!')
    );
}


function init() {
    inquirer
     .prompt(questions)
     .then((data) => {
       let readMeVal =  markDwn(data);
       writeToFile("README.md", readMeVal);
     });
}




var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var axios = require("axios");
var fs = require("fs");

// Require all npm packages and files
function promptUser() {

  inquirer.prompt([
    // questions to user using "inquirer"
    {
      type: "input",
      message: "What is the name of your current project?",
      name: 'projectTitle',
      default: "Readme Generator"
    },

    {
      type: "input",
      message: "Give a quick description of your project?",
      name: "description",
      default: "When you enter the title description and repository name this application creates a README.md"
    },

    {
      type: "checkbox",
      message: "Choose a license for your project",
      name: "license",
      choices: [
        "jjhuj",
        "dsfhdfhdjf",
        "djfbdjhfjdh",
        'djfhdjhfdjhf',
      ],
      default: "GoodREADMEGenerator"
    },

    {
      type: "input",
      message: "What is your GitHub username?",
      name: "userName",
      default: "Nggerber"
    },

    {
      type: "input",
      message: "What is your email address?",
      name: "email",
      default: "neal.g.gerber@gmail.com"
    },
  ]);
}


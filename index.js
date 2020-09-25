
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var axios = require("axios");
var fs = require("fs");

// Require all npm packages and files

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
    name: "username",
    default: "Nggerber"
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "install",
    default: "neal.g.gerber@gmail.com"
  },

  {
    type: "input",
    message: "Write instructions for using your project.",
    name: "usage",
    default:
      "1.Run node index.js 2.Answers the questions 3.The README.md file will be created. "
  },

  {
    type: "input",
    message:
      "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
    name: "contributors",
    default: " Robert McKenney, Abdul Amoud and Igor Calvacante"
  },

  {
    type: "input",
    message: "Provide examples on how to run tests.",
    name: "test",
    default: "Insert your tests sample here..."
  }
]);



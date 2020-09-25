
var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var axios = require("axios");
var fs = require("fs");
var util = require('util')

const writeFileAsync = util.promisify(fs.writeFile);


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
      type: 'input',
      message: 'What are the steps to install your application?',
      name: 'install',
      default: ' Run npm i for inquirer and axios.'
    },

    {
      type: 'usage',
      message: 'How to I use your application',
      name: 'usage',
      default: 'Open up integrated terminal for index.js. Enter "node index.js" and answer the prompts.'
    },

    {
      type: 'input',
      message: 'Did you have any contributing members for this project',
      name: 'contributing',
      default: 'Me, myself and I'
    },

    {
      type: 'input',
      message: 'Did you use any tests',
      name: 'tests',
      default: 'None'
    },

    {
      type: "checkbox",
      message: "Choose a license for your project",
      name: "license",
      choices: [
        "MIT",
        "Mozilla",
        "Zlib",
        'Apache',
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

  ]).then(response => {

    let md = generateMarkdown(response)
    fs.writeFile("README.md", md, function (err) {
      console.log('success')

    })


  })
}

promptUser()




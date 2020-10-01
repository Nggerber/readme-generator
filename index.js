
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
        {name: "MIT", value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
        {name: "Mozilla", value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"},
        {name: "Zlib",  value: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"},
        {name: 'Apache', value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"},
        {name: "None"}
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
      console.log(response)
      console.log('success')

    })


  })
}

promptUser()




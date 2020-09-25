// function to generate markdown for README
function generateMarkdown(data) {

  return `

## ${data.projectTitle}

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

${data.description}



## Table of Contents 

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions](#Questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

This project is licensed by [${data.license}]

## Questions

[Github profile](https://github.com/${data.userName})

[E-Mail]Mail to:${data.email})
  
  `;
}

module.exports = generateMarkdown;

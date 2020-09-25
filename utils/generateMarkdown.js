// function to generate markdown for README
function generateMarkdown(data) {

    return `

    #${data.projectTitle};

// ![](https://img.shields.io/badge/license-${(data.license).replace(/\s/g, "%20")}-yellow)\n

${data.description}

## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


## License

This project is licensed by [${data.license}](${data.printLicense})


## Questions

[Github profile](https://github.com/${data.userName})

[E-Mail](mailto:${data.email})
  
  `;
  }
  
  module.exports = generateMarkdown;
  
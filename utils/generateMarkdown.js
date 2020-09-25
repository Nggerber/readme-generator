// function to generate markdown for README
function generateMarkdown(data) {

    return `

    #${data.projectTitle};



${data.description}

## Table of Contents 

  
  - [License](#license)
 
  - [Questions](#questions)


## License

This project is licensed by [${data.license}](${data.printLicense})


## Questions

[Github profile](https://github.com/${data.userName})

[E-Mail](mailto:${data.email})
  
  `;
  }
  
  module.exports = generateMarkdown;
  
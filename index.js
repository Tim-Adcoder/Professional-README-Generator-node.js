//package
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

const writeFileAsync = util.promisify(fs.writeFile);


//prompt questions
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'what is the name for your project?',
        name: 'fileName',
    },
    {
        type: 'input',
        message: 'Briefly descript your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What technologies were used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'write tests for your application. ',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Please choose license type:',
        choices: [
            'Apache v2.0',
            'GNU General Public v3.0',
            'MIT',
        ],
        name: 'license',
    },
    ])
};

// README file function
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// create a Table of Contents that contain links to the corresponding sections

function generateMarkdown(answers)  {
    return `
    
# Project: ${answers.fileName}
---------------------------------------------------
## Table of Contents 
1. [FileName](#fileName)
2. [License](#License)
3. [Description](#Description)
4. [Installation](#installation)
5. [Contributing](#Contributing)
6. [Tests](#tests)
7. [GitHub](#GitHub)
8. [Email](#Email)
---------------------------------------------------
## License:

NOTICE: This application is covered by ${answers.license}.
  
## Description
${answers.description}
  
## Installation:
${answers.installation}
  
## Contributing
${answers.contributing}
  
## Tests:
${answers.tests}
  
## GitHub
Find me on [GitHub] (http://github.com/${answers.gitHub})
  
## Email
If you have any questions, I can be reached at [${answers.email}]
  `};


// initialize app
 function init() {
    promptUser()
    .then((answers) => writeFileAsync(`${answers.fileName}.md`,generateMarkdown(answers)))
    .then(() => console.log(`Good work! You have created a README file.`))
    .catch((err) => console.error(err))
};

// Function call to initialize app
init();
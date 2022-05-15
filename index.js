// TODO: Include packages needed for this application
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require("inquirer/lib/objects/choice");

// TODO: Create an array of questions for user input
const questions = [
    //what's the name for your project? (title of README)
    {
        type: 'input',
        message: 'what is the name for your project?',
        name: 'fileName',
    },

        //Please choose license 
 
    // License section with explaination

    {
        type: 'list',
        message: 'Please choose license'
        choice: [
            new inquirer.Separator(),
            "Apache v2.0",
            new inquirer.Separator(),
            "GNU General Public v3.0",
            new inquirer.Separator(),
            "MIT",
        ],
        name: 'License',
    },

    //Please descript your project (Description Session)
    {
        type: 'input',
        message: 'Briefly descript your project.',
        name: 'Description',
    },

    //Installation instructions (Installation Session)
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'Installation',
    },


    //Usage information (Usage Session)
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'Usage',
    },


    //contribution guidelines(Contributing)
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.        If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
        name: 'Contributing',
    },

    //test instructions(Tests)
    {
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here',
        name: 'Tests',
    },



    // Please enter your GitHub username.
    // Please enter your email address.
    // How to can people reach you?
    {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'Questions',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Questions',
    },
    //(Questions session) (a link to profile)
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// create a Table of Contents that contain links to the corresponding sections

// TODO: Create a function to initialize app
function init() {
    inquirer.promopt(questions).then((answers) => {
        writeToFile(
            "ReadMe.md",
            generateMarkdown({
                ...answers,
            })
        );
    });
}

// Function call to initialize app
init();

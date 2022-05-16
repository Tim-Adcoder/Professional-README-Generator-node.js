// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# Project: ${answers.fileName}

  ## Table of Contents 
  [FileName](#fileName)
  [License](#License)
  [Description](#Description)
  [Installation](#installation)
  [Contributing](#Contributing)
  - [Tests](#tests)
  - [GitHub](#GitHub)
  - [Email](#Email)

  ## License:
  ${answers.license}

  ## Description
  ${answers.description}

  ## Installation:
  ${answers.installation}

  ## Contributing
  ${answers.contributing}

  ## Tests:
  ${answers.tests}

  ##GitHub
  Or find me on [GitHub] (http://github.com/${answers.gitHub})

  ##Email
  If you have any questions, I can be reached at [${answers.email}]
`;
}

module.exports = generateMarkdown;

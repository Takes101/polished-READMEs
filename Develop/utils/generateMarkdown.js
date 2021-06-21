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
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  https://github.com/${data.username}/${data.title}
  # Description
  ${data.description}

  # Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#test)
  *[Questions](#questions)

  # Installation
  Must be installed in order to properly run this application:
  ${data.installation}

  # Usage
  To use this application: ${data.usageInformation}

  # License 
  The GitHub license for this application is ${data.license}

  # Contributing
  Contributors: ${data.contribution}

  # Test
  To run tests: ${data.test}

  # Questions
  If any questions remain, contact ${data.email} or ${data.username} on GitHub
`;
}

module.exports = generateMarkdown;

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of README?',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter a title!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Table Of Contents',
            name: 'Table of Contents'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the README (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter your README description!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the Installation Instructions',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please enter the installation instructions!');
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some usage information about the project?',
            default: true
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Provide some usage information about the project:',
            when: ({ confirmAbout }) => confirmAbout
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who are the contributors of this project?',
            validate: contributing => {
                if (contributing) {
                    return true;
                } else {
                    console.log('Please name the contributors');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'How does one test this project?',
            validate: test => {
                if (test) {
                    return true;
                } else {
                    console.log('Please enter test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter the GitHub username to your project. (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license was used?',
            choices: ['GPL', 'MIT', 'Apache', 'GNU', 'None'],
            validate: license => {
                if (license) {
                    return true;
                } else {
                    console.log('Select a valid license!');
                    return false;
                }
            }
        }
    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if(err) {
            return console.log(err);
        } else {
            console.log('README Written!');
        }
    })

}

// TODO: Create a function to initialize app
function init() {
        questions()
        .then(function(data) {
            writeToFile('README.md', generateMarkdown(data));
            console.log(data);
    })
}

// Function call to initialize app
init();

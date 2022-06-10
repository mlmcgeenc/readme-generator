// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'Enter the title of your project',
		validate: (title) => {
			if (title) {
				return true;
			} else {
				console.log('Project title is required');
				return false;
			}
		},
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => (err ? console.log(err) : console.log('README.md created')));
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((answers) => generateMarkdown(answers)).then((markdown) => writeToFile('README.md', markdown));
}

// Function call to initialize app
init();

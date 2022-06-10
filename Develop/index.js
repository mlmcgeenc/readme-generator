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
	{
		type: 'input',
		name: 'description',
		message: 'Enter a description of your project',
		validate: (description) => {
			if (description) {
				return true;
			} else {
				console.log('Project description is required');
				return false;
			}
		},
	},
	// Installation
	{
		type: 'input',
		name: 'installation',
		message: 'Describe how to install your project',
		validate: (installation) => {
			if (installation) {
				return true;
			} else {
				console.log('Installation instructions are required');
				return false;
			}
		},
	},
	// Usage
	{
		type: 'input',
		name: 'usage',
		message: 'Describe how to use your project',
		validate: (usage) => {
			if (usage) {
				return true;
			} else {
				console.log('Usage instructions are required');
				return false;
			}
		},
	},
	// Contribution Guidelines
	{
		type: 'input',
		name: 'contribution',
		message: 'Describe how to contribute to your project',
		validate: (contribution) => {
			if (contribution) {
				return true;
			} else {
				console.log('Contribution guidelines are required');
				return false;
			}
		},
	},
	// Testing Instructions
	{
		type: 'input',
		name: 'testing',
		message: 'Describe any tests written for this project',
		default: 'No tests are currently written for this project',
	},
	// License (list of options) a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
	{
		type: 'list',
		name: 'license',
		choices: [
			'Apache License 2.0',
			'GNU General Public License v3.0',
			'MIT License',
			'BSD 2-clause "Simplified" License',
			'BSD 3-Clause "New" or "Revised" license',
			'Boost Software License 1.0',
			'Creative Commons Zero v1.0 Universal',
			'Eclipse Public License 1.0',
			'GNU Affero General Public License v3.0',
			'GNU General Public License v2.0',
			'GNU Lesser General Public License v2.1',
			'Mozilla Public License 2.0',
			'The Unlicense',
		],
		default: 'MIT License',
	},
	// GitHub username and link to profile
	{
		type: 'input',
		name: 'username',
		message: 'Enter your GitHub username',
		validate: (username) => {
			if (username) {
				return true;
			} else {
				console.log('username is required');
				return false;
			}
		},
	},
	// email
	{
		type: 'input',
		name: 'email',
		message: 'Enter your email address',
		validate: (email) => {
			if (email) {
				return true;
			} else {
				console.log('Email is required');
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
	inquirer
		.prompt(questions)
		.then((answers) => generateMarkdown(answers))
		.then((markdown) => writeToFile('README.md', markdown));
}

// Function call to initialize app
init();

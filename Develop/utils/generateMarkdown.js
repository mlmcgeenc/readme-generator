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
  const { title, description, installation, usage, contribution, testing, license, username, email } = data
	console.log('Markdown created');
	return `
    # ${title}

    ## Description
    ${description}

    ## Table of Contents

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## How to Contribute
    ${contribution}

    ## Tests
    ${testing}

    ## Questions/Contact
    ${username}
    ${email}

`;
}

module.exports = generateMarkdown;

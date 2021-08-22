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
  return `# ${data.title}
  https://github.com/${data.name}/${data.title}
# Description
${data.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

---

## Installation
The following dependencies are necssary and require installation to run the app: ${data.install}.

## Usage
In order to use the application, please run it in the ${data.usage}.

## License
This application is licensed under the ${data.license} license.

## Contributors
The following people contributed to this project: ${data.contribute}

## Test
The following is needed to test and run the application: ${data.test}

## Questions 
If you have any questions or issues please feel free to reach out at: ${data.email}.

`;
}

module.exports = generateMarkdown;

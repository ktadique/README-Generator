// function to generate markdown for README
function generateMarkdown(data) {
  //Licences
  const chosenLicense = data.projectLicense;
  let licenseBadge = "";
  let licenseText = `This project is licensed under the ${chosenLicense} license.`;

  //License Badges
  const licenseMIT =
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  const licenseGNU =
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  const licenseMozilla =
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

  switch (chosenLicense) {
    case "MIT":
      licenseBadge = licenseMIT;
      break;
    case "GNU GPL v3":
      licenseBadge = licenseGNU;
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = licenseMozilla;
      break;
    case "No License":
      licenseText = "This project has no license";
      break;
    default:
      console.log("Please select one of the options.");
      break;
  }

  return `# ${data.projectTitle}

${licenseBadge}

## Description​
${data.projectDesc}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
​
## Installation
​
In order to properly use this ${data.projectTitle}, please ensure that [Node.js](https://nodejs.org/en/) is installed

Then ensure that all necessary dependencies by running the following command:
${data.projectInstall}


​
## Usage
​
In order to use this ${data.projectTitle} please do the following: 

${data.projectUsage}.
​
## License
​
${licenseText}
    
## Contributing

To contribute to this project, ​${data.projectContribute}

## Tests
In order to run tests on this project please run the following command:
​
​${data.projectTest}

## Questions
​
- If you have any questions regarding this project, please contact me via [email](mailto:${data.email}).
- Or check out my github @[${data.username}](https://github.com/${data.username}) for other projects! 

`;
}

module.exports = generateMarkdown;

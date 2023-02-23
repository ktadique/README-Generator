// function to generate markdown for README
function generateMarkdown(data) {
  const chosenLicense = data.projectLicense;
  let licenseBadge = "";
  let licenseText = "";

  //License Badges
  const licenseMIT = "";
  const licenseGNU = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  const licenseMozilla = "";

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
      licenseText = "No License";
      break;
    default:
      console.log("Please select one of the options");
      break;
  }

return `# ${data.projectTitle}
​
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
​
## Description
​
I will use this code to give taking over the world a go.
​
## Table of Contents 
​
* [Installation](#installation)
​
* [Usage](#usage)
​
* [License](#license)
​
* [Contributing](#contributing-here-is-a-header)
​
* [Tests](#tests)
​
* [Questions](#questions)
​
## Installation
​
To install necessary dependencies, run the following command:
​
```
npm install
```
​
## Usage
​
You can use this applicaiton by running `node index.js`.
​
## License
​
This project is licensed under the MIT license.
    
## Contributing Here Is A Header
​
Fork and pull request.
​
## Tests
​
To run tests, run the following command:
​
```
npm test
```
​
## Questions
​
`;}

module.exports = generateMarkdown;

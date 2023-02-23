// function to generate markdown for README
function generateMarkdown(data) {
  //markdown formatting
  const codeBlockBacktick = "```";

  //Preview
  let hasPreview = data.projectPreviewConfirm;
  let projPreview;

  if (hasPreview) {
    projPreview = data.projectPreview;
  } else {
    projPreview = "This project currently has no preview image/video";
  }

  //Licences
  const chosenLicense = data.projectLicense;
  let licenseBadge;
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

## Description

${data.projectDesc}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Before using this ${data.projectTitle}, please ensure that [Node.js](https://nodejs.org/en/) is installed, 
then ensure that all necessary dependencies are installed by running the following command:

${codeBlockBacktick}bash
${data.projectInstall}
${codeBlockBacktick}

## Usage

In order to use this ${data.projectTitle} please do the following: 

${codeBlockBacktick}md
${data.projectUsage}
${codeBlockBacktick}

## ${data.projectTitle} Preview

${projPreview}

## License

${licenseText}
    
## Contributing

To contribute to this project, ${data.projectContribute}

## Tests

In order to run tests on this project please run the following command:

${codeBlockBacktick}bash
${data.projectTest}
${codeBlockBacktick}

## Questions

This README was generated using the [README Generator](https://github.com/ktadique/README-Generator)!

If you have any questions regarding this project, please contact me via [email](mailto:${data.email})<br>
Or check out my GitHub **@[${data.username}](https://github.com/${data.username})** for my other projects! 

`;
}

module.exports = generateMarkdown;

// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = "";
  const chosenLicense = data.projectLicense;

  //License Badges
  let licenseText = "";
  const licenseMIT = "";
  const licenseGNU = "";
  const licenseMozilla = "";

  switch (chosenLicense) {
    case "MIT":
      licenseBadge = licenseMIT;
      licenseText = chosenLicense;
      break;
    case "GNU GPL v3":
      licenseBadge = licenseGNU;
      licenseText = chosenLicense;
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = licenseMozilla;
      licenseText = chosenLicense;
      break;
    case "No License":
      licenseText = "This project has no License";
      break;
    default:
      console.log("Please select one of the options");
      break;
  }
}

module.exports = generateMarkdown;

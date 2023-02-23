const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Please enter your GitHub username:",
    name: "username",
  },
  {
    type: "input",
    message: "Please enter your email:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter the title of your project:",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Please give your project a short description:",
    name: "projectDesc",
  },
  {
    type: "confirm",
    message: "Does this project contain any preview images/videos?",
    name: "projectPreviewConfirm",
  },
  {
    type: "editor",
    message:
      "Please include any images or video link using markdown syntax eg. ![alt text](/img/screenshot.png)",
    name: "projectPreview",
    when(data) {
      return data.projectPreviewConfirm;
    },
  },
  {
    type: "list",
    message: "Please select a project license:",
    name: "projectLicense",
    choices: ["MIT", "GNU GPL v3", "Mozilla Public License 2.0", "No License"],
  },
  {
    type: "input",
    message: "Please input what command must be ran to install this project:",
    name: "projectInstall",
  },
  {
    type: "editor",
    message: "Please explain how to use the project:",
    name: "projectUsage",
  },
  {
    type: "input",
    message: "Please explain how users may contribute to the project:",
    name: "projectContribute",
  },
  {
    type: "input",
    message: "Please input what command must be run to test this project:",
    name: "projectTest",
  },
];

// function to write README file
function writeToFile(data) {
  //use file system module to create/write md file
  fs.writeFile("README.md", data, (error) =>
    error
      ? console.error(error)
      : console.log("README was created successfully!")
  );
}

// function to initialize program
function init() {
  //prompt user questions regarding project
  inquirer.prompt(questions).then((data) => {
    //then call writeToFile function using data from questions
    writeToFile(generateMarkdown(data));
  });
}

// function call to initialize program
init();

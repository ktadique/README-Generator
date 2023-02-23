const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Please enter your name:",
    name: "name",
  },
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
    type: "list",
    message: "Please select a project license:",
    name: "projectLicense",
    choices: ["MIT", "GNU GPL v3", "Mozilla Public License 2.0", "No License"],
  },
  {
    type: "input",
    message: "Please explain how the project will be installed:",
    name: "projectInstall",
  },
  {
    type: "input",
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
    message: "Please explain how users may test the project:",
    name: "projectTest",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
  });
}

// function call to initialize program
init();

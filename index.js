// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?(Required)",
  },
  {
    type: "input",
    name: "description",
    message: "Give a description of your project?(What, why, how, Required)",
  },
  {
    type: "input",
    name: "installation",
    message: "What was your installation process?",
  },
  {
    type: "input",
    name: "usage",
    message: "Give a brief description of your usage information?",
  },
  {
    type: "input",
    name: "features",
    message: "What features do you have?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who were the contributors to this project (If any)?",
    defualt: "I was the only contributor.",
  },
  {
    type: "input",
    name: "test",
    message: "Breifly describe your testing process?",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a licences badge.",
    choices: ["No license", "Mit", "Mozilla"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your github user name?(Required)",
  },
  {
    type: "input",
    name: "githubLink",
    message: "What is your github link?(Required)",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?(Required)",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "No license") {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return "* [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `App is licensed under ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  
  ${renderLicenseBadge(data.license)}
  
  ${data.title}

  ## ${data.description} 
  

  
  
  ## Table of Contents 

  
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#Contributors)
  * [Tests ](#test)
  * [Questions](#questions)
  
  
  ## installation
  ${data.installation}
  
  


  ## Usage 
  ${data.usage}
  
  
  
  
  ## License
  ${renderLicenseSection(data.license)}

  

  ## Contributors
  ${data.contributors}
  
 

  ## Test
   ${data.test}




  ## Questions
  If you need to reach me with any additional questions: 
  
  ### GitHub Username
  ${data.githubUsername}
  ### [GitHub Link]
  (${data.githubLink})
  ### Email
  ${data.email}

`;
}

module.exports = generateMarkdown;

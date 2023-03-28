//Import required packages
var inquirer = require('inquirer');
const fs = require('fs');

// Declare variables
var readmeAnswers

//Define the questions to ask the user
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What is your project title?',
  validate: function(input){return input?.length>0} // makes the question for the user required
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Provide a short description of your project',
    },
    {
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project?',
    },
    {
    type: 'input',
    name: 'Usage',
    message: 'What are steps needed to use your project?',
    },
    {
    type: 'input',
    name: 'Credits',
    message: 'Who are your collaborators?',
    },
    {
    type: 'list',
    name: 'Licence',
    message: 'Please choose a licence',
    choices: ["Community","MIT","GPL-3.0"]
    },
]

// Define the function to create the Markdown file
function createMarkdown(questions) {
    var md = ''
    Object.keys(questions).forEach((key) => {
      md += '## ' + key + '\n'//add header to each question
      md += '> ' + questions[key] + '\n'// add answer to each question
    })


    // Call the writToFile() function with Markdown string
writeToFile(md)


}
// Prompt the user with the questions defined above
    inquirer.prompt(questions).then((answers) => {
        console.log('\nOrder receipt:');
        console.log(JSON.stringify(answers, null, '  '));
        readmeAnswers = JSON.stringify(answers, null, '  ')
        createMarkdown(answers)
      });
      function writeToFile( data) {

// Define the function to write the Markdown string to a file 
fs.writeFile("README.md", data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

      }
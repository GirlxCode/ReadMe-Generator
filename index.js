var inquirer = require('inquirer');
const fs = require('fs');
var readmeAnswers
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


function createMarkdown(questions) {
    var md = ''
    Object.keys(questions).forEach((key) => {
      md += '## ' + key + '\n'
      md += '> ' + questions[key] + '\n'
    })

writeToFile(md)


}

    inquirer.prompt(questions).then((answers) => {
        console.log('\nOrder receipt:');
        console.log(JSON.stringify(answers, null, '  '));
        readmeAnswers = JSON.stringify(answers, null, '  ')
        createMarkdown(answers)
      });
      function writeToFile( data) {


fs.writeFile("README.md", data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

      }
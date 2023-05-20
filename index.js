const inquirer = require("inquirer");

const questionPrompts = [
    {
        type:"input",
        message: "Please enter logo text (Note must be three characers only).",
        name: "logoText",
        validate: function(input){
            if (input.length > 3){
                return "Logo text must be only three characters.";
            }
            return true;
        }
    },
    {
        type:"input",
        message: "Enter logo text hexadecimal color number.",
        name: "logoTextColor",
    },
    {
        type: "list",
        message: "What shape would you like the logo to have",
        choices: ["Circle", "MIT License", "Triangle", "Square"],
        name: "logoShape",
    },
    {
        type:"input",
        message: "Enter shape color hexadecimal number",
        name: "logoShapeColor",
    },
]


function init(){
    inquirer.prompt(questionPrompts).then((answers) => {

    });

}

init();
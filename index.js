//// Runs the application using imports from lib/
const inquirer = require("inquirer");

const fs = require('fs');


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
        choices: ["Circle", "Triangle", "Square"],
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

        /*
        console.log(answers.logoShape);

        const { Shape, Triangle } = require('./lib/shapes');
        //const triangle = new Triangle('red');
        const shape = new Shape('red');
        const triangleMarkup = shape.render();
        console.log(triangleMarkup);
        */

    const {Triangle, Circle, Shape } = require('./lib/shapes');

    let shape;

    switch (answers.logoShape) {
    case 'Circle':
        shape = new Circle(answers.logoShapeColor,answers.logoTextColor, answers.logoText);
        break;
    case 'Triangle':
        shape = new Triangle(answers.logoShapeColor,answers.logoTextColor, answers.logoText);
        break;
    case 'Square':
        shape = new Shape(answers.logoShapeColor,answers.logoTextColor, answers.logoText);
        break;
    default:
        console.log('Invalid shape selection.');
        return;
    }

    const shapeTemp = shape.render();
    console.log(shapeTemp);

    writeToFile("./examples/newShape.svg" , generateShape(shapeTemp))
        
    });

}

function generateShape(shape) {

    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
         ${shape}
         
    </svg>
    `;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    // prints out error message if the file cannot be generate.
    // prints out successful message if the file generates. 
    err ? console.error(err) : console.log('File generation is successful!')
    );
}

init();
# SVG Logo Maker Pro

## Description

This command-line application allows freelance web developers to generate simple logos for their projects without having to rely on a graphic designer. 
The application prompts the user for input regarding the logo's text, text color, shape, and shape color, and then generates an SVG file with the specified logo.


## Table of Contents

- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview](#preview)
- [Features](#features)
- [Technology Used](#technologies-used)


## Installation

1. Ensure you have Node.js installed on your machine. You can download it from the official website
2. Download the application: You can either download the application from a website or clone it from a Git repository. If you're cloning it from a Git repository, you'll need to have Git installed on your computer.
3. Extract the files: Once you have the application downloaded, extract the files from the zip folder. You can extract the files to any location on your computer.
4. In the terminal or command prompt, navigate to the project's root directory. Run the following command to start the Node.js file:
    ```
    node index.js
    ```
    The Node.js file will now be executed, and you should see any output or logs in the console.

## User Story

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Preview

![alt text](/media/screenshot.png)

## Features

The Travel Weather App includes the following features:

- Customizable Text 
- Shape Selection
- Text Color Selection
- SVG File Generation
- Shape Color Selection

## Technologies Used
- JavaScript
- Node.js
- SVG


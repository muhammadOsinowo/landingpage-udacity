# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## How I went about it.
A quick walkthrough the code.

The declared several global variables and a variable  "section" specially meant to be like an array that'll store the nav elements.

The addLinks function takes in an element parameter , adds a list and an anchored element and it is all appended to the span tag.
Also, a function "scroll" is added for smooth scrolling.
The scroll function prevents the default behaviour and sets a top to bottom offset..

- the function Intersectionobserver checks for and add active class to the section in view. It utilizes an if statement

- The function OcNav opens and closes the navbar.                                   I also included some other secondary features and functions like sections.map to loop through the sections, a for loop to add bars to toggle btn amongst other functions. 

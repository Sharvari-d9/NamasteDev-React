# NamasteDev-React

## _What is CDN_

- 

## _Cross Origin_

- 


## _What is react_

- Javascript library created by Meta developers

- two scripts that are include , one is core react javascript code and other one is DOM development code

- Philosophy with which react was created was to handle the most expensive function in any web application that is DOM manipulation. for ex: clicking a button can add or remove elements. All libraries try to optimize this as much as possible

- it can work in whole page or only as a part of a page as well

## _Order of the script inclusion file_

- Yes it matter, cause that script order is the way how the libraries are included in your application and if the order is changed it throws error for the parts where you are using React
- Error : Uncaught ReferenceError: React is not defined


## Render

- replaces the existing code of that id 

## package.json

- contains all the config for the npm 

## Dependency

- ^ or ~ symbol means that either take this version, or automatically update it if any other update is available
- ^ - minor
- ~ - major

## package-lock.json

- keeps the track of the exact verion of all packages installed
- to avoid compatiblity issues for example to avoid discrepancy like code works in dev but not in production

## node_modules

- contains all the code that we fetch from npm

- Transetive dependency
- if you have package and package-lock json , we can recreate node modules hence we dont need to pushed it to git
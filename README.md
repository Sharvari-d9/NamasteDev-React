# NamasteDev-React

## _What is CDN_

- Content Delivery Network
- it enables faster, cheaper, reliable and secure way to deliver content
- how it works is replicating the content from the original server to the nearest location based on where the user is trying to access the content


## _Cross Origin Resource Sharing(CORS)_

- mechanism by which the browser is made aware of origin of the resource other than current one from where the source would be loaded
- if they are from different domain and required permission or access is not present then we cors origin error
- this is more for security purposes rather than an error


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
- version format is <major>.<minor>.<patch>

## package-lock.json

- keeps the track of the exact verion of all packages installed
- to avoid compatiblity issues for example to avoid discrepancy like code works in dev but not in production

## Hash value in package-lock json

- keeps the hash to verify the version 

## node_modules

- contains all the code that we fetch from npm
- huge because of transitive dependencies
- if you have package and package-lock json , we can recreate node modules hence we dont need to pushed it to git
- we absolutely require to add package and package-lock.json to git
- simple terms whatever can be recreated does not need to go on git

## npx 
- executes the package

## including react into our code
- we looked at the way by including cdn links, but that is not a good practice 

## type in script node in html
- if we dont mention the type by default the src is considered as plain javascript and hence if we do import in our src file, it throws error 
- browser script dont understand import
- hence we declare it as type as module

## parcel
- created a dev build for us and hosts the app on the local server
- parcel also reflects the changes as soon as we save
- HMR = hot module replacement
- it uses file watching algorithm in the background - which is written in c++
- caching - faster build (.parcel-cache)
- image optimization 
- minification of the file 
- bundling of the files
- compressing 
- consistent hashing - keeps track of 
- code splitting 
- differential bundling - when app is hosted, it cant be open in different browser, different version, etc - all that i ssupported by parcel for your app
#### it does a lot of things, please read https://parceljs.org/ 


## creating dev and production builds 
- when dev build is created, the files generated are stored in dist folder and are hosted on local server
- when production build is created the same files are replaced in the dist folder

## Config driven UI
- dynamic UI based on the data retreieved 
- eg: delivery option different in different cities, hence showing the list of restuarants only specific that area
- important concept for system design interview

## .?(optional chaining)
- 

## React Hooks
(Normal JS utility functions)
so if you are modifying a data and check its value in the console, it will show modified data, but in UI it will still show old data. but we want updated data and that is where react hooks come into the picture. This DOM manipulation that should happen as fast as possible is what any library aims to optimize, be it angular, react, view, etc
- useState() - used to create a state variable - maintains the state of the variable
whenever a state variable updates React re-renders the components
- useEffect() - used to call a callback function after rendering of the component is completed
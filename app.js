// const heading1 = React.createElement("h1", {id : "heading"}, "Hello World! from React");
// const root1 = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading1); // createElement returns a javascript object

// root1.render(heading1); // converts the object to h1 tag and add the returned object to the DOM

/**
 * <div id = "parent">
 *  <div id = "child">
 *      <h1>I am h1 tag </h1>
 *   </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "This is Namaste React! "),
    React.createElement("h2", {}, "by Akshay Saini")]
  ),
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "This is h1 tag "),
    React.createElement("h2", {}, "This is h2 tag")]
  )]
);
console.log(parent);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");
const root =  ReactDOM.createRoot(document.getElementById("root"));

//JSX
//it is not HTML in JS
//JSX has HTML/XML like syntax
//jsx is not pure javascript and hence cant be underestood by the JS engine directly
//the job to make it understandable is done by parcel
//jsx is transpiled by parcel to be understood by the JS engine
/**
 * difference between compile and transpiled
 *  - the level of abstraction changes when a code is compiled.
 *  - for ex. source code is compiled and is converted to binary which a low level code udnerstood by the machine
 *  - whereas in transpiling the code is transformed to same level of abstraction
 *  - for ex jsx -> react // done by parcel via babel
 *
 * JSX => React.createElement => ReactElement-JS object => HTMLElement(render)
 */

const jsxHeading = <h2 className="head" tabIndex="1"> JSX Heading!</h2>;

// root.render(heading);
root.render(jsxHeading);
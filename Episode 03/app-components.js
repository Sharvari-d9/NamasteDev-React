import React from "react";
import ReactDOM from "react-dom/client";

// React Element
//React Component
const TItleHeading = () => (
    <h1 className="head" tabIndex="5">
        Namaste React by component - Previously JSX
    </h1>
);

/**
 * React Components
 * - is a normal javascript code that returns a react element or jsx
 * class based - old way 
 * functional  - new and latest
 */
/**
 * React functional component 
 * - Syntax is that it will always start with capital letter
 * 
 * why Components -> everything in the react app will be component, so handling or editing one component wont affect the others
 * with components the process becomes way more efficient
*/
const HeadingComponent = () =>(
    
    <div id="container">
        <TItleHeading/> 
        <h1>Namaste React functional component</h1>
    </div>
     
); //Adding one component into another is called component Composition
console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); //syntax that babel understands that this is a component

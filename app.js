import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Head
 * -log
 * - Nav items 
 * 
 * Body
 * -search bar
 * - restaurant container
 *  - restaurant card
 * 
 * Footer 
 * - Links
 * - contact
 * - address
 * - copyright
 */
const Header = () =>{
    return(
        <div className="header">
            <div>
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjTTP11vgjnjicLVFtqRzFeenTFuQY_tnkcAkbQZVtm2eVQO1RHmh4uVZvCabzWt9oIQ&usqp=CAU"></img>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
        <Header/>    
        </div>
    )

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
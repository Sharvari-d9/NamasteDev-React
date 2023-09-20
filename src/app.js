import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


/**
 * Head
 * -log
 * - Nav items
 *
 * Body
 * -search bar
 * - restaurant container
 *  - restaurant card
 *  - tag
 *  - Name of res, start rating
 *  - cusine
 *  - price
 *
 * Footer
 * - Links
 * - contact
 * - address
 * - copyright
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

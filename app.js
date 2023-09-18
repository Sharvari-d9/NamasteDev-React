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
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjTTP11vgjnjicLVFtqRzFeenTFuQY_tnkcAkbQZVtm2eVQO1RHmh4uVZvCabzWt9oIQ&usqp=CAU"
        ></img>
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
  );
};
const RestaurantCard = () => {
  return (
    <div className="restaurant-card" style={{ backgroundColor: "beige" }}>
      <img
        className="restaurant-logo"
        alt="Aroma Picture"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jdfi5bh0hmdet7g7qk5z"
      ></img>
      <h3>Aroma's Hyderabad House</h3>
      <h4>Biryani, North Indian</h4>
      <h4>4.4</h4>
      <h4>25 mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurant-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      </div>     
    </div>
  );
};
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

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
const resObj = {
  card: {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "468049",
      name: "Burger & Pizza Factory",
      cloudinaryImageId: "lwxeoxxatz4rxa412yla",
      locality: "Wadgaonsheri",
      areaName: "Viman Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "American", "Beverages"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "468049",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4200,
      },
      parentId: "281150",
      avgRatingString: "3.7",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-19 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=468049&source=collection&query=Burger",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  },
  relevance: {
    type: "RELEVANCE_TYPE_ON_MENU_RETURN",
    sectionId: "MENU_RETURN_FOOD",
  },
};
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
const RestaurantCard = (props) => {
  const {resData} = props;
  console.log(resData)
  return (
    <div className="restaurant-card" style={{ backgroundColor: "beige" }}>
      <img
        className="restaurant-logo"
        alt="Aroma Picture"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jdfi5bh0hmdet7g7qk5z"
      ></img>
      <h3>{resData.card.info.name}</h3>
      <h4>{resData.card.info.cuisines.join(", ")}</h4>
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
        <RestaurantCard
          resData = {resObj}
        />
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

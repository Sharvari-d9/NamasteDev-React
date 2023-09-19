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
const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "50873",
          name: "Shangri-La Kamalbaug",
          cloudinaryImageId: "zgksswmhjec8mrmwphuu",
          locality: "Kamal Bagh",
          areaName: "Wagholi",
          costForTwo: "₹400 for two",
          cuisines: ["Mughlai", "North Indian", "Chinese", "Malwani"],
          avgRating: 4.1,
          feeDetails: {
            restaurantId: "50873",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 7100,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 7100,
          },
          parentId: "181695",
          avgRatingString: "4.1",
          totalRatingsString: "5K+",
          promoted: true,
          adTrackingId:
            "cid=8211790~p=1~eid=0000018a-ace7-56f2-17b5-70b8004c0174~srvts=1695117956850~83645",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 7,
            serviceability: "SERVICEABLE",
            slaString: "36 mins",
            lastMileTravelString: "7.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-19 16:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
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
          link: "swiggy://menu?restaurant_id=50873&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "162205",
          name: "Peetuk",
          cloudinaryImageId: "wtderpk6fvatn8blfj6q",
          locality: "Viman Nagar",
          areaName: "Viman Nagar",
          costForTwo: "₹300 for two",
          cuisines: ["Bengali", "Biryani", "Thalis"],
          avgRating: 4,
          feeDetails: {
            restaurantId: "162205",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3400,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3400,
          },
          parentId: "1668",
          avgRatingString: "4.0",
          totalRatingsString: "10K+",
          promoted: true,
          adTrackingId:
            "cid=8137714~p=2~eid=0000018a-ace7-56f2-17b5-70b9004c021a~srvts=1695117956850~83645",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "29 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-19 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
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
          link: "swiggy://menu?restaurant_id=162205&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "235191",
          name: "Biryani By Kilo",
          cloudinaryImageId: "jazkzen7a6lw94v8cdj1",
          locality: "Yashwant Nagar",
          areaName: "Kharadi",
          costForTwo: "₹700 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Desserts",
          ],
          avgRating: 4,
          feeDetails: {
            restaurantId: "235191",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3900,
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
              {
                name: "BASE_TIME",
              },
            ],
            totalFee: 3900,
          },
          parentId: "130",
          avgRatingString: "4.0",
          totalRatingsString: "5K+",
          promoted: true,
          adTrackingId:
            "cid=8048789~p=3~eid=0000018a-ace7-56f2-17b5-70ba004c0328~srvts=1695117956850~83645",
          sla: {
            deliveryTime: 41,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "41 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-20 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
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
          link: "swiggy://menu?restaurant_id=235191&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "728555",
          name: "Goila Butter Chicken",
          cloudinaryImageId: "2acf0681a049dea7dac7271cf7ccc560",
          locality: "NEAR RADISSON",
          areaName: "KHARADI",
          costForTwo: "₹600 for two",
          cuisines: ["North Indian", "Biryani", "Kebabs", "Desserts"],
          avgRating: 4,
          feeDetails: {
            restaurantId: "728555",
            fees: [
              {
                name: "ANCILLARY_SURGE_FEE",
              },
              {
                name: "BASE_DISTANCE",
                fee: 3400,
              },
              {
                name: "BASE_TIME",
              },
            ],
            totalFee: 3400,
          },
          parentId: "322587",
          avgRatingString: "4.0",
          totalRatingsString: "50+",
          promoted: true,
          adTrackingId:
            "cid=8041881~p=4~eid=0000018a-ace7-56f2-17b5-70bb004c0412~srvts=1695117956850~83645",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "38 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-19 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
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
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=728555&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "50799",
          name: "Pind Punjab",
          cloudinaryImageId: "fu6hew6ih1h8bxgkipip",
          locality: "Konark Nagar",
          areaName: "Viman Nagar",
          costForTwo: "₹450 for two",
          cuisines: [
            "North Indian",
            "Indian",
            "Punjabi",
            "Chinese",
            "Biryani",
            "Thalis",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "50799",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3400,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3400,
          },
          parentId: "4196",
          avgRatingString: "4.2",
          totalRatingsString: "10K+",
          promoted: true,
          adTrackingId:
            "cid=8194354~p=5~eid=0000018a-ace7-56f2-17b5-70bc004c055c~srvts=1695117956850~83645",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 2.8,
            serviceability: "SERVICEABLE",
            slaString: "32 mins",
            lastMileTravelString: "2.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-19 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
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
          link: "swiggy://menu?restaurant_id=50799&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "672573",
          name: "Golden Pagoda",
          cloudinaryImageId: "3aa0069dbd58cd6e1892b09f08cb58a4",
          locality: "Xenia Building",
          areaName: "Kharadi",
          costForTwo: "₹400 for two",
          cuisines: ["Indian"],
          avgRating: 3.9,
          feeDetails: {
            restaurantId: "672573",
            fees: [
              {
                name: "ANCILLARY_SURGE_FEE",
              },
              {
                name: "BASE_DISTANCE",
                fee: 3400,
              },
              {
                name: "BASE_TIME",
              },
            ],
            totalFee: 3400,
          },
          parentId: "457173",
          avgRatingString: "3.9",
          totalRatingsString: "20+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "28 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-20 04:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
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
          link: "swiggy://menu?restaurant_id=672573&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "586017",
          name: "The Chai Cafe - Viman Nagar",
          cloudinaryImageId: "ahwewex3hvz3pfkw7ltp",
          locality: "Opposite Udaan Biodiversity Park",
          areaName: "Viman Nagar",
          costForTwo: "₹250 for two",
          cuisines: ["Cafe", "Snacks", "Indian", "Chinese"],
          feeDetails: {
            restaurantId: "586017",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3400,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3400,
          },
          parentId: "206514",
          avgRatingString: "--",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "27 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-19 17:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
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
          link: "swiggy://menu?restaurant_id=586017&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "433554",
          name: "Khichdi Junction",
          cloudinaryImageId: "tm4xfozyzagsblmfp6ab",
          locality: "Old Mundhwa Road",
          areaName: "Wadgaon Sheri",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian"],
          avgRating: 4.2,
          feeDetails: {
            restaurantId: "433554",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3400,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3400,
          },
          parentId: "117819",
          avgRatingString: "4.2",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 0.9,
            serviceability: "SERVICEABLE",
            slaString: "21 mins",
            lastMileTravelString: "0.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-19 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
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
          link: "swiggy://menu?restaurant_id=433554&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
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
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } =
    resData?.card.card.info;
  const { slaString } = resData?.card.card.info.sla;

  console.log(resData);
  return (
    <div className="restaurant-card" style={{ backgroundColor: "beige" }}>
      <img
        className="restaurant-logo"
        alt="Aroma Picture"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};
/**
 * unique id provides great optimization
 * key is providing that 
 */
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
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

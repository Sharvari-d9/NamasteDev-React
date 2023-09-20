import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //State variable - Super powerful variable
  const [restaurantList,setRestaurantList] = useState(resList);

  //Normal JS Variable
  let restaurantListJS = [
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
            avgRating: 3,
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
            avgRatingString: "4.2",
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
            avgRating: 3,
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
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
            
            const filteredList = restaurantList.filter(
              (res) => res.card.card.info.avgRating > 4
            )
            console.log(filteredList);
            setRestaurantList(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

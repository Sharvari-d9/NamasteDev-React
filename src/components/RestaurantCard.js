import { CDN_URL  } from "../utils/constants"; // named varables import
export const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating } =
      resData?.card.card.info;
    const { slaString } = resData?.card.card.info.sla;
  
    // console.log(resData);
    return (
      <div className="restaurant-card" style={{ backgroundColor: "beige" }}>
        <img
          className="restaurant-logo"
          alt="Aroma Picture"
          src={
            CDN_URL +
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
export default RestaurantCard;
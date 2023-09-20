import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
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

export default Body;

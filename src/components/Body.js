import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, filteredRestaurant] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn-filter"
          onClick={() => {
            const filterLogic = listOfRestaurant.filter(
              (resData) => resData.info.avgRating > 4
            );
            filteredRestaurant(filterLogic);
            console.log(filterLogic);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

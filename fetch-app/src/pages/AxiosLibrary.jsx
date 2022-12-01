import { useEffect, useState } from "react";
import axios from "axios";

const AxiosLibrary = () => {
  const [dish, setDish] = useState(null);

  const getData = () => {
    return axios
      .get("https://random-data-api.com/api/food/random_food")
      .then((response) => setDish(response.data ? response.data : []));
  };

  useEffect(() => {
    getData();
  }, []);

  const renderDish = () => {
    if (!dish) {
      return null;
    }
    return (
      <div>
        <h3>{dish.dish}</h3>
      </div>
    );
  };

  return (
    <div>
      <h1>What will I eat today?</h1>
      {renderDish()}
      <button type="submit" onClick={() => getData()}>
        New Dish
      </button>
    </div>
  );
};

export default AxiosLibrary;

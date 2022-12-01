import { useEffect, useState } from "react";

const AsyncAwait = () => {
  const [dish, setDish] = useState(null);

  async function getData() {
    try {
      const response = await fetch(
        "https://random-data-api.com/api/food/random_food"
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      setDish(data ? data : []);
    } catch (error) {
      console.error(`Something went wrong: ${error}`);
    }
  }

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

export default AsyncAwait;

import React, { useState } from "react";
import StarRating from "./components/star-rating";

function App() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="App">
      <h1>Star Rating Component</h1>
      <StarRating noOfStars={5} onRatingChange={handleRatingChange} />
      <p>Selected Rating: {rating}</p>
    </div>
  );
}

export default App;

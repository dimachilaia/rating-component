import { useState } from "react";
import Rating from "./components/Rating";
import Selected from "./components/Selected";

function App() {
  const [showPage, setShowPage] = useState(false)
  const [rating, setRating] = useState(null)



  return (
    <div>
      {showPage ? (
        <Selected rating={rating}/>
      ) : <Rating rating={rating} setRating={setRating} setShowPage={setShowPage}/>}
    </div>
  );
}

export default App;

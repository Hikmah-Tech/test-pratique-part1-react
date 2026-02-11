import { useState } from "react";

function Search({ onSearch }) {
  const [city, setCity] = useState("");


  // Function to handle the submit
  const handleSubmit = (e) => {
    // pREVENT THE DEFAUSLT BEHANVOIT OF THE FORM.
    
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity(""); // Clear input after search
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city name (e.g. London)"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
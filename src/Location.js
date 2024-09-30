import React, { useState } from "react";
import "./Location.css";
import { useNavigate } from "react-router-dom";

const Location= () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [error, setError] = useState("");

  // List of Indian states and cities
  const statesWithCities = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore", "Hubli"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
    // Add more states and cities here
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/PersonalDetails");
  };

  // Extract the states
  const states = Object.keys(statesWithCities);

  // Extract cities for the selected state
  const cities = selectedState ? statesWithCities[selectedState] : [];
  const isNextDisabled = !selectedState || !selectedCity;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedState || !selectedCity) {
      setError("Please select both a state and a city.");
    } else {
      setError("");
      alert(`You selected: ${selectedCity}, ${selectedState}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Select Your Location</h2>
      <form onSubmit={handleSubmit}>
        {/* State Dropdown */}
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity(""); // Reset city when state changes
            }}
          >
            <option value="">-- Select State --</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* City Dropdown */}
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">-- Select City --</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

				<button className="btn3"

				onClick={handleClick}
				style={{ marginTop: "10%" }}
				type="submit" disabled={isNextDisabled}>
            Next
          </button>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Location;

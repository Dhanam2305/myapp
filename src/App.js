// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import BusList from "./components/BusList";
import TicketForm from "./components/TicketForm";
import Confirmation from "./components/Confirmation";
import "./App.css";

function App() {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSearch = (searchData) => {
    // Mock bus data based on search criteria
    const mockBuses = [
      { name: "Express Bus", time: "10:00 AM", price: 50 },
      { name: "Local Bus", time: "12:00 PM", price: 30 },
    ];
    setBuses(mockBuses);
  };

  const handleSelectBus = (bus) => {
    setSelectedBus(bus);
  };

  const handleSubmitBooking = (details) => {
    setBookingDetails(details);
    setSelectedBus(null); // Clear selected bus after booking
  };

  return (
    <div className="app">
      <Navbar />
      {!bookingDetails && (
        <>
          <SearchBar onSearch={handleSearch} />
          {buses.length > 0 && (
            <BusList buses={buses} onSelectBus={handleSelectBus} />
          )}
          {selectedBus && (
            <TicketForm selectedBus={selectedBus} onSubmit={handleSubmitBooking} />
          )}
        </>
      )}
      {bookingDetails && <Confirmation bookingDetails={bookingDetails} />}
    </div>
  );
}

export default App;

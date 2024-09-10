// src/components/Confirmation.js
import React from "react";

function Confirmation({ bookingDetails }) {
  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      <p>
        <strong>Name:</strong> {bookingDetails.name}
      </p>
      <p>
        <strong>Email:</strong> {bookingDetails.email}
      </p>
      <p>
        <strong>Bus:</strong> {bookingDetails.bus.name}
      </p>
      <p>
        <strong>Departure:</strong> {bookingDetails.bus.time}
      </p>
    </div>
  );
}

export default Confirmation;

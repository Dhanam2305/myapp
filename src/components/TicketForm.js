// src/components/TicketForm.js
import React, { useState } from "react";

function TicketForm({ selectedBus, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    onSubmit({ name, email, bus: selectedBus });
  };

  return (
    <div className="ticket-form">
      <h3>Book a ticket on {selectedBus.name}</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Book Ticket</button>
    </div>
  );
}

export default TicketForm;

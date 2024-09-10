// src/components/BusList.js
import React from "react";

function BusList({ buses, onSelectBus }) {
  return (
    <div className="bus-list">
      <ul>
        {buses.map((bus, index) => (
          <li key={index} onClick={() => onSelectBus(bus)}>
            <strong>{bus.name}</strong> - {bus.time} - ${bus.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusList;

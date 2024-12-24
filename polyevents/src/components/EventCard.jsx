import React from 'react';

const EventCard = ({ image, name, date, description, createdBy, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-80 border-2 border-blue-200">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="truncate text-xl font-semibold text-gray-800" title={name}>{name}</h2>
        <p className="text-sm text-gray-500 mt-1">{date}</p>
        <p className="text-gray-700 mt-3 line-clamp-2">{description}</p>
        <p className="text-sm text-gray-500 mt-2">Created by: <span className="font-semibold">{createdBy}</span></p>
        <p className="text-lg font-bold text-blue-500 mt-2">{price} DT</p>
        <button className="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Participate
        </button>
      </div>
    </div>
  );
};

export default EventCard;

import React from 'react';

const Card = () => {
  return (
    <div className="relative bg-gray-200 shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover object-center" src="https://via.placeholder.com/150" alt="Card" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h2 className="text-xl font-semibold mb-2">Card Title</h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

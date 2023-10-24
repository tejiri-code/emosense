// src/MoodItem.js

import React from 'react';

const MoodItem = ({ mood }) => {
  return (
    <li className="bg-gray-100 p-2 mb-2 rounded-md animate-fade-in">
      {mood}
    </li>
  );
};

export default MoodItem;

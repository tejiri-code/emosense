// src/MoodList.js

import React from 'react';
import MoodItem from './MoodItem';

const MoodList = ({ moods }) => {
  return (
    <div className="mt-4 p-4">
      <h2 className="text-2xl mb-2">Recorded Moods</h2>
      <ul>
        {moods.map((mood, index) => (
          <MoodItem key={index} mood={mood} />
        ))}
      </ul>
    </div>
  );
};

export default MoodList;

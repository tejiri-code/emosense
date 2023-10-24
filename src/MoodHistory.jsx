// src/MoodHistory.js

import React from 'react';
import MoodItem from './MoodItem';


const MoodHistory = ({ moods }) =>
 {
  return (
    <div className="mt-4 p-4">
      <h2 className="text-2xl mb-2">Mood History</h2>
      <ul>
        {moods.map((mood, index) => (
          <MoodItem key={index} mood={mood} showTimestamp={true} />
        ))}
      </ul>
    </div>
  );
};

export default MoodHistory;

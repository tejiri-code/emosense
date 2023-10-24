// src/MoodStats.js

import React from 'react';

const MoodStats = ({ moods }) => {
  // Calculate mood statistics
  const moodCounts = moods.reduce((counts, mood) => {
    counts[mood] = (counts[mood] || 0) + 1;
    return counts;
  }, {});

  return (
    <div className="mt-4 p-4">
      <h2 className="text-2xl mb-2">Mood Statistics</h2>
      <ul>
        {Object.keys(moodCounts).map((mood) => (
          <li key={mood}>
            {mood}: {moodCounts[mood]} times
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodStats;

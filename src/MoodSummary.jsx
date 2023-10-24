// src/MoodSummary.js

import React from 'react';

const MoodSummary = ({ moods }) => {
  // Check if the 'moods' array is empty
  if (moods.length === 0) {
    return (
      <div className="mt-4">
        <h2 className="text-2xl mb-2">Mood Summary</h2>
        <p>No moods recorded yet.</p>
      </div>
    );
  }

  // Calculate mood statistics
  const moodCounts = moods.reduce((counts, mood) => {
    counts[mood] = (counts[mood] || 0) + 1;
    return counts;
  }, {}); 

  const mostFrequentMood = Object.keys(moodCounts).reduce((a, b) =>
    moodCounts[a] > moodCounts[b] ? a : b
  );

  return (
    <div className="mt-4 p-4">
      <h2 className="text-2xl mb-2">Mood Summary</h2>
      <p>
        You seem to be feeling <strong>{mostFrequentMood}</strong> most often.
      </p>
    </div>
  );
};

export default MoodSummary;

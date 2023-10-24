// src/MoodChecker.js

import React, { useState } from "react";
import './custom.css';


const MoodChecker = ({ onMoodSubmit }) => {
  const [selectedMood, setSelectedMood] = useState('');

  const moods = ['Happy', 'Sad', 'Angry', 'Calm', 'Excited'];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    onMoodSubmit(mood); // This will add the selected mood to the state
  };

  return (
    <div className="p-4 animation-fade-in rounded-lg  bg-white">
    <h1 className="text-3xl mb-4">How are you feeling today?</h1>
    <div className="flex flex-wrap gap-4">
      {moods.map((mood, index) => (
        <button
          key={index}
          className={`p-4 border rounded-md shadow-md ${
            selectedMood === mood ? 'bg-secondary-200 text-secondary-100' : 'bg-white'
          }`}
          onClick={() => handleMoodSelect(mood)}
        >
          {mood}
        </button>
      ))}
    </div>
    <div className="mt-4">
      <p className="text-xl">
        You are feeling: {selectedMood ? selectedMood : 'Select a mood'}
      </p>
    </div>
  </div>
  );
};

export default MoodChecker;

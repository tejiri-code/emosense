// src/MoodForm.js

import React, { useState } from 'react';

const MoodForm = ({ onMoodSubmit }) => {
  const [newMood, setNewMood] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onMoodSubmit(newMood); // This will add the entered mood to the state
    setNewMood('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4">
    <label className="block mb-2" htmlFor="moodInput">
      How are you feeling today?
    </label>
    <input
      type="text"
      id="moodInput"
      className="border p-2 w-full"
      placeholder="Enter your mood"
      value={newMood}
      onChange={(e) => setNewMood(e.target.value)}
    />
    <button
      type="submit"
      className="bg-secondary-200 text-secondary-100 p-2 mt-2 rounded-md gap-1" // Use the custom color
    >
      Submit
    </button>
  </form>
  );
};

export default MoodForm;

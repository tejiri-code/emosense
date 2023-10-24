import React, { useState } from 'react';
import MoodChecker from './MoodChecker';
import MoodForm from './MoodForm';
import MoodList from './MoodList';
import MoodHistory from './MoodHistory';
import MoodSummary from './MoodSummary';
import MoodStats from './MoodStats';
import Navbar from './Navbar';

function App() {
  const [moods, setMoods] = useState([]);

  const handleMoodSubmit = (newMood) => {
    setMoods([...moods, newMood]);
  };
  

  return (
    <div className="App ">
      <Navbar />
      <header className="bg-secondary-100 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">EmoSense</h1>
        <p>Track your daily moods and gain insights.</p>
      </header>
      <div className="container mx-auto p-4">
        <MoodChecker onMoodSubmit={handleMoodSubmit} />
        <MoodForm onMoodSubmit={handleMoodSubmit} />
        <div className="grid grid-cols-2 gap-2">
          <MoodList moods={moods} />
          <div className="space-y-1">
            <MoodHistory moods={moods} />
            <MoodSummary moods={moods} />
            <MoodStats moods={moods} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

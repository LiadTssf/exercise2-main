import React, { useState } from 'react';

const HabitForm = ({ addHabit }) => {
  const [habit, setHabit] = useState('');
  const [data, setData] = useState([null, null, null, null, null, null, null]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit({ habit, data });
    setHabit('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mt-6 w-full md:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Add a new habit</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Habit Name</label>
        <input
          type="text"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add Habit
      </button>
    </form>
  );
};

export default HabitForm;

import React, { useState } from 'react';
import HabitTable from './HabitTable';
import HabitStatus from './HabitStatus';
import Habits from './Habits';
import HabitForm from './HabitForm';

const HabitTracker = () => {
  const [week, setWeek] = useState('Mon, Dec 14 - Sun, Dec 20');
  
  const [habits, setHabits] = useState([
    { habit: 'Read a book', data: [true, false, true, true, false, true, false] },
    { habit: 'Exercise', data: [false, true, false, true, true, false, true] },
    { habit: '💪 Exercise', data: [null, null, null, null, null, null, null] },
    { habit: '📝 Journal', data: ['#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc'] },
    { habit: '❌ Alcohol', data: ['#f8a4a4', '#f8a4a4', '#f8a4a4', null, '#f8a4a4', '#f8a4a4', '#f8a4a4'] },
    { habit: '🚿 Cold Shower', data: ['#a4d4fc', null, '#a4d4fc', '#a4d4fc', null, '#a4d4fc', null] },
    { habit: '🦷 Floss', data: ['#a4fca4', '#a4fca4', null, '#a4fca4', null, null, null] },
    { habit: '🧘 Meditate', data: [null, null, null, null, null, null, null] },
    { habit: '🎧 eBook', data: [null, '#a4d4fc', '#a4d4fc', null, null, null, null] },
  ]);
  const [statuses, setStatuses] = useState([
    { habit: 'Read a book', status: 'Good', completed: true },
    { habit: 'Exercise', status: 'Average', completed: false },
    { habit: '💪 Exercise', status: 'Inactive on Tuesday', completed: false },
    { habit: '📝 Journal', status: 'Completed', completed: true },
    { habit: '❌ Alcohol', status: 'Avoided', completed: true },
    { habit: '🚿 Cold Shower', status: null, completed: false },
    { habit: '🦷 Floss', status: 'Inactive on Tuesday', completed: false },
    { habit: '🧘 Meditate', status: null, completed: false },
    { habit: '🎧 eBook', status: null, completed: false },
    
  ]);
  const progress = 86; // Example progress

  const addHabit = (newHabit) => {
    setHabits((prevHabits) => [...prevHabits, newHabit]);
    setStatuses((prevStatuses) => [
      ...prevStatuses,
      { habit: newHabit.habit, status: 'New', completed: false },
    ]);
  };

  return (
    <div className="flex flex-col items-center w-full bg-gray-100 text-gray-800">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Good afternoon, Danny</h1>
        <p className="text-gray-600">7 hrs 10 mins till bedtime</p>
      </header>
      <div className="flex flex-wrap justify-between w-full max-w-5xl mt-8 space-y-6 md:space-y-0">
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
          <div className="flex justify-between items-center">
            <button className="text-xl">&lt;</button>
            <h2 className="text-xl font-semibold">{week}</h2>
            <button className="text-xl">&gt;</button>
          </div>
          <div className="flex justify-between items-center mt-6">
            <span>Up 50% from the week before</span>
            <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <span>{progress}% achieved</span>
          </div>
          <HabitTable habits={habits} />
        </div>
        <Habits statuses={statuses} />
      </div>

    </div>
  );
};

export default HabitTracker;

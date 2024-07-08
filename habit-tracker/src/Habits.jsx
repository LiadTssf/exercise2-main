import React, { useState } from 'react';
import Habit from './Habit';

const Habits = ({ statuses }) => {

  const [habits, setHabits] = useState(statuses);

  const handleMarkComplete = (index) => {
    const updatedHabits = habits.map((habit, i) => {
      if (i === index) {
        return { 
          ...habit, 
          completedDays: [...habit.completedDays, new Date().getDay()] 
        };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  const handleUndo = (index) => {
    const updatedHabits = habits.map((habit, i) => {
      if (i === index) {
        const currentDay = new Date().getDay();
        return { 
          ...habit, 
          completedDays: habit.completedDays.filter(day => day !== currentDay)
        };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  const getCurrentDay = () => {
    const date = new Date();
    const options = { weekday: 'short', month: 'long', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };
  const currentDay = getCurrentDay();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">{currentDay}</h2>
      {habits.map((habit, index) => {
        const today = new Date().getDay();
        const isActiveToday = habit.Active_days.includes(today);
        const isCompletedToday = habit.completedDays.includes(today);
        let status = isActiveToday ? (isCompletedToday ? 'Completed' : 'Pending') : `Inactive on ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`;
        
        return (
          <Habit
            key={index}
            name={habit.name}
            status={status}
            color={habit.color}
            onMarkComplete={isActiveToday && !isCompletedToday ? () => handleMarkComplete(index) : null}
            onUndo={isCompletedToday ? () => handleUndo(index) : null}
          />
        );
      })}
    </div>
  );
};

export default Habits;
//<div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
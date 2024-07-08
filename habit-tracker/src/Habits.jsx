import React, { useState } from 'react';
import Habit from './Habit';

const Habits = ({ statuses }) => {

  const [habits, setHabits] = useState(statuses);

  const handleMarkComplete = (habit) => {
    const updatedHabits = habits.map((h) => {
      if (h.name === habit.name) {
        const currentDay = new Date().getDay(); // Get the current day index (0 for Sunday, 1 for Monday, etc.)
        return {
          ...h,
          completedDays: [...h.completedDays, currentDay],
        };
      }
      return h;
    });
    setHabits(updatedHabits);
    // Print all completed days for each habit
    updatedHabits.forEach(h => {
      console.log(`Habit: ${h.name}, Completed Days: ${h.completedDays}`);
    });
  };

  const handleUndo = (habit) => {
    const updatedHabits = habits.map((h) => {
      if (h.name === habit.name) {
        const currentDay = new Date().getDay();
        return { 
          ...h, 
          completedDays: h.completedDays.filter(day => day !== currentDay)
        };
      }
      return h;
    });
    setHabits(updatedHabits);
    updatedHabits.forEach(h => {
      console.log(`Habit: ${h.name}, Completed Days: ${h.completedDays}`);
    });
  };

  const getCurrentDay = () => {
    const date = new Date();
    const options = { weekday: 'short', month: 'long', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
  };

  const currentDay = getCurrentDay();

  // Sort habits: active today first, then inactive
  const today = new Date().getDay();
  const sortedHabits = [...habits].sort((a, b) => {
    const isActiveTodayA = a.Active_days.includes(today);
    const isActiveTodayB = b.Active_days.includes(today);
    return isActiveTodayB - isActiveTodayA; // true (1) comes before false (0)
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">{currentDay}</h2>
      <div className="h-2/3 overflow-y-auto custom-scrollbar">
        {sortedHabits.map((habit, index) => {
          const isActiveToday = habit.Active_days.includes(today);
          const isCompletedToday = habit.completedDays.includes(today);
          let status = isActiveToday ? (isCompletedToday ? 'Completed' : 'Pending') : `Inactive on ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`;

          return (
            <Habit
              key={index}
              name={habit.name}
              status={status}
              color={habit.color}
              onMarkComplete={isActiveToday && !isCompletedToday ? () => handleMarkComplete(habit) : null}
              onUndo={isCompletedToday ? () => handleUndo(habit) : null}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Habits;
//<div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
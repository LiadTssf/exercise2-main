import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const HabitForm = ({ addHabit }) => {
  const [habit, setHabit] = useState('');
  const [days, setDays] = useState([false, false, false, false, false, false, false]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit({ habit, days });
    setHabit('');
    setDays([false, false, false, false, false, false, false]);
    setIsOpen(false);
  };

  const toggleDay = (index) => {
    const newDays = [...days];
    newDays[index] = !newDays[index];
    setDays(newDays);
  };

  return (
    <div>
      <button
        className="group cursor-pointer outline-none hover:rotate-90 duration-300"
        title="Add New"
        onClick={() => setIsOpen(true)}
      >
        <svg
          className="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
          viewBox="0 0 24 24"
          height="50px"
          width="50px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth="1.5"
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          ></path>
          <path strokeWidth="1.5" d="M8 12H16"></path>
          <path strokeWidth="1.5" d="M12 16V8"></path>
        </svg>
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-full md:w-1/2">
            <Dialog.Title className="text-xl font-semibold mb-4">Add a new habit</Dialog.Title>
            <form onSubmit={handleSubmit}>
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
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Active Days</label>
                <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={`day-${index}`}
                        checked={days[index]}
                        onChange={() => toggleDay(index)}
                        className="mr-2"
                      />
                      <label htmlFor={`day-${index}`} className="text-gray-700">{day}</label>
                    </div>
                  ))}
                </div>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add Habit
              </button>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default HabitForm;

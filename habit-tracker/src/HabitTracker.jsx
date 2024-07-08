import React from 'react';

const HabitTracker = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 text-gray-800">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Good afternoon, Danny</h1>
        <p className="text-gray-600">7 hrs 10 mins till bedtime</p>
      </header>
      <div className="flex flex-wrap justify-between w-full max-w-5xl mt-8 space-y-6 md:space-y-0">
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
          <div className="flex justify-between items-center">
            <button className="text-xl">&lt;</button>
            <h2 className="text-xl font-semibold">Mon, Dec 14 - Sun, Dec 20</h2>
            <button className="text-xl">&gt;</button>
          </div>
          <div className="flex justify-between items-center mt-6">
            <span>Up 50% from the week before</span>
            <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '86%' }}></div>
            </div>
            <span>86% achieved</span>
          </div>
          <table className="w-full mt-6 border-collapse">
            <thead>
              <tr>
                <th></th>
                <th className="p-2">Mon</th>
                <th className="p-2">Tue</th>
                <th className="p-2">Wed</th>
                <th className="p-2">Thu</th>
                <th className="p-2">Fri</th>
                <th className="p-2">Sat</th>
                <th className="p-2">Sun</th>
              </tr>
            </thead>
            <tbody>
              {[
                { habit: '💪 Exercise', data: [null, null, null, null, null, null, null] },
                { habit: '📝 Journal', data: ['#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc', '#d4a4fc'] },
                { habit: '❌ Alcohol', data: ['#f8a4a4', '#f8a4a4', '#f8a4a4', null, '#f8a4a4', '#f8a4a4', '#f8a4a4'] },
                { habit: '🚿 Cold Shower', data: ['#a4d4fc', null, '#a4d4fc', '#a4d4fc', null, '#a4d4fc', null] },
                { habit: '🦷 Floss', data: ['#a4fca4', '#a4fca4', null, '#a4fca4', null, null, null] },
                { habit: '🧘 Meditate', data: [null, null, null, null, null, null, null] },
                { habit: '🎧 eBook', data: [null, '#a4d4fc', '#a4d4fc', null, null, null, null] },
              ].map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center p-2">
                    <span>{item.habit.split(' ')[0]}</span>
                    <span className="ml-2">{item.habit.split(' ')[1]}</span>
                  </td>
                  {item.data.map((day, dayIdx) => (
                    <td key={dayIdx} className="p-2" style={{ backgroundColor: day }}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
          {[
            { habit: '💪 Exercise', status: 'Inactive on Tuesday', completed: false },
            { habit: '📝 Journal', status: 'Completed', completed: true },
            { habit: '❌ Alcohol', status: 'Avoided', completed: true },
            { habit: '🚿 Cold Shower', status: null, completed: false },
            { habit: '🦷 Floss', status: 'Inactive on Tuesday', completed: false },
            { habit: '🧘 Meditate', status: null, completed: false },
            { habit: '🎧 eBook', status: null, completed: false },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-2 rounded-md mb-2 ${item.completed ? 'bg-green-200 text-green-700' : item.status ? 'bg-red-200 text-red-700' : ''}`}
            >
              <span>{item.habit}</span>
              {item.status ? <span>{item.status}</span> : <button className="text-blue-600">Mark Complete</button>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HabitTracker;

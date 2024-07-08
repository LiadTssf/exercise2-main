import React from 'react';

const HabitTable = ({ habits }) => {
  return (
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
        {habits.map((item, idx) => (
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
  );
};

export default HabitTable;
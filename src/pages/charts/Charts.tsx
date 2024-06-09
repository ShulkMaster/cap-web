import { useState } from 'react';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export function Charts(): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);

  const data = [
    { date: '2023-01-01', magnitude: 4.5 },
    { date: '2023-02-15', magnitude: 5.2 },
    { date: '2023-03-30', magnitude: 3.8 },
    { date: '2023-04-25', magnitude: 4.9 },
    { date: '2023-05-10', magnitude: 4.3 },
    { date: '2023-06-05', magnitude: 5.1 },
    { date: '2023-06-05', magnitude: 6 }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        background: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
        padding: '20px'
      }}
    >
      <h1 style={{ color: darkMode ? '#fff' : '#000' }}>Earthquake Magnitudes</h1>
      <button style={{ background: darkMode ? '#fff' : '#000',  color: darkMode ? '#000' : '#fff'}} onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#444' : '#ccc'} />
          <XAxis dataKey="date" type="category" stroke={darkMode ? '#fff' : '#000'} />
          <YAxis dataKey="magnitude" type="number" stroke={darkMode ? '#fff' : '#000'} />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={({ payload }) => {
              if (payload && payload.length) {
                const { date, magnitude, place } = payload[0].payload;
                return (
                  <div
                  style={{ backgroundColor: darkMode ? '#222' : '#fff', border: '1px solid #ccc', padding: '10px' }}
                  >
                    <p>
                      <strong>Fecha:</strong> {date}
                    </p>
                    <p>
                      <strong>Magnitud:</strong> {magnitude}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />

          <Scatter name="Earthquake" data={data} fill={darkMode ? '#fff' : '#000'} />
          <Legend />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

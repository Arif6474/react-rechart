import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'Project A',
          expenses: 4000,
          reveneu: 2400,
          sell: 2400,
        },
        {
          name: 'Project B',
          expenses: 3000,
          reveneu: 1398,
          sell: 2210,
        },
        {
          name: 'Project C',
          expenses: 2000,
          reveneu: 9800,
          sell: 2290,
        },
        {
          name: 'Project D',
          expenses: 2780,
          reveneu: 3908,
          sell: 2000,
        },
        {
          name: 'Project E',
          expenses: 1890,
          reveneu: 4800,
          sell: 2181,
        },
        {
          name: 'Project F',
          expenses: 2390,
          reveneu: 3800,
          sell: 2500,
        },
        {
          name: 'Project G',
          expenses: 3490,
          reveneu: 4300,
          sell: 2100,
        },
      ];
    return (
        <LineChart width={800} height={600} data={data}>
            <Line type="monotone" dataKey="expenses" stroke="#8884d8" strokeWidth={2}  ></Line>
            <Line type="monotone" dataKey="reveneu" stroke="#82ca9d" />
            <Line type="monotone" dataKey="sell" stroke="#52ba9d" />
            <XAxis dataKey="name" />
            <Legend />
          <YAxis />
          <Tooltip />
        </LineChart>
    );
};

export default MyLineChart;
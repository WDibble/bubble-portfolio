// components/infographics/AreaChartComponent.tsx

"use client"

import React from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text
} from 'recharts';

interface ChartDataItem {
  name: string;
  uv: number;
  pv: number;
}

interface AreaChartProps {
  headerText?: string;
  subHeaderText?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

  const data = [
    { name: 'Page A', uv: 4000, pv: 2000, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1500, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 1000, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 1500, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 900, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 1000, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 1500, amt: 2100 },
    { name: 'Page H', uv: 5000, pv: 2700, amt: 2400 },
    { name: 'Page I', uv: 3000, pv: 2100, amt: 2210 },
    { name: 'Page J', uv: 2000, pv: 900, amt: 2290 },
    { name: 'Page K', uv: 2780, pv: 1300, amt: 2000 },
    { name: 'Page L', uv: 1890, pv: 600, amt: 2181 },
    { name: 'Page M', uv: 2390, pv: 1000, amt: 2500 },
    { name: 'Page N', uv: 3490, pv: 1700, amt: 2100 },
    { name: 'Page O', uv: 4090, pv: 2500, amt: 2400 },
    { name: 'Page P', uv: 3000, pv: 2000, amt: 2210 },
    { name: 'Page Q', uv: 2000, pv: 1000, amt: 2290 },
    { name: 'Page R', uv: 2780, pv: 2000, amt: 2000 },
    { name: 'Page S', uv: 1890, pv: 1500, amt: 2181 },
    { name: 'Page T', uv: 2390, pv: 1400, amt: 2500 }
  ];
  
  const AreaChartComponent = () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" strokeWidth={2} />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    );
  };
  
  export default AreaChartComponent;
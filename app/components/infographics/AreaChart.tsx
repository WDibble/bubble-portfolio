// components/infographics/AreaChart.tsx

"use client"

import React from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, TooltipProps
} from 'recharts';

interface AreaChartProps {
  headerText?: string;
  subHeaderText?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
}

interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: DataItem[] = [
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

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white shadow-lg rounded text-xs">
        <p className="font-bold">{`${label}: UV: ${payload[0].value}, PV: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const AreaChartComponent: React.FC<AreaChartProps> = ({ headerText, subHeaderText, xAxisLabel, yAxisLabel }) => {
  return (
    <>
      {headerText && <h2 className="text-lg font-semibold text-gray-700 text-center">{headerText}</h2>}
      {subHeaderText && <p className="text-sm text-gray-700 text-center">{subHeaderText}</p>}
      <ResponsiveContainer width="95%" height="85%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis dataKey="name" tickMargin={10} height={50} />
          <YAxis width={40} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" strokeWidth={2} />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaChartComponent;

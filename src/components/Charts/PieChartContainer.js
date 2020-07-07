import React from 'react'
import {ResponsiveContainer, PieChart, Pie, Tooltip} from 'recharts'

const practiceData01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const practiceData02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];



const PieChartContainer = ({data01 = practiceData01, data02 = practiceData02}) => {

  return(
      <ResponsiveContainer width='100%' minHeight={250}>
        <PieChart  margin={{top: 0, right: 30, left: 0, bottom: 0 }}>
          <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#044147" label />
          <Tooltip contentStyle={{backgroundColor: 'black', color: '#044147'}}/>
        </PieChart>
      </ResponsiveContainer>
  )
}

export default PieChartContainer
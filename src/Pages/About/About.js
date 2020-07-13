import React from 'react'
import AreaChartContainer from '../../components/Charts/AreaChartContainer'
import Divider from '../../components/Elements/Divider'
/* SASS METRICS */

export default function About() {
  return (
    <div>
      <div>
        <Divider title="About" />
        <h3>Mission Statement: </h3>
        <h3># of Purchases</h3>
        <AreaChartContainer />
        <h3>Total Sales</h3>
        <AreaChartContainer />
        <h3># of Accounts</h3>
        <AreaChartContainer />
        <h3>Monthly Expenditure</h3>
        <AreaChartContainer />
        <h3># of Followers ( Twitter )</h3>  
        <h3># of Likes ( Instagram )</h3>  
      </div>
    </div>
  )
}


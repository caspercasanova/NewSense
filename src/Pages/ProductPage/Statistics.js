import React from 'react';
import styled from 'styled-components';

import Card from '../../components/Elements/Card';
import InnerCard from '../../components/Elements/InnerCard';
import AreaChartContainer from '../../components/Charts/AreaChartContainer';
import PieChartContainer from '../../components/Charts/PieChartContainer';
import ScatterChartContainer from '../../components/Charts/ScatterChartContainer';


export default function Statistics() {
  return (
    <Card header="Statistics" >

      <InnerCard>
        <h3>Popularity</h3>
        <AreaChartContainer />
      </InnerCard>
      <InnerCard>
        <h3>Popularity</h3>
        <PieChartContainer /> 
      </InnerCard>
      <InnerCard>
        <h3>Popularity</h3>
        <ScatterChartContainer />
      </InnerCard>
    </Card>
  );
}

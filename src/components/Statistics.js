import React from 'react'

import Divider from './Elements/Divider'

import AreaChartContainer from './Charts/AreaChartContainer.js'

import styled from 'styled-components'
import PieChartContainer from './Charts/PieChartContainer';
import ScatterChartContainer from './Charts/ScatterChartContainer';


const StatisticsContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const StatisticsBodyFlex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;



export default function Statistics() {
  return (
    <>
      <Divider title={"Statistics"}/>
      <StatisticsContainer>
        <StatisticsBodyFlex>
          <MediumChartCard title={'Number of Sales'}>
            <AreaChartContainer />
          </MediumChartCard>
          <MediumChartCard title={'Impressions'}>
            <AreaChartContainer />
          </MediumChartCard>
          <MediumChartCard title={'$$$ Revenue Generated'}>
            <AreaChartContainer />
          </MediumChartCard>
        </StatisticsBodyFlex>
        <StatisticsBodyFlex>
          <LargeChartCard title={`Demographics`}>
            <ScatterChartContainer />
          </LargeChartCard>
          <LargeChartCard title={`Portion of NSA's Revenue`}>
            <PieChartContainer />
          </LargeChartCard>
        </StatisticsBodyFlex>

      </StatisticsContainer>
    </>
  )
}








const ChartCardHeader = styled.div`
  background-image: linear-gradient(to right,rgba(13,230,255,0.15) 0%,rgba(201,189,174,0) 25%);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 6px 10px 6px 10px;
  margin: 8px 12px;
  margin-bottom: 24px;
  position: relative;
  &:before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 2px;
    background-color: rgba(13,230,255,0.5);
  }
`;
const ChartCardBody = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MediumChartCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;


const LargeChartCardContainer = styled(MediumChartCardContainer)`
  min-width: 500px;
`;


const MediumChartCard = ({children, title}) => {
  return (
    <MediumChartCardContainer>
      <ChartCardHeader>{title}</ChartCardHeader>
      <ChartCardBody>{children}</ChartCardBody>
    </MediumChartCardContainer>
  )
}

const LargeChartCard = ({children, title}) => {
  return(
    <LargeChartCardContainer>
      <ChartCardHeader>{title}</ChartCardHeader>
      <ChartCardBody>{children}</ChartCardBody>
    </LargeChartCardContainer>
  )
}


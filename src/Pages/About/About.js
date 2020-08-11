import React from 'react';
import AreaChartContainer from '../../components/Charts/AreaChartContainer';

/* SASS METRICS */
import Countdown from '../../components/Widgets/Countdown';
import Card from '../../components/Elements/Card';
import InnerCard from '../../components/Elements/InnerCard';

export default function About() {
  const date = new Date();
  const version = process.env.NSA_APP_VERSION || '0.0.13';
  return (
    <Card header="About">
      <Countdown />
      <InnerCard header='Mission Statement'>
        <p>Never Stop Chasin Success</p>
      </InnerCard>
      <InnerCard header="Total Purchases">
        <AreaChartContainer />
      </InnerCard>
      <InnerCard header="Total Sales">
        <AreaChartContainer />
      </InnerCard>
      <InnerCard header="# of Likes">
        <AreaChartContainer />
      </InnerCard>
      <InnerCard header="Monthly Expenditure">
        <AreaChartContainer />
      </InnerCard>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>All Be Demanded</p>
        <p>
          V.
          {`${version}`}
        </p>
        <p>
          ©
          {date.getFullYear()}
          . All Rights Reserved
        </p>
      </div>
    </Card>
  );
}

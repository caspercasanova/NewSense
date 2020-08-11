import React from 'react';
import styled from 'styled-components';
import useToggle from '../../Utilities/hooks/useToggle';
import Divider from '../../components/Elements/Divider';
import TypedMessage from '../../components/Elements/TypedMessage';
import GlowCorners from '../../components/Elements/GlowCorners';

export default function Rewards({ currentPoints }) {
  const rewardsArrays = [
    //  pointsReq     reward                 tier
    [0, 'None', 'Ghost'],
    [13, 'Unlock Reward System', 'New_Sense'],
    [100, 'Free Shipping For Life', 'Consript'],
    [200, 'Stickers In Every Order', 'Cutthroat'],
    [300, '5% Off For Life', 'Squire'],
    [400, 'Something Sicker', 'Vanguard'],
    [500, 'Unknown', 'Maverick'],

  ];

  return (
    <>

      <Divider title="Rewards" />
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '100%' }}>
            <h3>
              Current Points:
              {currentPoints}
            </h3>
            <h3>
              Current Rank:
              {currentPoints}
            </h3>
          </div>
          <div style={{ width: '100%' }}>
            <h3>Next Rank: </h3>
            <h3>Points Needed Till Next Rank: </h3>
          </div>
        </div>
        <NewProgressBar percentage={50} start={0} end={13} currentRank="Ghost" nextRank="New_Sense" />

        <h3>Ranks & Rewards</h3>
        <GlowCorners>
          <div style={{ display: 'flex', padding: '10px 14px' }}>
            <h4 style={{ width: '100%' }}>Rank</h4>
            <h4 style={{ width: '100%' }}>Points Req.</h4>
            <h4 style={{ width: '100%' }}>Reward</h4>
            <h4 style={{ width: '100%' }}>Status</h4>
          </div>
          <hr />

          <ul style={{ padding: '10px' }}>
            {rewardsArrays.map((rewardsArr, index) => {
              const hasRank = currentPoints >= rewardsArr[0];
              return (
                <Reward
                  key={index}
                  pointsRequired={rewardsArr[0]}
                  reward={rewardsArr[1]}
                  tier={rewardsArr[2]}
                  hasRank={hasRank}
                />
              );
            })}
          </ul>
        </GlowCorners>
      </div>

    </>
  );
}

const RewardBarContainer = styled.div`
  display: flex;
  padding: 4px 10px;
  color:  ${(props) => (props.hasRank ? 'green' : 'rgba(70, 70, 70, 0.8)')};
  animation: ${(props) => props.hasRank && 'blink 2.5s linear infinite'};
`;

const Reward = ({
  tier,
  reward,
  pointsRequired,
  hasRank,
}) => {
  const [show, toggleShow] = useToggle();
  return (
    <li
      onMouseEnter={toggleShow}
      onMouseLeave={toggleShow}
    >
      <RewardBarContainer hasRank={hasRank}>
        <div style={{ width: '100%' }}>{tier}</div>
        <div style={{ width: '100%' }}>{show ? <TypedMessage message={`${pointsRequired}`} /> : '...'}</div>
        <div style={{ width: '100%' }}>{show ? <TypedMessage message={reward} /> : '$$$'}</div>
        <div style={{ width: '100%' }}>{hasRank ? 'ACTIVE' : 'INACTIVE'}</div>
      </RewardBarContainer>
      <hr />
    </li>
  );
};

const ProgressBarContainer = styled.div`
  width: 100%;
  position: relative;
`;
const OuterProgressBar = styled.div`
  height: 30px;
  width: 100%;
  position: relative;
  background-color:  rgba(0,162,253,0.15);
`;

const InnerProgressBar = styled.div`
  background-image: linear-gradient(to right,rgba(13,230,255,0.15) 0%, #fe7a15 100%);
  position: absolute;
  height: 100%;
  width: ${(props) => props.percentage}%;
`;
const PercentagePosition = styled.div`
  left: ${(props) => props.percentage}%;
`;
const StartEndContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewProgressBar = ({
  percentage, start, end, currentRank, nextRank,
}) => {
  return (
    <ProgressBarContainer>
      <StartEndContainer>
        <div>
          <div>{currentRank}</div>
          <div>{start}</div>
        </div>
        <div style={{ textAlign: 'end' }}>
          <div>{nextRank}</div>
          <div>{end}</div>
        </div>
      </StartEndContainer>

      <GlowCorners>
        <OuterProgressBar>
          <InnerProgressBar percentage={percentage} />
          <PercentagePosition percentage={percentage}>
            {percentage}
            %
          </PercentagePosition>
        </OuterProgressBar>
      </GlowCorners>
    </ProgressBarContainer>
  );
};

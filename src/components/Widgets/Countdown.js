import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useInterval from '../../Utilities/hooks/useInterval';

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .countdown_digits{
    display: flex;
  }
  & .interval{
    margin-right: 3px;
    margin-left: 3px;
  }
`;

const Countdown = ({ date = '2020-09-11' }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(date) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <div key={index} className="interval">
        <div><p>{interval <= 9 ? `0${interval}` : interval}</p></div>
        <div><p>{timeLeft[interval] <= 9 ? `0${timeLeft[interval]}` : timeLeft[interval]}</p></div>
      </div>,
    );
  });

  return (
    <CountdownContainer>
      <h3>Time Until Launch</h3>
      <div className="countdown_digits">
        {timerComponents.length && timerComponents}
      </div>
    </CountdownContainer>
  );
};

Countdown.propTypes = { date: PropTypes.string.isRequired };

export default Countdown;

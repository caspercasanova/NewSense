/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
// ELEMENTS
import Row from '../../components/Elements/Row';
import Card from '../../components/Elements/Card';
import Rewards from './Rewards';
import PreviousPurchases from './PreviousPurchases';
// Hooks
import { useAuth } from '../../Firebase/firebase_hooks/useAuth';
// Assets
import NSAlogo from '../../assets/pics/NSAbrainDaggertrans.png';


const purchasesArrayDefault = [
  {
    productList: [
      { name: 'NewSenseCap', quantity: 2, img: NSAlogo, price: 1200 },
      { name: 'Keep Dreaming', quantity: 2, img: NSAlogo, price: 1200 },
    ],
    dateOrdered: '2020-07-12',
    orderNumber: '123lkhasdjo1i23u09as8dlkj12',
    orderComplete: false,
    hasShipped: true,
    orderPrice: '$123.00',
    pointsEarned: '20',
    discountsApplied: 'None',
  },
  {
    productList: [
      { name: 'NewSenseCap', quantity: 2, img: NSAlogo, price: 1200 },
      { name: 'Keep Dreaming', quantity: 2, img: NSAlogo, price: 1200 },
    ],
    dateOrdered: '2020-10-12',
    orderNumber: '123lkhasdjo1i23u09as8dlkj12',
    orderComplete: false,
    hasShipped: false,
    orderPrice: '$123.00',
    pointsEarned: '20',
    discountsApplied: 'None',
  },
];

const ProfileContainer = styled.div`
  padding-top: 10px;
  & h5 {
    color: var(--color-grey);
  }
`;

const StyledHeader = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  & h2 {
    color: var(--color-purple);
  }
  & hr {
    width: 100%;
    color: var(--color-purple);
  }
`;


export default function Profile() {
  const auth = useAuth();
  const defaultProfile = {
    displayName: auth.user.displayName || 'New Sense Conscript',
    photoURL: auth.user.photoURL || NSAlogo,
    uid: auth.user.uid || '_0131310',
    email: auth.user.email || 'nsa@gmail.com',
    currentPoints: auth.user.points || '0',
    previousPurchases: auth.user.previousPurchases || purchasesArrayDefault,
  };


  return (
    <ProfileContainer>
      <Card>
        <StyledHeader>
          <Row>
            <h2>Profile</h2>
            <button type="button" className="basic_btn" onClick={auth.signout}>Logout</button>
          </Row>
          <hr />
        </StyledHeader>
        <Row>
          <div>
            <h5>Display Name:</h5>
            <h3>{defaultProfile.displayName}</h3>
          </div>
          <div>
            <h5>Email:</h5>
            <h3>{defaultProfile.email}</h3>
          </div>
        </Row>
        <Row>
          <button type="button" className="basic_btn">Update Username</button>
          <button type="button" className="basic_btn">Update Email</button>
        </Row>
        <hr style={{width: '100%'}} />
        <Row>
          <div><img style={{ width: '100px' }} src={defaultProfile.photoURL} alt="logo" /></div>
          <button type="button" className="basic_btn">Update Photo</button>
        </Row>
        <hr style={{width: '100%'}} />
        <Row>
          <h5>UID: {defaultProfile.uid}</h5>
          <button type="button" className="basic_btn">Delete Account</button>
        </Row>
      </Card>
      <Rewards currentPoints={defaultProfile.currentPoints} />
      <PreviousPurchases purchasesArray={defaultProfile.previousPurchases} />
    </ProfileContainer>
  );
}

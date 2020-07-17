import React from 'react';

import { useAuth } from '../../Firebase/Auth';
import TypedMessage from '../../components/Elements/TypedMessage';
import NSAlogo from '../../NSAbrainDaggertrans.png';
import Countdown from '../../components/Widgets/Countdown';
import Ticker from '../../components/Widgets/Ticker';
import { useToggle } from '../../Utilities/utils';


export default function Navagation({toggleShoppingCart, setPage}) {
  const auth = useAuth();
  const date = new Date();
  const version = process.env.NSA_APP_VERSION || '0.0.13';
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', margin: '0px auto'}}> 
        <Logo />

        <div style={{width: '22em'}}>
          <Countdown />
          <div style={{display: 'flex', flexDirection:'column'}}>
            <button className="basic_btn" onClick={() => setPage('profile_page')}>Profile</button>
            <button className="basic_btn" onClick={() => setPage('product_page')}>Products</button>
            <button className="basic_btn" onClick={() => setPage('about_page')}>About</button>
            <button onClick={toggleShoppingCart} className="green_btn">Cart</button>
            <button onClick={auth.signout} className="basic_btn">Logout</button>
          </div>
          <Ticker />
          <hr />
        </div>
      </div>
      <div>
        <p>All Be Demanded</p>
        <p>V. {`${version}`}</p>
        <p>© {date.getFullYear()}. All Rights Reserved</p>
      </div>
    </>
  );
}

const Logo = () => {
  const [hovered, toggleHovered] = useToggle();
  return (
    <div style={{display: 'flex'}}>
      <div onMouseOver={toggleHovered} onMouseOut={toggleHovered}><img style={{width: '50px'}} src={NSAlogo} alt='logo'/></div>
      {!hovered && <h1 className='blink_soft' style={{marginLeft: '10px'}}> <TypedMessage message={"New Sense Active"}/></h1>}
      {hovered && <h1 className='blink_soft' style={{marginLeft: '10px'}}> <TypedMessage message={"All Be Demanded"}/></h1>}
    </div>
  );
};

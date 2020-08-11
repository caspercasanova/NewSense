import React from 'react';
import { useAuth } from '../../Firebase/firebase_hooks/useAuth';


export default function Navagation({ toggleShoppingCart, setPage }) {
  const auth = useAuth();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0px auto' }}>
        <div style={{ width: '22em' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button type="button" className="basic_btn" onClick={() => setPage('product_page')}>Products</button>
            <button type="button" className="green_btn" onClick={toggleShoppingCart}>Cart</button>
            <button type="button" className="basic_btn" onClick={() => setPage('profile_page')}>Profile</button>
            <button type="button" className="basic_btn" onClick={() => setPage('about_page')}>About</button>
            <button type="button" className="basic_btn" onClick={auth.signout}>Logout</button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

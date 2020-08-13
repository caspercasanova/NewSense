import React from 'react';

export default function Navagation({ setPage }) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '0px auto' }}>
        <div style={{ width: '22em' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button type="button" className="basic_btn" onClick={() => setPage('product_page')}>Products</button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

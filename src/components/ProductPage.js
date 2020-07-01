import React,{useState} from 'react'

import Tray from './Elements/Tray.js'
import Divider from './Elements/Divider'

import ChartLarge from './Charts/ChartLarge.js'
import ComingSoonOverlay from './Elements/ComingSoonOverlay.js'
import Statistics from './Statistics'

/* 
TODO: SASS or SAAS analytics
TODO: Donation Bar
TODO: Comment Section 
*/




export default function ProductPage({stripeProduct, shoppingCart, toggleCheckout}) {
  
  return (

    <div className='Product_Section'>
     
      <Product 
        stripeProduct={stripeProduct}  
        shoppingCart={shoppingCart}
        toggleCheckout={toggleCheckout}
        />

      <Statistics />
      <Comments />
      
    </div>
  
  )
}





 

 const TextBox = ({ header=false, children}) => {
  /* 
  !: Transition into complete functional element
  */
  return(
    <div className='TextBox'>
      {header !== false && 
        <div className='TextBox_header'>{header}</div>
      }
      <div className='TextBox_body'>
        {children}
      </div>
    </div>
  )
}




 const Product = ({shoppingCart, stripeProduct={price: {unit_amount: '0.13'}}, toggleCheckout,}) => {
  const [expand, setExpand] = useState(false)




  const ProductTitle = ({stripeProduct}) => (
    <div className='product_title'>
      <h4>{stripeProduct.name}</h4>    
    </div>
  )
  
  
 

  
    let imageSrc;
    stripeProduct.images === undefined ? imageSrc = 'none' : imageSrc = stripeProduct.images[0];
    const MainPicture = () => (
      <picture>
        <source srcSet={imageSrc} media="(max-width: 768px)" /> 
        <img alt='main_pic' className={'MainPicture'} src={imageSrc} />
      </picture>  
    )  
      
    



   return (
     <>
      <Divider title={stripeProduct.name} expand={expand} setExpand={()=>setExpand(!expand)} />
      <div className='Product'>
        <ProductTitle  stripeProduct={stripeProduct}  />  
        
        <div className='product_main'>
          <MainPicture />
          <SideBar shoppingCart={shoppingCart} stripeProduct={stripeProduct} /> 
        </div>
        <div className='picture_slider'>
          <div className='placeholder_img_SM'></div>
          <div className='placeholder_img_SM'></div>
          <div className='placeholder_img_SM'></div>
          <div className='placeholder_img_SM'></div>
          <div className='placeholder_img_SM'></div>
          <ComingSoonOverlay />
        </div>
      </div>
     </>
   )
 }
 
 
 const SideBar = ({shoppingCart, stripeProduct={price: {unit_amount: '0.13'}}, toggleCheckout,}) => {
  const [quantity, setQuantity] = useState(1)



  const MetaDatas = ({stripeProduct}) => {
    return stripeProduct.metadata ? (
      <ul>
        {Object.keys(stripeProduct.metadata).map((key, index) => (       
          <li key={index}>{`${key}: ${stripeProduct.metadata[key]}`}</li>
        ))}
      </ul>
      ) : <></>
  }
  return(
      <Tray className='product_sidebar'>
        <TextBox header={stripeProduct.name}>
          <div className='product_price'>
            <h1>$ {(stripeProduct.price.unit_amount / 100).toFixed(2)}</h1>
          </div>

            <p>{stripeProduct.description}</p>
            <MetaDatas stripeProduct={stripeProduct}/>

          <div className='quantity_container'>
            Select Your Quanity
            <div className="quantity_field">
              {/* 
                //! NEED TO MAKE A UNAVAILABLE BUTTON SO YOU CAN MAKE NEGATIVE INPUTS 
                //! Need DATA sanitation for input
              
              */}
              <button className='basic_btn' onClick={() => setQuantity(quantity + 1)}>-</button>
              <input className="quantity_selector" value={quantity} onChange={(e) => setQuantity(e)}></input>
              <button className='basic_btn' onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
        </TextBox>
          <button className='basic_btn buy_btn' style={{width: "100%"}} onClick={() => {
            shoppingCart.incrementItem(stripeProduct.id, quantity)
            setQuantity(1)
            }}>Add To Cart</button>
          <button className='basic_btn buy_btn' style={{width: "100%"}} onClick={toggleCheckout}>Checkout</button>
     </Tray>
    )
}





 
const Comments = () => {
  return(
    <>
      <Divider title={"Comments"}/>
      <ChartLarge />
    </>
  )
} 



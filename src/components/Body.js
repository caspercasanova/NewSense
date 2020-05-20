import React from 'react'

export default function Body() {
  return (
    <div className='body'>
      <hr />
      <ProductTitle />  
      <Product />
      <ChartMedium />
      <ChartLarge />
      <hr />
    </div>
  )
}

const ProductTitle = () =>{
 return (
   <div className='product_title'>
    <div>
      <h4>product: h000x001</h4>
      <h6>$ 150</h6>
    </div>
    <ProductMiniChart />
   </div>
 )
}
const ProductMiniChart = () => {
  return (
    <div className='mini_chart'></div>
  )
}

const Product = () => {
  return (
    <div className='product'>
     
      <div className='product_main'>
        <div className='placeholder_img_LG'>
          {/* Being able to slide look at a bunch of pictures quickly is key */}
        </div>
        <div className='product_sidebar'>
          <h4>h000x001</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, officia.</p>
          <button className='basic_btn'>Buy Now</button>
          <button className='basic_btn'>Favorite</button>
          <button className='basic_btn'>Reviews</button>

        </div>
      </div>
      <div className='picture_slider'>
        <div className='placeholder_img_SM'></div>
        <div className='placeholder_img_SM'></div>
        <div className='placeholder_img_SM'></div>
        <div className='placeholder_img_SM'></div>
        <div className='placeholder_img_SM'></div>
      </div>
    </div>
  )
}


const ChartLarge = () => {

  return(
    <div className='chartHolder'>
      <div className='large_chart'></div>
    </div>
  )
}
const ChartMedium = () => {
  return(
    <div className='chartHolder'>
      <div className='medium_chart'></div>
    </div>
  )
}
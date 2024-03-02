import SingleProduct from './SingleProduct'

const HomeProducts = () => {

  return (
    <div className='relative z-10 p-10 pt-0 bg-transparent'>
      <div className='flex items-center justify-around'>
        <SingleProduct
           parts={{
           headding : 'Top Deals with Decent Prices',
           img1:'./images/product_1.jpg',
           img2:'./images/product_2.jpg',
           img3:'./images/product_3.jpg',
           img4:'./images/product_4.jpg'
         }}/>
        <SingleProduct 
          parts={{
            headding : 'Price drops',
            img1:'./images/product_7.jpg',
            img2:'./images/product_8.jpg',
            img3:'./images/product_9.jpg',
            img4:'./images/product_10.jpg'
                }}/>
        <SingleProduct 
           parts={{
           headding : 'Todays Hot Deals' ,
           img1:'./images/product_5.jpg',
           img2:'./images/product_6.jpg',
           img3:'./images/product_11.jpg',
           img4:'./images/product_12.jpg'
         }}/>
      </div>
    </div>
  )
}

export default HomeProducts

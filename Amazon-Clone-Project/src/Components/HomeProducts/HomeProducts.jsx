import SingleProduct from './SingleProduct'

const HomeProducts = () => {

  return (
    <div className='relative z-50 p-10 pt-0 bg-transparent'>
      <div className='flex flex-wrap gap-9 pl-4'>
        <SingleProduct
           parts={{
           headding : 'Top Deals with Decent Prices',
           img1:'./public/images/product_1.jpg',
           img2:'./public/images/product_2.jpg',
           img3:'./public/images/product_3.jpg',
           img4:'./public/images/product_4.jpg'
         }}/>
        <SingleProduct 
          parts={{
            headding : 'Price drops',
            img1:'./public/images/product_7.jpg',
            img2:'./public/images/product_8.jpg',
            img3:'./public/images/product_9.jpg',
            img4:'./public/images/product_10.jpg'
                }}/>
        <SingleProduct 
           parts={{
           headding : 'Todays Hot Deals' ,
           img1:'./public/images/product_5.jpg',
           img2:'./public/images/product_6.jpg',
           img3:'./public/images/product_11.jpg',
           img4:'./public/images/product_12.jpg'
         }}/>
      </div>
    </div>
  )
}

export default HomeProducts

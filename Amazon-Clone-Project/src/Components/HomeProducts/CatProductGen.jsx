import React from 'react';
import { ratingImage,percentageCalculator } from './Functions';
import { Link } from 'react-router-dom'
import { numbering } from './Functions'
const CatProductGen = ({image,price,oldPrice,avgRating,ratings,description,id}) => {
  return (
	<Link to={`/products/${numbering(image)}`}>
		<div key={id} className=' w-52  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-full  relative p-4'>
			<img src={image} alt="" className='pb-2'/>
			<span className='hello text-rr font-semibold truncate-3-lines'>
					{description}
			</span>
			<div className='flex items-center pt-2'>
				<img src={ratingImage(avgRating) }alt="" className='h-3'/>
				<span className='text-blue-400 text-sm font-semibold'>{ratings} ratings</span>
			</div>
				<div className='text-xs w-24 h-5 mt-2 bg-red-700 rounded-md text-white flex items-center justify-center font-semibold'>
					Limited Deal
				</div>
			<div className='relative pt-2'>
				<span className='text-sm top-0 absolute ml-1 pt-1 font-bold'>
					$
					</span>
					<span className='text-gray-700 pl-3 text-2xl font-sans'> 
					{price}
				</span>
				<span className=' text-sm font-sans  text-gray-500'> M.R.P :<span className=' line-through'>$678</span></span>
				<span className='text-sm font-sans text-gray-600 font-semibold'>
			(-{percentageCalculator(price,oldPrice)}%)
			</span>
				<span className='block text-sm font-semibold pt-1'>
					get it by Tuesday 10:00pm or WednesDay 9:00Am
				</span>
			</div>
		</div>
	</Link>

  )
}

export default CatProductGen

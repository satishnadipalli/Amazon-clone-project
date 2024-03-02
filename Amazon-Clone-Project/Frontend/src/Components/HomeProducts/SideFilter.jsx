import React from 'react'

const SideBar = () => {
  return (
    <div className='mr-2  whitespace-nowrap font-serif text-rr hidden sm:block'>
        <div>
            <input type="checkbox" id="category-checkbox-1" className="mr-1" />
            <label htmlFor="category-checkbox-1" className='pl-1 pt-1 pb-1 text-rr'>
            {id} category
            </label>

            <input type="checkbox" id="category-checkbox-2" className="mr-1" />
            <label htmlFor="category-checkbox-2" className='pl-1 pt-1 pb-1 text-rr block'>
            Below 1000 rupees
            </label>
            
            <input type="checkbox" id="category-checkbox-3" className="mr-1" />
            <label htmlFor="category-checkbox-3" className='pl-1 pt-1 pb-1 block'>
            below 500
            </label>

            <input type="checkbox" id="category-checkbox-4" className="mr-1" />
            <label htmlFor="category-checkbox-4" className='pl-1 pt-1 pb-1 block'>
            below 100
            </label>

            <input type="checkbox" id="category-checkbox-5" className="mr-1" />
            <label htmlFor="category-checkbox-5" className='pl-1 pt-1 pb-1 block'>
            From Amazon
            </label>

            <input type="checkbox" id="category-checkbox-6" className="mr-1" />
            <label htmlFor="category-checkbox-6" className='pl-1 pt-1 pb-1 block'>
            From Apple
            </label>

            <input type="checkbox" id="category-checkbox-7" className="mr-1" />
            <label htmlFor="category-checkbox-7" className='pl-1 pt-1 pb-1 block'>
            Phones
            </label>

            <input type="checkbox" id="category-checkbox-8" className="mr-1" />
            <label htmlFor="category-checkbox-8" className='pl-1 pt-1 pb-1 block'>
            Laptops
            </label>

            <input type="checkbox" id="category-checkbox-9" className="mr-1" />
            <label htmlFor="category-checkbox-9" className='pl-1 pt-1 pb-1 block'>
            Accessories
            </label>
        </div>
    </div>
  )
}

export default SideBar;


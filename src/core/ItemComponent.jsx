import React, { useState } from 'react'

const ItemComponent = ({ obj }) => {
  const [showList, setShowList] = useState(false);

  console.log(obj);

  return (
    <div className=' mb-1'>
      <li className='flex items-center justify-between bg-slate-200 rounded p-2'>
        <span className='text-center px-3 py-1 rounded-md bg-slate-600 text-white'>{obj.id}</span>
        <p className='text-slate-600'>quantity : {obj?.data?.length}</p>
        <div className='flex items-center'>
          <input id="link-checkbox" type="checkbox" className="form-checkbox cursor-pointer rounded duration-200 text-slate-600 focus:ring-slate-600 mr-2" />
          <svg onClick={() => setShowList(!showList)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

      </li>
      <ul>
        {
          showList &&
          obj?.data.map(el =>
            <li className='flex items-center justify-between bg-slate-100 rounded p-2 mt-1'>
              <span className='text-center rounded-md px-3 text-slate-600'>#{el.uniqueId}</span>
              <p className='text-slate-600'>{el.created}</p>
              <div className='flex items-center'>
                <input id="link-checkbox" type="checkbox" className="form-checkbox cursor-pointer rounded duration-200 text-slate-600 focus:ring-slate-600" />
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default ItemComponent
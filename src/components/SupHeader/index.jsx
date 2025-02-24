import React from 'react'
import { NavLink } from 'react-router-dom'
import { headerData } from '../../constants'

function SupHeader() {
   
  return (
    <div className='flex justify-end py-2 px-4 bg-slate-800'>
    <div className='flex gap-3'>
    {
        headerData.map((item,index)=>{
            return(
                <React.Fragment key={index}>
                <NavLink to={item.path} className="text-sm">
                    {item.name}
                </NavLink>
                </React.Fragment>
            )
        })
      }
    </div>
    </div>
  )
}

export default SupHeader

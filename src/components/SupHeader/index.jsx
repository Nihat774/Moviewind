import React from 'react'
import { NavLink } from 'react-router-dom'

function SupHeader() {
    const headerData = [
        {path:"/",name:"About"},
        {path:"/",name:"Contact"},
        {path:"/",name:"Privacy"},
        {path:"/",name:"Disclaimer"},
        {path:"/",name:"DMCA"},
    ]
  return (
    <div className='flex justify-end py-2 px-4 bg-slate-800'>
    <div className='flex gap-3'>
    {
        headerData.map((item,index)=>{
            return(
                <React.Fragment key={index}>
                <NavLink path={item.path} className="text-sm">
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

import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SupHeader from '../../components/SupHeader'

function LayoutComponent({children}) {
  return (
    <>
<div className='min-h-screen'>
<SupHeader />
<Header />
      <main className='p-[20px] md:p-[60px]'>{children}</main>
      <Footer />
</div>
    </>
  )
}

export default LayoutComponent

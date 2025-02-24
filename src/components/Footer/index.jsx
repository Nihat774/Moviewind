import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const name = "Nihat"
  return (
    <footer className='flex flex-col items-center'>
      <p className='bg-gray-700 w-full text-center py-2'>Copyright &copy;2025 by Movieland All Rights Reserved</p>
      <p>Designed with by <Link target='_blank' className='text-blue-500 hover:underline' to={"https://nihatmammadov.vercel.app/"}>{name}</Link></p>
    </footer>
  )
}

export default Footer

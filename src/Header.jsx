import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-center py-6'>
      <ul className='flex gap-20 lg:text-sm lg:gap-12 sm:text-xs sm:gap-8'>
        <li>HOME</li>
        <li>COLLECTION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </div>
  )
}

export default Header
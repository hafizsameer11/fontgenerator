import React from 'react'

export default function Header() {
  return (
    <div className='header flex justify-between w-[90%] m-auto'>
        <div className='logo'>

        </div>
        <div className='menu '>
            <ul className='menu-list'>
                <li className='menu-item'>
                <a href='#'>Home</a>
                

                </li>
            <li>

                <a href='#'>Font Generator</a>
            </li>
            <li>

                <a href='#'>About</a>
            </li>
            <li>

                <a href='#'>Contact</a>
            </li>
            <li>

                <a href='#'>Blog</a>
            </li>
            </ul>

        </div>
    <div className='call-to-action'>
        <button className="cta">Get Start </button>
    </div>
      
    </div>
  )
}

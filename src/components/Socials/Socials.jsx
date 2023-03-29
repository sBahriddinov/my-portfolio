import React from 'react'
import { social } from './../../data'
const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index)=> {
        return <li className='flex justify-center items-center text-white text-2xl' key={index}>
          <a href={item.href} className='text-base transition duration-150 ease-out hover:ease-in hover:scale-150' target={item.target}>
            {item.icon}
          </a>
        </li>
      })}
    </ul>

  )
}

export default Socials
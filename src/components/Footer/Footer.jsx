import React from 'react';

// import social data
import { social } from '../../data';

// import logo
import Logo from './../../assets/img/logo.svg'

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                <div className='flex space-x-6 items-center justify-center'>
                    {social.map((item, index)=> {
                        const {href, icon, target} = item;
                        return (
                            <a href={href} key={index} className='text-white text-2xl' target={target}>{icon}</a>
                        )
                    })}
                </div>

                {/* logo */}
                <div>
                <h1 className="site_logo">Bakhriddinov Samandar</h1>
                </div>

                {/* Copyright */}
                <p>
                    &copy; 2023 Bakhriddinov Samandar. All rights reserved
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
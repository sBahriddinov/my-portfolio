import React from 'react';

// import services data 
import { services } from '../../data';

const Services = () => {
  return (
    <section id='services' className='section bg-gradient-to-r from-cyan-800 to-blue-800'>
        <div className="container mx-auto">
            {/* section title */}
            <div className="flex flex-col items-center text-center">
                <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-[180px] before:hidden before:lg:block'>Services</h2>
                <p className='subtitle'>Men sizga qande xizmatlar qilaman yoki sizning kompaniyangizga qande o'z hisamni qo'shishimni ko'rsatib o'taman.</p>

                {/* item grid */}
                <div className='grid lg:grid-cols-4 gap-8'>
                    {services.map((service, index)=> {
                        const {icon, name, description} = service;
                        return( 
                        <div className='bg-slate-700/75 p-6 rounded-2xl' key={index}>
                            {/* icon */}
                            <div className='text-white rounded-sm w-full h-12 flex justify-center items-center mb-10 text-[40px]'>
                                {icon}
                            </div>
                            <h4 className='text-xl font-medium mb-2'>{name}</h4>
                            <p>{description}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
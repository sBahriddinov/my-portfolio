import React from 'react'

// impo components
import TestimonialsSlider from './TestimonialsSlider'

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-gradient-to-r from-cyan-900 to-blue-900'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-[280px] before:hidden before:lg:block'>Testimonials</h2>
                <p className='subtitle'>Bu mening do'stlarim va o'z kasbining mutaxasislari</p>
            </div>
            <TestimonialsSlider />
        </div>
    </section>
  )
}

export default Testimonials
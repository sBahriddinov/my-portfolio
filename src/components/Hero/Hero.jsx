import React from 'react';
import Resume from './../../Pdf/Resume.pdf'

// import woman image
import ManImg from './../../assets/img/banner.jpg'

const Hero = () => {
  return (
    <section id='home' className=' flex items-center bg-gradient-to-r from-cyan-900 to-blue-900 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
        <div className="container mx-auto h-full">
            <div className="flex items-center h-full pt-[100px]">
            {/* Left site */}
            <div className="flex-1 flex flex-col items-center lg:items-start">
              <p className='text-lg text-white mb-[22px]'>
                  Salom, men Samandar 👌
              </p>

              <h3 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg-tx-7x1 lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] '>
               Men Web Dasturchisiman (Frontend)
                
              </h3>
              <p className='pt-4 pb-8 text-current md:pt-6 md:pb-12 max-w-[480] text-lg text-center lg:text-left'>
                Men Bakhriddinov Samandar Web dasturchi Frontend qismi bo'yicha ishlayman.
              </p>
              <a href={Resume} download="Resume" className='btn btn-md  rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-60 md:btn-lg transition-all'>Download CV</a>
            </div>
            {/* Right side */}
            <div className="hidden lg:flex flex-1 justify-center items-center h-full" >
              <img src={ManImg} alt="Portfolioni egasini rasmi joylashgan"  className='w-10/12'/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
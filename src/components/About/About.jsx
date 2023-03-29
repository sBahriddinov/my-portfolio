import React from 'react';
import Image from './../../assets/img/about.jpg'

const About = () => {
  return (
        <section id='about' className='section bg-gradient-to-r from-cyan-800 to-blue-800 '>
            <div className="container mx-auto">
                <div className="flex items-center flex-col xl:flex-row gap-24">
                    <img className='object-cover h-full w-[556px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />

                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-60 before:-top-[2rem] before:hidden before:lg:block'>Bakhriddinov Samandar</h2>

                            <p className='mb-4 text-black'> Web Developer (Frontend)</p>
                            <hr className='mb-8 opacity-5'/>
                            <p className='mb-8'>
                                Men Bahriddinov Samandar IT yo'nalishni bir qismi Frontend bo'yicha ish qilaman va tajriba to'playman. Menga bu soha juda yoqib qolgan huddi kubik yig'ish kabi ko'raman bu sohani. <br /> <br />
                               
                               Bu yo'nalish bilan qolib ketamanmi yo'q albatta endi harakat Fullstack dasturchi bo'lishga va juda ko'p bilimlarni olib o'zim startup qurish endi harakat.
                            </p>
                        </div>

                        <a href='tel:+998-94-663-36-39' className='btn btn-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-50 transition-all'>Contact me</a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About
import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

// import contact data
import { contact } from './../../data';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gq26mu9', 'template_6dj39bn', form.current, 'Mch2LCDCVJYaVQNOB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <section id='contact' className='section bg-gradient-to-r from-cyan-800 to-blue-800'>
        <div className="container mx-auto">
            {/* section title */}
            <div className="flex flex-col items-center text-center">
                <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>Cotact me</h2>
                <p className='subtitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate laborum omnis explicabo magnam architecto odio voluptatum harum expedita non cupiditate!</p>
            </div>

            <div className="flex flex-col lg:gap-x-8 lg:flex-row ">
                {/* info */}
                <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                    {contact.map((item, index)=> {
                        const {icon, title, subtitle, description} = item;
                        
                        return (
                            <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                <div className="text-white rounded-sm w-14 h-14 flex items-start justify-center mb- lg:mb-0 text-2xl">{icon}</div>

                                <div>
                                    <h4 className='font-body text-x1 mb-1'>{title}</h4>
                                    <p className='mb-1'>{subtitle}</p>
                                    <p className='
                                    text-black font-normal'>{description}</p>
                                </div>
                            </div>
                            
                        )
                    })}
                </div>

                {/* Form */}
                <form className='space-y-8 w-full max-w-[780px]' ref={form} onSubmit={sendEmail} autoComplete="off">
                    <div className="flex gap-8">
                        <input type="text" name='user_name' className='input' placeholder='Your name' />
                        <input type="email" name='user_email' className='input' placeholder='Your email' />
                    </div>
                    <input type="text" name='user_subject' className='input' placeholder='Subject' />
                    <textarea className='textarea' name='user_massage' placeholder='Your massage'></textarea>

                    <button className='btn btn-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-60' type='submit'>Send message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
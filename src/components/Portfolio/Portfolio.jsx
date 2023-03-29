import React from 'react'
import Projects from '../Projects/Projects'

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-gradient-to-r from-cyan-900 to-blue-900 min-h-[1400px]'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-48 before:hidden before:lg:block'>Portfolio</h2>
                <p className='subtitle'>
                    Bu yerda o'zim qilgan ishlarim ijodiy mahsulotlar va shaxsiy brendga asoslangan web saytlarning frontend qismlari bor.
                </p>
                <Projects />
            </div>
        </div>
    </section>
  )
}

export default Portfolio
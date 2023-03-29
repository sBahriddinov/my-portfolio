import React from 'react'


const Project = ({item, category}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center bg-zinc-800 p-5 rounded-xl'>
      <div className="mb-8">
        <img className='w-full' src={item.image} alt="" />
      </div>

      <p className='capitalize text-slate-400 text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <div className='flex w-full mt-9 justify-between'>
        <a href={item.github}  target="_blank"  className='mr-9 border-2 border-sky-500 py-2 px-3 rounded text-white transition duration-150 ease-out hover:ease-in hover:scale-90 hover:text-white'>Github</a>
        <a href={item.demo} target="_blank" className=' border-2 border-white py-2 px-3 rounded text-white transition duration-150 ease-out hover:ease-in hover:scale-90 hover:text-white'>Demo</a>
      </div>
    </div>
  )
}

export default Project
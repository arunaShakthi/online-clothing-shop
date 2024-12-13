import React from 'react'

const NewsLetterBox = () => {

const onSubmitHandler = (event) => {
        event.preventDefault();
}

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium to-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'>SImply dummy text seed can grow now end print color back to food</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-6'>
            <input className='w-full sm:flex-1 outline-none'  type='email' placeholder='Enter your email' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4' >SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
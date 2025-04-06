import React from 'react'

const Contact = () => {
    return (
        <div className='mt-6 lg:mt-28 h-60'>
            
            <h1 className='text-2xl font-bold  flex align-center justify-center tracking-widest mb-1'> Contact Us </h1>
            <div className='max-w-lg mx-auto border-zinc-500 p-8'>
                <form className='space-y-5'>
                    <div>
                        <label className='block text-gray-700 font-medium mb-1'>Name</label>
                     <input type="text" placeholder='Enter your name ' className='w-full px-4 py-2 border-zinc-300 rounded-lg' />
                    </div>
                    <div>
                        <label className='block text-gray-700 font-medium mb-1'>Email</label>
                     <input type="text" placeholder='Enter your email ' className='w-full px-4 py-2 border-zinc-300 rounded-lg' />
                    </div>
                    <div>
                        <label className='block text-gray-700 font-medium mb-1'>Message</label>
                     <textarea placeholder='Enter your message ' className='w-full px-4 py-2 border-zinc-300 rounded-lg' />
                    </div>
                     <button className='w-full bg-[#FFD333]  text-black rounded-full py-1 font-semibold' type='submit'>Send Message</button>         

                </form>
            </div>

          
        </div>
    );
}

export default Contact
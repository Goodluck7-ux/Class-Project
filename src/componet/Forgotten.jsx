"use client"
import React from 'react'
import Link from 'next/link'
export default function Forgotten() {
  return (
    <>
       <div className='w-full h-full bg-orange-50 flex justify-center items-center gap-2 py-10'>
      
              <div className='border bg-white border-black/25 w-100 h-auto rounded-2xl px-3 shadow-xl '>
      
                <div className=' w-60 py-10 px-2'>
                  <h1 className='text-3xl font-bold text-orange-600'>Welcome to Nestly</h1>
                  <p className='text-sm font-light'>Reset your password</p>
                </div>
      
                <div className='w-full h-auto'>
                  <form action="">
    
                    <div className=''>
                      <label className='block px-2 py-2 text-sm'>Email</label>
                      <input type="email" name='email' placeholder='ngalakagift@gmail.com' className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
                    </div>
      
            
                    <div className='w-full flex justify-between items-center gap-2 py-4 px-3'>
                      <Link href="/sign-in" className='italic text-sm'>Goback to sign in</Link>
                    </div>
      
                    <div className='w-full py-3 px-4'>
                      <button className='w-80 bg-orange-600 py-3 text-white cursor-pointer rounded-full'>Reset</button>
                    </div>
      
                  </form>
                </div>
              </div>
            </div>
    </>
  )
}

"use client"
import React from 'react'
import { CiUser } from "react-icons/ci"
import { MdOutlineWarehouse } from "react-icons/md";
import { HiOutlineInboxStack } from "react-icons/hi2";
import Link from 'next/link';
import Image from 'next/image';
export default function SignUp() {
  return (
    <>
      <div className='w-full h-full bg-orange-50 flex justify-center items-center gap-2 py-10'>

        <div className='border bg-white border-black/35 w-100 h-auto rounded-2xl px-3 shadow-xl '>

          <div className=' w-50 py-10 px-2'>
            <h1 className='text-2xl font-bold text-orange-600'>Join Nestly</h1>
            <p className='text-sm font-light'>Pick how you'll use Nestly</p>
          </div>

          <div className='w-full px-2 flex justify-between items-center gap-2 py-3'>

            <div className='w-25 border border-black/25 pb-2 cursor-pointer rounded-2xl hover:bg-orange-100 hover:text-orange-600'>
              <span className='text-2xl  flex justify-center items-center pt-2 pb-2 text-orange-600 font-bold'><CiUser /></span>
              <p className='text-center text-xs'>Buyer</p>
            </div>

            <div className='w-25 border border-black/25 pb-2 cursor-pointer rounded-2xl hover:bg-orange-100 hover:text-orange-600'>
              <span className='text-2xl  flex justify-center items-center pt-2 pb-2 text-orange-600 font-bold' ><MdOutlineWarehouse /></span>
              <p className='text-center text-xs'>Seller</p>
            </div>

            <div className='w-25 border border-black/25 pb-2 cursor-pointer rounded-2xl  hover:bg-orange-100 hover:text-orange-600'>
              <span className='text-2xl  flex justify-center items-center pt-2 pb-2  text-orange-600 font-bold'><HiOutlineInboxStack /></span>
              <p className='text-center text-xs'>Agent</p>
            </div>
          </div>

          <div className='w-full py-8'>
            <form action="">

              <div className='w-30 h-40 m-auto'>
                <div className='w-30 h-30 rounded-full' >
                  <Image src='/mrniceguy.png' width={300} height={300} alt='profile' className='w-full h-full rounded-full' />
                </div>

                <div className='py-2'>
                  <label>
                    <input type="file" name='picture' />
                    <button className='bg-orange-600  cursor-pointer text-white text-sm px-2 py-3 w-30 rounded-full'>Upload</button>
                  </label>
                </div>
              </div>


              <div className='py-8'>
                <label className='block px-2 py-2 text-sm'>Full name</label>
                <input type="text" name='fullname' placeholder='Ngalaka Gift' className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>

              <div className=''>
                <label className='block px-2 py-2 text-sm'>Email</label>
                <input type="email" name='email' placeholder='ngalakagift@gmail.com' className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>


              <div className=''>
                <label className='block px-2 py-2 text-sm'>Password</label>
                <input type="password" name='password' placeholder='............' className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>


              <div className=''>
                <label className='block px-2 py-2 text-sm'>Comfirm password</label>
                <input type="password" name='confirm' placeholder='............' className='w-full border border-black/25 py-2 px-2 outline-none hover:outline-1 rounded-full placeholder:px-3 text-sm' />
              </div>


              <div className='w-full flex justify-self-start items-center gap-2 py-4 px-3'>
                <Link href="/sign-in" className='italic text-sm'>Already have an account</Link>
              </div>

              <div className='w-full py-3 px-4'>
                <button className='w-80 bg-orange-600 py-3 text-white cursor-pointer rounded-full'>Create account</button>
              </div>

              <div className='w-70 m-auto'>
                <p className='text-sm italic  '>By continuing you agree to our <Link href="/terms" className='text-sm underline'>Terms</Link></p>
              </div>
            </form>
          </div>

        </div>


      </div>
    </>
  )
}

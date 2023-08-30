import React from 'react';
import { Head } from '@inertiajs/react'

export default function Preevent1() {
  return (
    <>
        <Head title="Pre Event" />

        <div className="bg-cover bg-no-repeat min-h-screen md:bg-[url('../../../public/assets/bg1.jpg')] bg-[url('../../../public/assets/bg2.jpg')]">
            <div className='mx-auto rounded-full bg-[#104F55] flex justify-center max-w-fit'>
                <img src={'../../../public/assets/TEDxUA.png'} alt='TEDxUA'/>
            </div>
        </div>
        <div className='w-full bg-[#104F55] h-[33px] md:h-[103px] flex items-center justify-center'>
            <p className='font-lastik text-[8px] md:text-[20px] subpixel-antialiased text-[#D9D9D9]'>This independent TEDx event is operated under license from TED.</p>
        </div>
    </>
  )
}


import React from 'react';
import { Head, router } from '@inertiajs/react'
import Typewriter from "typewriter-effect";

export default function Preevent1After() {
  return (
    <>
        <Head title="Pre Event" />

        {/* <div className='min-h-screen'> */}
            <div className="bg-cover bg-no-repeat min-h-screen xl:bg-[url('../../../public/assets/bg4.jpg')] bg-[url('../../../public/assets/bg3.jpg')] z-0">
                <div className='grid grid-cols-1 xl:grid-cols-2 grid-rows-1 justify-items-center'>
                    <div className='w-[163px] md:w-[232px] xl:w-[452px] h-fit rounded-full bg-[#104F55] px-4 xl:px-7 xl:py-3 py-1 border-white border-2 drop-shadow-custom1 mt-[50px] xl:mt-[67px] xl:col-span-2 flex justify-center z-10'>
                        <img src="/assets/TEDxUniversitasAirlangga.png"/>
                    </div>
                    <div className='mt-[86px] xl:mt-[302px] z-10'>
                        <p className='font-canopee text-[47px] xl:text-custom5 text-[#E79B08] text-center xl:text-left'>THE ENIGMA</p>
                        <div className='font-canopee text-[47px] xl:text-custom5 text-[#E79B08] mt-[4px] xl:mt-[18px]'>
                            <Typewriter
                                option={{ loop:true }}
                                onInit={(typewriter) => {
                                    typewriter
                                    .typeString("XPLORATION")
                                    .start()
                                    .pauseFor(1000)
                                }}
                            />
                        </div>
                    </div>
                    <div className="xl:mt-[80px] xl:ms-[10px] mt-[50px] xl:w-[640px] xl:h-[679px] w-[315px] h-[210px] bg-cover xl:bg-[url('../../../public/assets/Deskripsi1.png')] bg-[url('../../../public/assets/Deskripsi.png')] flex flex-col items-center z-10">
                        <div className='w-[216px] xl:w-[536px] h-[56px] xl:h-[155px] xl:mt-[112px] mt-[35px] mx-[40px]'>
                            <p className='font-lazymonday xl:text-custom8 text-custom6 text-[#104F55] text-center'>Drawing wisdom from the roots of our upbringing—the family—our quest leads us to unravel the enigma of parental influence.</p>
                        </div>
                        <div className='w-[243px] xl:w-[476px] h-[56px] xl:h-[207px] mt-[15px] xl:mt-[40px] z-10 '>
                            <p className='font-lazymonday xl:text-custom9 text-custom7 text-black text-justify'>You are embarking on a journey with exciting horizons; maintain your determination and positivity as you tread this path. We will accompany you every step of the way, so remember to mark your calendar for our upcoming event!</p>
                        </div>
                    </div>
                    <div className='absolute inset-0'>
                        <img src="/assets/flower.png" alt="flower" className=' z-[5] absolute bottom-0 right-0 lg:right-1/2 w-[150px] h-[170px]' />
                    </div>
                </div>
            </div>
            {/* <div className="bg-cover bg-no-repeat md:bg-[url('../../../public/assets/bg4.jpg')] bg-[url('../../../public/assets/bgmobil2.jpg')] min-h-[224px] pt-[70px] md:pt-[195px] md:pb-[135px]">
                <div className='ms-[20px] md:ms-[64px]'>
                    <div className='w-[126px] h-[89px] md:w-[650px] md:h-[388px]'>
                        <p className='font-lazymonday text-custom10 md:text-[90px]'>Watch our teaser and unveil the wonders together with us!</p>
                    </div>
                    <button className='w-[121px] md:w-[414px] h-[22px] md:h-[110px] bg-[#104F55] font-lazymonday text-white text-[14px] md:text-[55px] rounded-md md:rounded-xl mt-[13px] '>
                        watch teaser
                    </button>
                </div>
                <div>

                </div>
            </div> */}
        {/* </div> */}
        <div className='w-full bg-[#104F55] h-[33px] md:h-[103px] flex items-center justify-center'>
            <p className='font-lastik text-[8px] md:text-[20px] subpixel-antialiased text-[#D9D9D9]'>This independent TEDx event is operated under license from TED.</p>
        </div>
    </>
  )
}

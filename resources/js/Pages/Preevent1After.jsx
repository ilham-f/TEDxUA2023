import React from 'react';
import { Head, router } from '@inertiajs/react'

export default function Preevent1After() {
  return (
    <>
        <Head title="Pre Event" />

        {/* <div className='min-h-screen'> */}
            <div className="bg-cover bg-no-repeat min-h-screen lg:bg-[url('../../../public/assets/bg4.jpg')] bg-[url('../../../public/assets/bg3.jpg')]">
                <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-start lg:ms-[63px]'>
                    <div className='mt-[86px] lg:mt-[302px]'>
                        <p className='font-canopee text-[47px] lg:text-custom5 text-[#E79B08] text-center lg:text-left'>THE ENIGMA</p>
                        <p className='font-canopee text-[47px] lg:text-custom5 text-[#E79B08] text-center mt-[4px] lg:mt-[18px]'>XPLORATION</p>
                    </div>
                    <div className="lg:mt-[80px] lg:ms-[10px] mt-[50px] lg:w-[640px] lg:h-[679px] w-[315px] h-[210px] bg-cover lg:bg-[url('../../../public/assets/Deskripsi1.png')] bg-[url('../../../public/assets/Deskripsi.png')] flex flex-col items-center">
                        <div className='w-[216px] lg:w-[536px] h-[56px] lg:h-[155px] lg:mt-[112px] mt-[35px] mx-[40px]'>
                            <p className='font-lazymonday lg:text-custom8 text-custom6 text-[#104F55] text-center'>Drawing wisdom from the roots of our upbringing—the family—our quest leads us to unravel the enigma of parental influence.</p>
                        </div>
                        <div className='w-[243px] lg:w-[476px] h-[56px] lg:h-[207px] mt-[15px] lg:mt-[40px]'>
                            <p className='font-lazymonday lg:text-custom9 text-custom7 text-black text-justify'>You are embarking on a journey with exciting horizons; maintain your determination and positivity as you tread this path. We will accompany you every step of the way, so remember to mark your calendar for our upcoming event!</p>
                        </div>
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

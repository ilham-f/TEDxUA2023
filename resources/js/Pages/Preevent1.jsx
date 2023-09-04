import React from 'react';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from "framer-motion"


export default function Preevent1() {

    const [hover, setHover] = useState(false);
    const [opened, setOpened] = useState(false);
    const [modal, setModal] = useState(false);

    console.log(modal);

    const { data, setData, post, processing, errors } = useForm({
        form1: '',
    })

    // console.log(data);

    function submit(e) {
        e.preventDefault()
        post('/preevent1', {
            preserveScroll: true,
            onSuccess: () => {
                setModal(true);
                setTimeout(() => {
                    router.visit("/after")
                }, 3000);
              }
        });
    }

  return (
    <>
        <Head title="Pre Event" />

        <div className="bg-cover bg-no-repeat min-h-screen lg:bg-[url('../../../public/assets/bg1.jpg')] bg-[url('../../../public/assets/bg2.jpg')]">
            <div className='grid grid-cols-1 place-items-center'>
              {/* Logo Tedx */}
              <div className='flex justify-center content-center w-[163px] lg:w-[452px] rounded-full bg-[#104F55] px-4 lg:px-7 lg:py-3 py-1 border-white border-2 drop-shadow-custom1 mt-[50px] lg:mt-[67px]'>
                <img src="/assets/TEDxUniversitasAirlangga.png" className=' w-max h-max ' />
              </div>
              <div className='lg:w-[924px] w-[228px] lg:h-[110px] h-[56px] lg:mt-[113px] mt-[30px]'>
                <h1 className=' font-lazymonday lg:text-custom1 text-custom11 text-center text-[#169873] uppercase drop-shadow-custom2'>THE ENIGMA XPLORATION</h1>
              </div>
              <div className='mt-2 lg:w-[936px] lg:h-[52px] w-[230px] h-[11px]'>
                <img src="/assets/RedStroke.png" alt="redstroke" />
              </div>
              <div className='mt-[25px] lg:mt-[76px] w-[264px] h-[51px] lg:w-[1017px] lg:h-[208px]'>
                <p className='font-lazymonday text-custom12 lg:text-custom4 text-center'>Find the authentic compass inside you, endure diverse societal currents, flourish and actualize your boundless potential.</p>
              </div>
              <div className='lg:w-[752px] lg:h-[250px] mt-[31px] lg:mt-[76px] w-[211px] h-[70px]'>
                <h1 className='lg:text-custom2 text-custom8 font-pastel uppercase text-center text-[#104F55] drop-shadow-custom2'>Write down your story</h1>
              </div>
              <div className='mt-[74px] lg:block hidden'>
                <button className='ms-4 w-[140px] h-[140px] rounded-full border-[5px] border-[#104F55] hover:bg-[#169873] transition-all flex justify-center items-center'>
                    <img src="/assets/Arrow1.png" alt="arrow" />
                </button>
              </div>
              <AnimatePresence
                mode='wait'
              >
                {opened ? (
                <motion.div
                    key={'form'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className={"lg:bg-[url('../../../public/assets/formbgdesk.png')] bg-[url('../../../public/assets/formbgandro.png')] lg:mt-[104px] mt-[150px] lg:mb-[132px] mb-[78px] bg-cover lg:w-[1405px] lg:h-[843px] w-[331px] h-[198px] drop-shadow-xl"}>
                        <div className='flex'>
                            <div className='lg:ms-[104px] lg:mt-[103px] lg:mb-[171px] mt-[36px] ms-[24px] mb-[37px] hover:-rotate-6 transition-all duration-300 lg:w-[415px] lg:h-[569px] w-[85px] h-[119px]'>
                                <img src="/assets/xgrassdesk.png" alt="" className=''/>
                            </div>
                            <form onSubmit={submit}>
                                <div className='lg:mt-[140px] mt-[34px] flex flex-col lg:ms-[90px] ms-[24px]'>
                                    <h1 className='font-canopee lg:text-[70px] text-[15px]'>THE ENIGMA XPLORATION</h1>
                                    <div
                                    className='lg:w-[714px] w-[168px] lg:h-[110px] h-[16px] bg-transparent border-black border lg:rounded-md rounded-sm lg:mb-[19px] mb-[9px] lg:px-7 lg:py-8 px-[4px] py-[2px]'
                                    >
                                        <p className='font-pastel lg:text-[35px] text-[8px]'>“Are you adapting or just reacting?”</p>
                                    </div>
                                    <textarea
                                    name="answer"
                                    id="answer"
                                    onChange={e => setData('form1', e.target.value)}
                                    value={data.form1}
                                    className='bg-transparent border-black border lg:rounded-md rounded-sm lg:p-7 p-[5px] lg:w-[714px] lg:h-[250px] w-[168px] h-[63px] font-pastel placeholder:text-black lg:text-[35px] text-[8px] lg:mb-[27px] mb-[10px]'
                                    placeholder='Answer'
                                    ></textarea>
                                    <button
                                    className='lg:w-[663px] lg:h-[70px] w-[141px] h-[14px] bg-[#104F55] font-pastel text-white lg:text-[35px] text-[8px] lg:rounded-md rounded-sm self-center p-[2px]'
                                    disabled={processing}
                                    >
                                        Send my Answer!
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
                ) : (
                    <motion.div
                    key={'envelope'}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className={'lg:mt-[152px] mt-[145px] mb-[81px] lg:mb-[130px] relative'}>
                        <div
                            className={"lg:bg-[url('../../../public/assets/envelope-desktop.png')] bg-[url('../../../public/assets/envelope-android.png')] bg-cover duration-300 transition-all w-[357px] h-[200px] lg:w-[1249px] lg:h-[797px] drop-shadow-xl " + ((hover) ? '-rotate-6' : "")}
                            onClick={() => setOpened(true)}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            {/* <img src="/assets/envelope-desktop.png" alt="" className={ "duration-300 transition-all " + ((hover) ? '-rotate-6' : "")}/> */}
                            <h1 className={"font-lazymonday absolute text-sm lg:text-[35px] text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300" + ((hover) ? " lg:opacity-100" : " lg:opacity-0")}>tap to open!</h1>
                        </div>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>
        <div className='w-full bg-[#104F55] h-[33px] lg:h-[103px] flex items-center justify-center'>
            <p className='font-lastik text-[8px] lg:text-[20px] subpixel-antialiased text-[#D9D9D9]'>This independent TEDx event is operated under license from TED.</p>
        </div>

        <Dialog.Root open={modal}>
            <Dialog.Portal>
            <Dialog.Overlay className=' bg-zinc-900/75 fixed inset-0' />
            <Dialog.Content className="lg:w-[1123px] lg:h-[586px] w-[313px] h-[188px] lg:bg-[url('../../../public/assets/modal.png')] bg-[url('../../../public/assets/modaland.png')] rounded-xl fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center"
            onInteractOutside={(e) => router.visit('/after')}
            >
                <Dialog.Description>
                    <p className='text-[#E79B08] font-pastel lg:text-[125px] text-[25px] text-center'>thank you :&#41;</p>
                    <div className='lg:w-[785px] w-[191px] lg:h-[141px] h-[25px]'>
                        <p className='text-[#E79B08] font-pastel lg:text-custom3 text-custom7 text-center'>for becoming a part of our success by sharing your thoughts! Each and every answer matters to us</p>
                    </div>
                </Dialog.Description>
                <Dialog.Close>
                    <button
                        className="absolute top-[24px] right-[24px] inline-flex items-center justify-center lg:block hidden"
                        aria-label="Close"
                        onClick={() => router.visit('/after')}
                    >
                        <img src="/assets/x.png" alt="" />
                    </button>
                </Dialog.Close>
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </>
  )
}


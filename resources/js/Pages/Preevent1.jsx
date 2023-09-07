import React from 'react';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from "framer-motion"


export default function Preevent1({question}) {

    const [hover, setHover] = useState(false);
    const [opened, setOpened] = useState(false);
    const [modal, setModal] = useState(false);

    console.log(modal);

    const { data, setData, post, processing, errors } = useForm({
        preevent_question_id: question.id,
        answer: '',
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

        <div className="bg-cover bg-no-repeat min-h-screen md:bg-[url('../../../public/assets/bg1.jpg')] bg-[url('../../../public/assets/bg2.jpg')]">
            <div className='grid grid-cols-1 place-items-center'>
              {/* Logo Tedx */}
              <div className='w-[163px] md:w-[232px] xl:w-[452px] rounded-full bg-[#104F55] px-4 xl:px-7 xl:py-3 py-1 border-white border-2 drop-shadow-custom1 mt-[50px] xl:mt-[67px]'>
                <img src="/assets/TEDxUniversitasAirlangga.png"/>
              </div>
              <div className='xl:w-[924px] w-[228px] md:w-[450px] xl:h-[110px] h-[56px] xl:mt-[113px] mt-[30px]'>
                <h1 className='font-lazymonday xl:text-custom1 md:text-custom3 text-custom11 text-center text-[#169873] uppercase drop-shadow-custom2'>THE ENIGMA XPLORATION</h1>
              </div>
              <div className='mt-2 xl:w-[936px] xl:h-[52px] w-[230px] md:w-[400px] md:h-[30px] h-[11px] flex justify-center'>
                <img src="/assets/RedStroke.png" alt="redstroke" />
              </div>
              <div className='mt-[25px] xl:mt-[76px] w-[264px] md:w-[455px] md:h-[110px] h-[51px] xl:w-[1017px] xl:h-[208px]'>
                <p className='font-lazymonday text-custom12 md:text-custom11 xl:text-custom4 text-center'>Find the authentic compass inside you, endure diverse societal currents, flourish and actualize your boundless potential.</p>
              </div>
              <div className='xl:w-[752px] xl:h-[250px] mt-[31px] xl:mt-[76px] md:w-[350px] md:h-[95px] w-[211px] h-[70px]'>
                <h1 className='xl:text-custom2 md:text-custom3 text-custom8 font-pastel uppercase text-center text-[#104F55] drop-shadow-custom2'>Write down your story</h1>
              </div>
              <div className='mt-[74px] xl:block hidden'>
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
                    <div className={"xl:bg-[url('../../../public/assets/formbgdesk.png')] bg-[url('../../../public/assets/formbgandro.png')] xl:mt-[104px] mt-[36px] xl:mb-[207px] mb-[33px] bg-cover md:w-[630px] xl:w-[1405px] xl:h-[843px] w-[280px] xs:w-[331px] drop-shadow-xl"}>
                        <div className='flex flex-col xl:flex-row'>
                            <h1 className='font-canopee text-[20px] md:text-[44px] xl:hidden self-center mt-4 md:mt-8'>THE ENIGMA XPLORATION</h1>
                            <div className='xl:ms-[104px] xl:mt-[103px] xl:mb-[171px] hover:-rotate-6 transition-all duration-300 xl:w-[415px] xl:h-[569px] w-[85px] h-[119px] self-center flex items-center md:w-[190px] md:h-[230px]'>
                                <img src="/assets/xgrassdesk.png" alt="xform"/>
                            </div>
                            <form onSubmit={submit}>
                                <div className='xl:mt-[140px] flex flex-col xl:ms-[90px] items-center xl:items-start'>
                                    <h1 className='font-canopee text-[70px] hidden xl:block'>THE ENIGMA XPLORATION</h1>
                                    <div className='xl:w-[714px] w-[75%] md:h-[110px] flex items-center bg-transparent border-black border xl:rounded-md rounded-sm xl:mb-[19px] mb-[9px] xl:px-7 xl:py-7 px-[5px] py-[4px]'>
                                        <p className='font-pastel md:text-[20px] xs:text-[13px] text-[11px] text-justify'>{question.questions}</p>
                                    </div>
                                    <textarea
                                    name="answer"
                                    id="answer"
                                    onChange={e => setData('answer', e.target.value)}
                                    value={data.answer}
                                    className='bg-transparent border-black border xl:rounded-md rounded-sm xl:p-7 p-[5px] xl:w-[714px] xl:h-[250px] w-[75%] h-[93px] md:h-[130px] font-pastel placeholder:text-black xl:text-[35px] md:text-[20px] text-[13px] xl:mb-[27px] mb-[10px]'
                                    placeholder='Answer'
                                    ></textarea>
                                    <button
                                    className='xl:w-[663px] xl:h-[70px] md:h-[42px] w-[141px] md:w-[222px] h-[22px] bg-[#104F55] font-pastel text-white xl:text-[35px] md:text-[16px] text-[10px] xl:rounded-md rounded-sm self-center p-[2px] mb-[50px] md:mb-[167px] xl:mb-0'
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
                    <div className={'xl:mt-[152px] md:mt-[220px] md:mb-[205px] mt-[145px] mb-[139px] relative'}>
                        <div
                            className={"md:bg-[url('../../../public/assets/envelope-desktop.png')] bg-[url('../../../public/assets/envelope-android.png')] bg-contain bg-no-repeat xs:bg-cover duration-300 transition-all w-[270px] xs:w-[357px] h-[200px] md:w-[694px] md:h-[440px] xl:w-[1249px] xl:h-[797px] drop-shadow-xl " + ((hover) ? '-rotate-6' : "")}
                            onClick={() => setOpened(true)}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            {/* <img src="/assets/envelope-desktop.png" alt="" className={ "duration-300 transition-all " + ((hover) ? '-rotate-6' : "")}/> */}
                            <h1 className={"font-lazymonday absolute text-sm md:text-[22px] xl:text-[35px] text-black top-[40%] xs:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300" + ((hover) ? " xl:opacity-100" : " xl:opacity-0")}>tap to open!</h1>
                        </div>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>
        <div className='w-full bg-[#104F55] h-[33px] xl:h-[103px] flex items-center justify-center'>
            <p className='font-lastik text-[8px] xl:text-[20px] subpixel-antialiased text-[#D9D9D9]'>This independent TEDx event is operated under license from TED.</p>
        </div>

        <Dialog.Root open={modal}>
            <Dialog.Portal>
            <Dialog.Overlay className=' bg-zinc-900/75 fixed inset-0' />
            <Dialog.Content className="xl:w-[1123px] xl:h-[586px] md:w-[640px] md:h-[370px] xs:w-[313px] w-[280px] h-[188px] xl:bg-[url('../../../public/assets/modal.jpg')] bg-[url('../../../public/assets/modal.jpg')] bg-cover rounded-3xl fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center"
            onInteractOutside={(e) => router.visit('/after')}
            >
                <Dialog.Description>
                    <p className='text-[#E79B08] font-pastel xl:text-[125px] md:text-[70px] text-[25px] text-center'>thank you :&#41;</p>
                    <div className='xl:w-[785px] w-[191px] md:w-[390px] md:h-[70px] xl:h-[141px] h-[25px]'>
                        <p className='text-[#E79B08] font-pastel xl:text-custom3 md:text-custom10 text-custom7 text-center'>for becoming a part of our success by sharing your thoughts! Each and every answer matters to us</p>
                    </div>
                </Dialog.Description>
                <Dialog.Close>
                    <button
                        className="absolute top-[24px] md:right-[24px] items-center justify-center block"
                        aria-label="Close"
                        onClick={() => router.visit('/after')}
                    >
                        <img src="/assets/x.png" alt="" className='w-2/3 h-2/3 md:w-full md:h-full'/>
                    </button>
                </Dialog.Close>
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </>
  )
}


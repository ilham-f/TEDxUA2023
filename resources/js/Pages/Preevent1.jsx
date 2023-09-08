import React from 'react';
import { Head, router } from '@inertiajs/react'
import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import * as Dialog from '@radix-ui/react-dialog';


export default function Preevent1() {

    const [hover, setHover] = useState(false);
    const [opened, setOpened] = useState(false);
    const [modal, setModal] = useState(false);

    console.log(modal);

    const { data, setData, post, processing, errors } = useForm({
        preevent_question_id: '',
        answer: '',
    })

    // console.log(data);

    function submit(e) {
        e.preventDefault()
        post('/preevent1', {
            preserveScroll: true,
            onSuccess: () => {
                setModal(true);
              }
        });
    }

  return (
    <>
        <Head title="Pre Event" />

        <div className="bg-cover bg-no-repeat min-h-screen md:bg-[url('../../../public/assets/bg1.jpg')] bg-[url('../../../public/assets/bg2.jpg')]">
            <div className='grid grid-cols-1 place-items-center'>
              {/* Logo Tedx */}
              <div className='flex justify-center content-center w-[452px] rounded-full bg-[#104F55] px-7 py-3 border-white border-2 drop-shadow-custom1 mt-[67px]'>
                <img src="/assets/TEDxUniversitasAirlangga.png" className=' w-max h-max ' />
              </div>
              <div className='w-[732px] h-[166px] mt-[118px]'>
                <h1 className=' font-lazymonday text-custom1 text-center text-[#169873] uppercase drop-shadow-custom2'>THE ENIGMA XPLORATION</h1>
              </div>
              <div style={{marginTop: "-100px"}} >
                <img src="/assets/RedStroke.png" alt="redstroke" />
              </div>
              <div className='w-[1000px] h-[166px] mt-[118px]'>
                <h1 className='text-[30px] font-lazymonday text-custom1 text-center text-[#000] uppercase drop-shadow-custom2'>Find the authentic compass inside you, endure diverse societal currents, flourish and actualize your boundless potential.</h1>
              </div>
              <div className='w-[902px] h-[250px] mt-[68px]'>
                <h1 className='text-custom2 font-pastel uppercase text-center text-[#104F55] drop-shadow-custom2'>Write down your story</h1>
              </div>
              <div>
                <button className='ms-1 w-[140px] h-[140px] rounded-full border-[5px] border-[#104F55] hover:bg-[#169873] transition-all flex justify-center items-center'>
                    <img src="/assets/Arrow1.png" alt="arrow" />
                </button>
              </div>
              <div className={'mt-[133px] mb-[57px] relative ' + ((opened) ? "hidden" : "visible")}>
                <div
                    onClick={() => setOpened(true)}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <img src="/assets/envelope-desktop.png" alt="" className={ "duration-300 transition-all " + ((hover) ? '-rotate-6' : "")}
                    />
                    <h1 className={"font-lazymonday absolute text-[35px] text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 " + ((hover) ? "opacity-100" : " opacity-0")}>tap to open!</h1>
                </div>
              </div>
              <div className={"bg-[url('../../../public/assets/formbgdesk.png')] mt-[99px] mb-[45px] bg-cover w-[1405px] h-[843px] drop-shadow-xl " + ((opened) ? "visible" : "hidden")}>
                <div className='flex'>
                    <div className='ms-[104px] mt-[103px] mb-[171px] hover:-rotate-6 transition-all duration-300 w-[415px] h-[569px]'>
                        <img src="/assets/xgrassdesk.png" alt="" className=''/>
                    </div>
                    <form onSubmit={submit}>
                        <div className='mt-[140px] flex flex-col ms-[90px]'>
                            <h1 className='font-canopee text-[70px] mr-[72px]'>THE ENIGMA XPLORATION</h1>
                            <input disabled
                            onChange={e => setData('preevent_question_id', e.target.value)}
                            value={data.preevent_question_id}
                            type="text"
                            className='w-[714px] h-[110px] bg-transparent border-black border rounded-md mb-[19px] font-pastel text-[35px] px-7 py-8 placeholder:text-black'
                            placeholder='“Are you adapting or just reacting?”'
                            />
                            <textarea
                            name="answer"
                            id="answer"
                            onChange={e => setData('answer', e.target.value)}
                            value={data.answer}
                            className='bg-transparent border-black border rounded-md p-7 w-[714px] h-[250px] font-pastel placeholder:text-black text-[35px] mb-[27px]'
                            placeholder='Answer'
                            ></textarea>
                            <button
                            className='w-[663px] h-[70px] bg-[#104F55] font-pastel text-white text-[35px] rounded-md self-center'
                            disabled={processing}
                            >
                                Send my Answer!
                            </button>
                        </div>
                    </form>
                </div>
              </div>
            </div>
        </div>
        <div className='w-full bg-[#104F55] h-[33px] md:h-[103px] flex items-center justify-center'>
            <p className='font-lastik text-[8px] md:text-[20px] subpixel-antialiased text-[#D9D9D9]'>This independent TEDx event is operated under license from TED.</p>
        </div>

        <Dialog.Root open={modal}>
            <Dialog.Portal>
            <Dialog.Overlay className=' bg-zinc-900/75 fixed inset-0' />
            <Dialog.Content className="w-[1123px] h-[586px] bg-[url('../../../public/assets/modal.png')] rounded-xl fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center"
            onInteractOutside={(e) => router.visit('/after')}
            >
                <Dialog.Description>
                    <p className='text-[#E79B08] font-pastel text-[125px] text-center'>thank you :&#41;</p>
                    <div className='w-[785px] h-[141px]'>
                        <p className='text-[#E79B08] font-pastel text-custom3 text-center'>for becoming a part of our success by sharing your thoughts! Each and every answer matters to us</p>
                    </div>
                </Dialog.Description>
                <Dialog.Close>
                    <button
                        className="absolute top-[24px] right-[24px] inline-flex items-center justify-center"
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


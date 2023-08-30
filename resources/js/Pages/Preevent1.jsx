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
        form1: '',
        form2: '',
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
            <div>
                
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


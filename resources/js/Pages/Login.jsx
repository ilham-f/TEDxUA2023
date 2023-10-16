import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PasswordInput from './PasswordInput';
import Input from './Input';

export default function Login() {
  return (
    <>
        <div className="bg-[url('../../../public/assets/bg-grass.jpg')] bg-no-repeat bg-cover pt-10 pb-24 w450:pt-44 w450:pb-44 grid justify-center px-8 w-full">
            <div className='mb-2 md:mb-8 relative w-full text-center text-[45px] xs:text-[60px] md:text-[100px] lg:text-[150px]'>
                <span className='text-[#A4161A] font-capuchetrial'>LOG</span>
                <span className='text-[#fff] font-capuchetrial'>IN</span>
            </div>
            <div className='border-4 rounded-3xl backdrop-blur-[2px] px-4 pt-8 md:px-16 md:pt-10 w-[280px] xs:w-[360px] md:w-[600px] lg:w-[800px] mb-44 md:mb-0'>
                <img src="/assets/logox1.png" alt="logox1" className='top-0 right-0 xs:top-[-10px] xs:right-[-10px] md:top-[-70px] md:right-[-70px] absolute w-[10px] xs:w-[40px] md:w-[138px]'/>
                <form className='grid'>
                    {/* <label htmlFor="name" className='mb-3 font-gooddog text-white text-[40px]'>Name</label>
                    <input id='name' type="text" className='mb-3 p-4 rounded-md'/>
                    <label htmlFor="email" className='mb-3 font-gooddog text-white text-[40px]'>Email</label>
                    <input id='email' type="email" className='mb-3 p-4 rounded-md'/>
                    <label htmlFor="password" className='mb-3 font-gooddog text-white text-[40px]'>Password</label>
                    <input id='password' type="password" className='mb-3 p-4 rounded-md'/>
                    <label htmlFor="confirmpassowrd" className='mb-3 font-gooddog text-white text-[40px]'>Confirm Passowrd</label>
                    <input id='confirmpassowrd' type="password" className='mb-3 p-4 rounded-md'/> */}
                    <Input label={"Email"} placeholder={"Email"} id={"email"} type={"email"} name={"email"}/>
                    <PasswordInput label={"Password"} placeholder={"Password"} id={"password"} name={"password"}/>
                    <button className='bg-[#A4161A] mt-10 p-1 font-gooddog text-[25px] md:text-[40px] rounded-full text-white hover:bg-white hover:text-[#A4161A] transition-all mx-4'>
                        LOGIN
                    </button>
                </form>
                <div className='flex justify-center gap-1 mt-3 mb-20 md:mb-44'>
                    <span className='font-gooddog text-white text-[20px] md:text-[25px]'>Don't Have An Account?</span>
                    <button className='bg-[#fff] rounded-full text-[#A4161A] text-[16px] md:text-[20px] px-[12px] font-gooddog hover:text-white hover:bg-[#A4161A] transition-all underline' type='button'>REGISTER</button>
                </div>
                <div className='absolute bottom-0 left-0 right-0 flex justify-center'>
                    <img src="/assets/bungaa.png" alt="bunga" className='w-[270px] xs:w-[360px] md:w-[700px] lg:w-[940px] max-w-none'/>
                </div>
            </div>
        </div>
        <Footer />
        <Navbar />
    </>

  )
}

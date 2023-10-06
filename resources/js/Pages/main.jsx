import '../../css/app.css';

import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import React, { useEffect, useState } from "react";
import SwiperAnimation from '../../components/swiperAnimaiton';
import CircularTextAnimation from '../../components/circularTextAnimation';
import '/resources/css/circleTextAnimation.css';
import '/resources/css/customScrollbar.css';
import '/resources/css/bottomNavBar.css'
import { initTE } from "tw-elements";
import '/resources/components/speakersCarousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SpeakersCarousel from "../../components/speakersCarousel";
import { Carousel } from "react-responsive-carousel";

import { Link, Head, router } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import * as Dialog from '@radix-ui/react-dialog';

export default function mainevent({ auth }) {
    const [showNavbar, setShowNavbar] = useState(true);
  const [showCarousel, setShowCarousel] = useState(false);
  const isLoggedIn = auth.user; // Check if a user is logged in
  const userName = isLoggedIn ? auth.user.name : null;

  // carousel ditampilkan
  useEffect(() => {
    if (window.innerWidth <= 450) {
      setShowCarousel(true);
    } else {
      setShowCarousel(false);
    }
  }, []);

  useEffect(() => {
    // Inisialisasi Dropdown
    initTE({ Dropdown });

    // mendeteksi perubahan lebar layar
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setShowNavbar(false);
        setShowCarousel(true);
      } else {
        setShowNavbar(true);
        setShowCarousel(false);
      }
    };

    // Panggil handleResize pada awalnya
    handleResize();

    // Tambahkan event listener ke window
    window.addEventListener("resize", handleResize);

    // Cleanup event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // Menambahkan kode JavaScript untuk menuToggle
    const menuToggle = document.querySelector(".menuToggle");
    menuToggle.onclick = function () {
      menuToggle.classList.toggle("active");
    };
  }, []);

    return (
        <>
            <head title='TEDxUniversitasAirlangga2023' />
            {/*Banner*/}
            <section>
                <div className="bg-cover bg-no-repeat min-h-full xl:bg-[url('/assets/bg-main1.jpg')] md:bg-[url('/assets/bg-main1-lg.jpg')] xs:bg-[url('/assets/bg-main1-xs.jpg')]">
      {showNavbar ? (
        <div className='grid bg-[#1A1A1A] opacity-75 border-b-4 border-[#b93021]'>
          {/* ...Isi navbar Anda di sini */}
          <div className='flex xl:h-[50px] md:h-[25px] xs:h-[10px] xl:mx-[100px] md:mx-[20px] xs:mx-[10px] xl:my-[40px] md:my-[30px] xs:my-[15px] content-center'>
            {/* Logo Tedx */}
            <img src="/assets/TEDxUniversitasAirlangga.png" alt='' />
            <nav className="flex ml-auto items-center">
                <ul className="flex xl:flex-row md:flex-row xs:flex-row font-helvetica xl:gap-[30px] md:gap-[25px] xs:gap-[10px] xl:text-[20px] md:text-[12px] xs:text-[5px] font-bold">
                    <li><a href="#" className="text-white hover:text-neutral-500">HOME</a></li>
                    <li><a href="#" className="text-white hover:text-neutral-500">GALLERY</a></li>
                    <li><a href="#" className="text-white hover:text-neutral-500">PARTNERSHIP</a></li>
                    <li><a class="flex items-center text-white hover:text-neutral-500 hover:ease-in-out focus:text-neutral-700"
                        href="#"
                        type="button"
                        id="dropdownMenuButton2"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false">
                        ORDER NOW
                        <span class="ml-2 w-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                        </span>
                        </a>
                    <ul
                        class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton2"
                        data-te-dropdown-menu-ref>
                    <li>
                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                        href="#"
                        data-te-dropdown-item-ref
                        >Ticketing</a>
                    </li>
                    <li>
                    <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                        href="#"
                        data-te-dropdown-item-ref
                        >Merch</a>
                    </li>
                    </ul>
                    </li>
                    {/* Login */}
                    {auth.user ? (
                      <Link
                      href={route('dashboard')}
                      className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                      Dashboard
                    </Link>
                    ) : (
                    <Link
                      href={route('login')}
                      className="text-white text-center border-[2px] border-[#b93021] hover:bg-[#b93021] rounded-md p-[10px] md:p-[5px] xs:p-[3px]"
                    >
                      LOGIN
                    </Link>
                    )}
                    </ul>

                    
                </nav>
            </div>
        </div>
      ) : (
        <div class="navigation">
            <div class="menuToggle"><i></i></div>
            <div class="menu">
                <ul>
                    <li><a href="#">ORDER</a></li>
                    <li><a href="#">PARTNER</a></li>
                    <li className="mx-[20px] invisible"></li>
                    <li><a href="#">GALLERY</a></li>
                    <li><a href="#">LOGIN</a></li>
                </ul>
            </div>
        </div>
      )}
      <div className="bg-cover bg-no-repeat min-h-full xl:bg-[url('/assets/bg-main1.jpg')] md:bg-[url('/public/assets/bg-main1-lg.jpg')] xs:bg-[url('/public/assets/bg-main1-xs.jpg')]">
            <div className='mx-auto xl:w-[924px] md:w-[768px] xs:w-[300px] xl:pt-[100px] md:pt-[100px] xs:pt-[25px]'>
                <h1 className="font-canopee xl:text-[150px] md:text-[130px] xs:text-[40px] text-custom11 text-center text-white uppercase">
                    <span className='block'>IDEAS WORTH</span>
                    <span className="text-[#b93021]"> SPREAD</span>
                    <span>ING</span>
                </h1>
                <div className='mx-auto text-center xl:py-[50px] md:py-[50px] xs:py-[20px]'>
                    <button type='button' className='border-[#b93021] hover:bg-[#787276] rounded font-helvetica text-white font-bold xl:px-[10px] xl:py-3 md:px-[10px] md:py-[5px] xs:px-[5px] xs:py-[2px] xl:border-[2px] md:border-[2px] xs:border-[1px] xl:text-[20px] md:text-[18px] xs:text-[8px]'>UPCOMING EVENTS</button>
                </div>
            </div>
        </div>
    </div>

                <CircularTextAnimation />
            </section>
            
            {/*Main Event*/}
            <section>
                    <div className="bg-cover bg-[#F0EFE5] bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[15px] xl:bg-[url('/assets/bg-main-ev.jpg')] md:bg-[url('/assets/bg-main-ev-md.jpg')] xs:bg-[url('/assets/bg-main-ev-md.jpg')]">
                        <div className='text-center'>
                            <h1 className='xl:text-[75px] md:text-[50px] xs:text-[25px] font-capuchetrial'>MAIN EVENT : <br/> <span className='text-[#A4161A]'> TEDx</span>Universitas Airlangga </h1>
                            <p className='xl:text-[28px] md:text-[25px] xs:text-[10px] xl:px-[250px] md:px-[50px] xs:px-[40px] font-migra'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                        <div class="flex gap-[20px] justify-center font-helvetica xl:py-[30px] md:py-[20px] xs:py-[10px]">
                            <button class="xl:px-[4px] xl:py-[2px] md:px-[5px] md:py-[1px] md:text-[15px] xs:px-[2px] xs:py-[0px] xs:text-[8px] bg-[#F5F3F4] text-[#A3161A] border-2 border-[#A3161A] rounded-md">RESERVE SPOT</button>
                            <button class="xl:px-[4px] xl:py-[2px] md:px-[5px] md:py-[1px] md:text-[15px] xs:px-[2px] xs:py-[0px] xs:text-[8px] bg-[#981B1F] rounded-md text-[#F5F3F4]">LEARN MORE</button>
                        </div>
                    </div>
            </section>

            {/*SubEvent*/}
            <section>
                <div className="bg-cover bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[15px] xl:bg-[url('/assets/bg-sub-event.jpg')] md:bg-[url('/assets/bg-sub-event.jpg')] xs:bg-[url('/public/assets/bg-sub-event.jpg')]">
                    <div className='text-center text-[#FFFFFF] '>
                        <h1 className='xl:text-[75px] md:text-[50px] xs:text-[25px] font-capuchetrial'>SUB EVENT LINE UP</h1>
                    </div>
                    <SwiperAnimation/>
                </div>
            </section>

            {/*Speakers*/}
            <section>
            <div className="bg-cover bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[15px] bg-[#A4161A]">
              <img className='absolute xl:w-[500px] md:w-[300px] xs:w-[150px]' src="/assets/x-left.png" alt="" />
              <h1 className="xl:text-[75px] md:text-[50px] font-capuchetrial text-center text-[#FFFFFF]">
                Prestigious <br /> speakers
              </h1>
      {showCarousel ? (
        <>
            <div className="relative">
              <div className="absolute xl:w-[500px] md:w-[300px] xs:w-[150px] bottom-0 right-0 z-1">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/x-right.png"
                  alt=""
                />
            </div>
  <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    autoPlay={true}
    interval={5000}
    stopOnHover={true}
    swipeable={true}
  >
    <div className="flex justify-center px-[20px]">
      <div className="w-1/2 mr-2">
        <img
          className="w-full h-full object-cover bg-[#D9D9D9]"
          src="/assets/speaker.png"
          alt="Pembicara 1"
        />
        <p className="font-canopee text-white py-2 text-center">ELENA</p>
      </div>
      <div className="w-1/2 ml-2">
        <img
          className="w-full h-full object-cover bg-[#D9D9D9]"
          src="/assets/speaker.png"
          alt="Pembicara 2"
        />
        <p className="font-canopee text-white py-2 text-center">Speaker 2</p>
      </div>
    </div>
    <div className="flex justify-center px-[20px]">
      <div className="w-1/2 mr-2">
        <img
          className="w-full h-full object-cover bg-[#D9D9D9]"
          src="/assets/speaker.png"
          alt="Pembicara 1"
        />
        <p className="font-canopee text-white py-2 text-center">ELENA</p>
      </div>
      <div className="w-1/2 ml-2">
        <img
          className="w-full h-full object-cover bg-[#D9D9D9]"
          src="/assets/speaker.png"
          alt="Pembicara 2"
        />
        <p className="font-canopee text-white py-2 text-center">Speaker 2</p>
      </div>
    </div>
  </Carousel>
</div>

        </>
      ) : (
        <>
        <div className="grid grid-cols-3 gap-4 xl:px-[200px] md:px-[100px] xs:px-[50px] xl:text-[50px] md:text-[35px] xs:text-[15px]">
            <div class="text-center ">
                <div class="relative">
                    <img src="/assets/speaker.png" alt="Pembicara 1" class="w-full h-full object-cover bg-[#D9D9D9]" />
                    <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">ELENA</p>
                </div>
            </div>
            <div class="text-center ">
                <div class="relative">
                    <img src="/assets/speaker.png" alt="Pembicara 1" class="w-full h-full object-cover bg-[#D9D9D9]" />
                    <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">ELENA</p>
                </div>
            </div>
            <div class="text-center ">
                <div class="relative">
                    <img src="/assets/speaker.png" alt="Pembicara 1" class="w-full h-full object-cover bg-[#D9D9D9]" />
                    <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">ELENA</p>
                </div>
            </div>
          </div>
          <div className="flex justify-end">
            <img className='absolute xl:w-[500px] md:w-[300px]' src="/assets/x-right.png" alt="" />
          </div>
          <div class="grid grid-cols-3 pt-[15px] gap-4 xl:px-[200px] md:px-[100px] xs:px-[50px] xl:text-[50px] md:text-[35px] xs:text-[15px]">
            <div class="text-center ">
                <div class="relative">
                    <img src="/assets/speaker.png" alt="Pembicara 1" class="w-full h-full object-cover bg-[#D9D9D9]" />
                    <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">ELENA</p>
                </div>
            </div>
            <div class="text-center ">
                <div class="relative">
                    <img src="/assets/speaker.png" alt="Pembicara 1" class="w-full h-full object-cover bg-[#D9D9D9]" />
                    <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">ELENA</p>
                </div>
            </div>
            <div class="text-center ">
                <div class="relative">
                    <img src="/assets/speaker.png" alt="Pembicara 1" class="w-full h-full object-cover bg-[#D9D9D9]" />
                    <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">ELENA</p>
                </div>
            </div>
          </div>
        </>
      )}
    </div>
            </section>

            {/*Ticktets*/}
            <section>
                    <div className="bg-cover bg-[#F0EFE5] bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[40px] xl:bg-[url('/assets/bg-main-ev.jpg')] md:bg-[url('/assets/bg-main-ev-md.jpg')] xs:bg-[url('/assets/bg-main-ev-md.jpg')]">
                        <div className='text-center'>
                            <h1 className='xl:text-[75px] md:text-[50px] xs:text-[25px] font-canopee text-[#A4161A]'>GRAB YOUR TICKET</h1>
                        </div>
                        <div class="flex justify-center font-helvetica md:mt-[20px] xs:mt-[10px]">
                            <button class="px-4 py-2 bg-[#981B1F] rounded-md text-[#F5F3F4] xs:text-[10px]">GRAB YOUR TICKET</button>
                        </div>
                    </div>
            </section>

            <div className='w-full bg-[#000000] xl:h-[100px] md:h-[50px] xs:h-[25px] xs:py-[15px] flex items-center justify-center'>
                <p className='font-lastik xl:text-[20px] md:text-[12px] xs:text-[8px] subpixel-antialiased text-[#D9D9D9]'>This independent TEDx event is operated under license from TED.</p>
            </div>
        </>
    )
}
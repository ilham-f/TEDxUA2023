import "../../css/app.css";

import React, { useEffect, useState } from "react";
import SwiperAnimation from "../../components/swiperAnimaiton";
import CircularTextAnimation from "../../components/circularTextAnimation";
import "/resources/css/circleTextAnimation.css";
import "/resources/css/customScrollbar.css";
import "/resources/css/bottomNavBar.css";
import { initTE } from "tw-elements";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import SpeakersCarousel from "../../components/speakersCarousel";
import { Carousel } from "react-responsive-carousel";
import { Link, Head, router } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import * as Dialog from "@radix-ui/react-dialog";

export default function mainevent({ auth }) {
    const [showNavbar, setShowNavbar] = useState(true);
    const [showCarousel, setShowCarousel] = useState(false);
    //   const isLoggedIn = auth.user; // Check if a user is logged in
    //   const userName = isLoggedIn ? auth.user.name : null;

    // carousel ditampilkan
    useEffect(() => {
        if (window.innerWidth <= 450) {
            setShowCarousel(true);
        } else {
            setShowCarousel(false);
        }
    }, []);

    return (
        <>
            <Head title="TEDxUniversitasAirlangga" />
            {/*Banner*/}
            <section>
                <div className="bg-cover bg-no-repeat min-h-full bg-[url('/assets/bg-main1-lg.jpg')] md:bg-[url('/public/assets/bg-main1-lg.jpg')] xs:bg-[url('/public/assets/bg-main1-lg.jpg')]">
                    <div className="mx-auto xl:w-[924px] md:w-[768px] xs:w-[300px] xl:pt-[200px] md:pt-[100px] xs:pt-[25px]">
                        <h1 className="font-canopee xl:text-[150px] md:text-[130px] xs:text-[80px] text-custom11 text-center text-white uppercase drop-shadow-xl">
                            <span className="block">IDEAS WORTH</span>
                            <span className="text-[#b93021]"> SPREAD</span>
                            <span>ING</span>
                        </h1>
                        <div className="mx-auto text-center xl:py-[70px] md:py-[70px] xs:py-[30px]">
                            <a href="#event">
                                <button
                                    type="button"
                                    className="border-[#b93021] hover:bg-[#b93021]/50 rounded font-helvetica text-white font-bold xl:px-[10px] xl:py-3 md:px-[10px] md:py-[5px] xs:px-[5px] xs:py-[2px] xl:border-[2px] md:border-[2px] xs:border-[1px] xl:text-[20px] md:text-[20px] xs:text-[12px]"
                                >
                                    UPCOMING EVENTS
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <CircularTextAnimation />
            </section>

            {/*Main Event*/}
            <section id="event">
                <div className="bg-cover bg-[#F0EFE5] bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[15px] xl:bg-[url('/assets/bg-main-ev.jpg')] md:bg-[url('/assets/bg-main-ev-md.jpg')] xs:bg-[url('/assets/bg-main-ev-md.jpg')]">
                    <div className="text-center">
                        <h1 className="xl:text-[75px] md:text-[50px] xs:text-[25px] font-capuchetrial">
                            MAIN EVENT : <br />{" "}
                            <span className="text-[#A4161A]"> TEDx</span>
                            UniversitasAirlangga{" "}
                        </h1>
                        <p className="xl:text-[28px] md:text-[25px] xs:text-[15px] xl:px-[250px] md:px-[50px] xs:px-[40px] font-migra">
                            "Mastering the 'Upheaval Maze' in Today's World
                            Adapting to Change and Achieving Success" In our
                            complex era, akin to a labyrinth of challenges,
                            navigating change and making wise decisions is
                            essential. The 'Upheaval Maze' concept highlights
                            the need to adapt, overcome obstacles, and find
                            success amidst turmoil. Join our talkshow to explore
                            these themes of change and adaptation in the modern
                            world.
                        </p>
                    </div>
                    <div class="flex gap-[20px] justify-center font-helvetica xl:py-[30px] md:py-[20px] xs:py-[10px]">
                        <button
                            class="xl:px-[4px] xl:py-[2px] md:px-[5px] md:py-[1px] md:text-[15px] xs:px-[2px] xs:py-[0px] xs:text-[8px] bg-[#F5F3F4] text-[#A3161A] border-2 border-[#A3161A] rounded-md"
                            hidden
                        >
                            RESERVE SPOT
                        </button>
                    </div>
                </div>
            </section>

            {/*SubEvent*/}
            <section>
                <div className="bg-cover bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[15px] xl:bg-[url('/assets/bg-sub-event.jpg')] md:bg-[url('/assets/bg-sub-event.jpg')] xs:bg-[url('/public/assets/bg-sub-event.jpg')]">
                    <div className="text-center text-[#FFFFFF] ">
                        <h1 className="xl:text-[75px] md:text-[50px] xs:text-[25px] font-capuchetrial">
                            PRE EVENT LINE UP
                        </h1>
                    </div>
                    <SwiperAnimation />
                </div>
            </section>

            {/* Speakers */}
            <section>
                <div className="bg-cover bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[20px] bg-[#A4161A]">
                    <img
                        className="absolute xl:w-[500px] md:w-[300px] xs:w-[150px]"
                        src="/assets/x-left.png"
                        alt=""
                    />
                    <h1 className="xl:text-[75px] md:text-[50px] xs:text-[25px] pb-[20px] font-capuchetrial text-center text-[#FFFFFF]">
                        Our Speakers
                    </h1>
                    <>
                        <div className="grid xl:grid-cols-3 md:grid-cols-3 xs:grid-cols-2 gap-4 xl:px-[200px] md:px-[100px] xs:px-[50px] xl:text-[50px] md:text-[35px] xs:text-[15px]">
                            <div className="text-center ">
                                <div className="relative">
                                    <img
                                        src="/assets/speaker1.png"
                                        alt="Pembicara 1"
                                        className="w-full h-full object-cover bg-[#D9D9D9]"
                                    />
                                    <p className="absolute bottom-0 left-0 right-0 font-canopee text-[#A4161A] py-2 bg-white">
                                        Vera Itabiliana H.
                                    </p>
                                </div>
                            </div>
                            <div className="text-center ">
                                <div className="relative">
                                    <img
                                        src="/assets/speaker2.png"
                                        alt="Pembicara 1"
                                        className="w-full h-full object-cover bg-[#D9D9D9]"
                                    />
                                    <p className="absolute bottom-0 left-0 right-0 font-canopee text-[#A4161A] py-2 bg-white">
                                        Enrique Owen
                                    </p>
                                </div>
                            </div>
                            <div className="text-center ">
                                <div className="relative">
                                    <img
                                        src="/assets/speaker3.png"
                                        alt="Pembicara 1"
                                        className="w-full h-full object-cover bg-[#D9D9D9]"
                                    />
                                    <p className="absolute bottom-0 left-0 right-0 font-canopee text-[#A4161A] py-2 bg-white">
                                        Bayu Skak
                                    </p>
                                </div>
                            </div>
                            <div className="text-center ">
                                <div className="relative">
                                    <img
                                        src="/assets/speaker4.png"
                                        alt="Pembicara 1"
                                        className="w-full h-full object-cover bg-[#D9D9D9]"
                                    />
                                    <p className="absolute bottom-0 left-0 right-0 font-canopee text-[#A4161A] py-2 bg-white">
                                        Stephen Ng
                                    </p>
                                </div>
                            </div>
                            <div className="text-center ">
                                <div className="relative">
                                    <img
                                        src="/assets/speaker5.png"
                                        alt="Pembicara 1"
                                        className="w-full h-full object-cover bg-[#D9D9D9]"
                                    />
                                    <p className="absolute bottom-0 left-0 right-0 font-canopee text-[#A4161A] py-2 bg-white">
                                        Asisi Suhariyanto
                                    </p>
                                </div>
                            </div>
                            <div className="text-center ">
                                <div className="relative">
                                    <img
                                        src="/assets/speaker6.png"
                                        alt="Pembicara 1"
                                        className="w-full h-full object-cover bg-[#D9D9D9]"
                                    />
                                    <p className="absolute bottom-0 left-0 right-0 font-canopee text-[#A4161A] py-2 bg-white">
                                        Debby Reynata
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                    <h1 className="xl:text-[75px] md:text-[50px] xs:text-[25px] py-[30px] font-capuchetrial text-center text-[#FFFFFF]">
                        Student Speakers
                    </h1>
                    <>
                    <div className="flex justify-center">
                        <div className="grid xl:grid-cols-2 md:grid-cols-2 xs:grid-cols-2 gap-4 xl:px-[200px] md:px-[100px] xs:px-[50px] xl:text-[50px] md:text-[35px] xs:text-[15px]">

                            <div className="text-center">
                                <div className="relative">
                                    <img
                                        src="/assets/speaker7.png"
                                        alt="Pembicara 1"
                                        className="w-full h-full object-cover bg-[#D9D9D9]"
                                    />
                                    <p className="absolute bottom-0 left-0 right-0 font-canopee text-[#A4161A] py-2 bg-white">
                                        Nabila Putri S.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center ">
                                <div className="relative">
                                    <img
                                        src="/assets/speaker8.png"
                                        alt="Pembicara 1"
                                        className="w-full h-full object-cover bg-[#D9D9D9]"
                                    />
                                    <p className="absolute bottom-0 left-0 right-0 font-canopee text-[#A4161A] py-2 bg-white">
                                        Afrizal Naufal G.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    </>
                </div>
            </section>

            {/*Ticktets*/}
            <section>
                <div className="bg-cover bg-[#F0EFE5] bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] pt-[40px] pb-[90px] xl:bg-[url('/assets/bg-main-ev.jpg')] md:bg-[url('/assets/bg-main-ev-md.jpg')] xs:bg-[url('/assets/bg-main-ev-md.jpg')]">
                    <div className="text-center">
                        <h1 className="xl:text-[75px] md:text-[50px] xs:text-[25px] font-canopee text-[#A4161A]">
                            GRAB YOUR TICKET
                        </h1>
                    </div>
                    <div className="flex justify-center font-helvetica md:mt-[20px] xs:mt-[10px]">
                        <button
                            className="px-4 py-2 bg-[#981B1F] rounded-md text-[#F5F3F4] xs:text-[10px]"
                            onClick={() => router.visit("ticketing")}
                        >
                            GRAB YOUR TICKET
                        </button>
                    </div>
                </div>
            </section>

            {/* Supported By */}
            <section>
                <div className="bg-cover bg-[#F0EFE5] bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:pt-[30px] xs:pb-[90px] bg-white">
                <div className="flex justify-center">
                    <div>
                        <img
                        src="/assets/supported.png"
                        alt="Centered Image"
                        className="xl:max-w-[500px] md:max-w-[400px] xs:max-w-[250px] max-w-[250px] self-center"
                        />
                    </div>
                </div>
                </div>
            </section>
            <Navbar />
            <Footer />
        </>
    );
}

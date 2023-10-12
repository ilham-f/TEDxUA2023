import React, { useEffect, useState } from "react";
import SwiperAnimation from "../../components/swiperAnimaiton";
import CircularTextAnimation from "../../components/circularTextAnimation";
import "/resources/css/circleTextAnimation.css";
import "/resources/css/customScrollbar.css";
import "/resources/css/bottomNavBar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Head, router } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import * as Dialog from "@radix-ui/react-dialog";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function mainevent() {
    const [showCarousel, setShowCarousel] = useState(false);

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
            {/*Banner*/}
            <section>
                <div className="bg-cover bg-no-repeat min-h-full xl:bg-[url('../../../public/assets/bg-main1.jpg')] md:bg-[url('../../../public/assets/bg-main1-lg.jpg')] xs:bg-[url('../../../public/assets/bg-main1-xs.jpg')]">
                    <div className="bg-cover bg-no-repeat min-h-full xl:bg-[url('../../../public/assets/bg-main1.jpg')] md:bg-[url('../../../public/assets/bg-main1-lg.jpg')] xs:bg-[url('../../../public/assets/bg-main1-xs.jpg')]">
                        <div className="mx-auto xl:w-[924px] md:w-[768px] xs:w-[300px] xl:pt-[250px] md:pt-[200px] xs:pt-[25px] w450:pt-[100px]">
                            <h1 className="font-canopee xl:text-[150px] md:text-[130px] xs:text-[40px] text-custom11 text-center text-white uppercase">
                                <span className="block">IDEAS WORTH</span>
                                <span className="text-[#b93021]"> SPREAD</span>
                                <span>ING</span>
                            </h1>
                            <div className="mx-auto text-center xl:py-[50px] md:py-[50px] xs:py-[20px]">
                                <button
                                    type="button"
                                    className="border-[#b93021] hover:bg-[#787276] rounded font-helvetica text-white font-bold xl:px-[10px] xl:py-3 md:px-[10px] md:py-[5px] xs:px-[5px] xs:py-[2px] xl:border-[2px] md:border-[2px] xs:border-[1px] xl:text-[20px] md:text-[18px] xs:text-[8px]"
                                >
                                    UPCOMING EVENTS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <CircularTextAnimation />
                </button>
                </div>
            </section>
            {/*Main Event*/}
            <section>
                <div className="bg-cover bg-[#F0EFE5] bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[15px] xl:bg-[url('../../../public/assets/bg-main-ev.jpg')] md:bg-[url('../../../public/assets/bg-main-ev-md.jpg')] xs:bg-[url('../../../public/assets/bg-main-ev-md.jpg')]">
                    <div className="text-center">
                        <h1 className="xl:text-[75px] md:text-[50px] xs:text-[25px] font-capuchetrial">
                            MAIN EVENT : <br />{" "}
                            <span className="text-[#A4161A]"> TEDx</span>
                            Universitas Airlangga{" "}
                        </h1>
                        <p className="xl:text-[28px] md:text-[25px] xs:text-[10px] xl:px-[250px] md:px-[50px] xs:px-[40px] font-migra">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div class="flex gap-[20px] justify-center font-helvetica xl:py-[30px] md:py-[20px] xs:py-[10px]">
                        <button class="xl:px-[4px] xl:py-[2px] md:px-[5px] md:py-[1px] md:text-[15px] xs:px-[2px] xs:py-[0px] xs:text-[8px] bg-[#F5F3F4] text-[#A3161A] border-2 border-[#A3161A] rounded-md">
                            RESERVE SPOT
                        </button>
                        {/* <button class="xl:px-[4px] xl:py-[2px] md:px-[5px] md:py-[1px] md:text-[15px] xs:px-[2px] xs:py-[0px] xs:text-[8px] bg-[#981B1F] rounded-md text-[#F5F3F4]">
                            LEARN MORE
                        </button> */}
                    </div>
                </div>
            </section>

            {/*SubEvent*/}
            <section>
                <div className="bg-cover bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[15px] xl:bg-[url('../../../public/assets/bg-sub-event.jpg')] md:bg-[url('../../../public/assets/bg-sub-event.jpg')] xs:bg-[url('../../../public/assets/bg-sub-event.jpg')]">
                    <div className="text-center text-[#FFFFFF] ">
                        <h1 className="xl:text-[75px] md:text-[50px] xs:text-[25px] font-capuchetrial">
                            SUB EVENT LINE UP
                        </h1>
                    </div>
                    <SwiperAnimation />
                </div>
            </section>

            {/*Speakers*/}
            <section>
                <div className="bg-cover bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[15px] bg-[#A4161A]">
                    <img
                        className="absolute xl:w-[500px] md:w-[300px] xs:w-[150px]"
                        src="/assets/x-left.png"
                        alt=""
                    />
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
                                            <p className="font-canopee text-white py-2 text-center">
                                                ELENA
                                            </p>
                                        </div>
                                        <div className="w-1/2 ml-2">
                                            <img
                                                className="w-full h-full object-cover bg-[#D9D9D9]"
                                                src="/assets/speaker.png"
                                                alt="Pembicara 2"
                                            />
                                            <p className="font-canopee text-white py-2 text-center">
                                                Speaker 2
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center px-[20px]">
                                        <div className="w-1/2 mr-2">
                                            <img
                                                className="w-full h-full object-cover bg-[#D9D9D9]"
                                                src="/assets/speaker.png"
                                                alt="Pembicara 1"
                                            />
                                            <p className="font-canopee text-white py-2 text-center">
                                                ELENA
                                            </p>
                                        </div>
                                        <div className="w-1/2 ml-2">
                                            <img
                                                className="w-full h-full object-cover bg-[#D9D9D9]"
                                                src="/assets/speaker.png"
                                                alt="Pembicara 2"
                                            />
                                            <p className="font-canopee text-white py-2 text-center">
                                                Speaker 2
                                            </p>
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
                                        <img
                                            src="/assets/speaker.png"
                                            alt="Pembicara 1"
                                            class="w-full h-full object-cover bg-[#D9D9D9]"
                                        />
                                        <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">
                                            ELENA
                                        </p>
                                    </div>
                                </div>
                                <div class="text-center ">
                                    <div class="relative">
                                        <img
                                            src="/assets/speaker.png"
                                            alt="Pembicara 1"
                                            class="w-full h-full object-cover bg-[#D9D9D9]"
                                        />
                                        <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">
                                            ELENA
                                        </p>
                                    </div>
                                </div>
                                <div class="text-center ">
                                    <div class="relative">
                                        <img
                                            src="/assets/speaker.png"
                                            alt="Pembicara 1"
                                            class="w-full h-full object-cover bg-[#D9D9D9]"
                                        />
                                        <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">
                                            ELENA
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <img
                                    className="absolute xl:w-[500px] md:w-[300px] xs:w-[125px]"
                                    src="/assets/x-right.png"
                                    alt=""
                                />
                            </div>
                            <div class="grid grid-cols-3 pt-[15px] gap-4 xl:px-[200px] md:px-[100px] xs:px-[50px] xl:text-[50px] md:text-[35px] xs:text-[15px]">
                                <div class="text-center ">
                                    <div class="relative">
                                        <img
                                            src="/assets/speaker.png"
                                            alt="Pembicara 1"
                                            class="w-full h-full object-cover bg-[#D9D9D9]"
                                        />
                                        <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">
                                            ELENA
                                        </p>
                                    </div>
                                </div>
                                <div class="text-center ">
                                    <div class="relative">
                                        <img
                                            src="/assets/speaker.png"
                                            alt="Pembicara 1"
                                            class="w-full h-full object-cover bg-[#D9D9D9]"
                                        />
                                        <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">
                                            ELENA
                                        </p>
                                    </div>
                                </div>
                                <div class="text-center ">
                                    <div class="relative">
                                        <img
                                            src="/assets/speaker.png"
                                            alt="Pembicara 1"
                                            class="w-full h-full object-cover bg-[#D9D9D9]"
                                        />
                                        <p class="absolute bottom-0 left-0 right-0 font-canopee text-white py-2">
                                            ELENA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/*Ticktets*/}
            <section>
                <div className="bg-cover bg-[#F0EFE5] bg-no-repeat min-h-full xl:py-[50px] md:py-[30px] xs:py-[40px] xl:bg-[url('../../../public/assets/bg-main-ev.jpg')] md:bg-[url('../../../public/assets/bg-main-ev-md.jpg')] xs:bg-[url('../../../public/assets/bg-main-ev-md.jpg')]">
                    <div className="text-center">
                        <h1 className="xl:text-[75px] md:text-[50px] xs:text-[25px] font-canopee text-[#A4161A]">
                            GRAB YOUR TICKET
                        </h1>
                    </div>
                    <div class="flex justify-center font-helvetica md:mt-[20px] xs:mt-[10px]">
                        <button class="px-4 py-2 bg-[#981B1F] rounded-md text-[#F5F3F4] xs:text-[10px]">
                            GRAB YOUR TICKET
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
            <Navbar />
          </>
    );
}

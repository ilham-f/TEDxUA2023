import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Gallery(){
    return (
        <>
        <div className="bg-cover bg-no-repeat min-h-full bg-[url('/assets/bg-gallery.jpg')]">
        <Navbar/>
            <section>
                <div className="relative">
                        <div className="absolute z-20 xl:top-[300px] xl:left-[-50px] lg:top-[300px] lg:left-[20px] md:top-[150px] md:left-[0px] w450:top-[90px] w450:left-[-20px] xs:top-[100px] xs:left-[-15px]">
                            <img src="/assets/photo1.png" alt="" className="xl:w-[550px] lg:w-[300px] md:w-[250px] w450:w-[150px] xs:w-[130px] "/>
                        </div>
                        <div className="absolute z-10 xl:top-[20px] xl:left-[0px] lg:top-[150px] lg:left-[50px] md:top-[30px] md:left-[30px] w450:top-[20px] w450:left-[0px] xs:top-[30px] xs:left-0">
                            <img src="/assets/photo2.png" alt="" className="xl:w-[600px] lg:w-[300px] md:w-[250px] w450:w-[150px] xs:w-[130px] "/>
                        </div>
                    <div className="relative flex w-full justify-end items-center">
                        <img src="/assets/paper.png" alt="" class="w-screen lg:pt-[250px] md:pt-[150px] xs:pt-[75px] md:px-[100px] xs:px-[30px]"/>
                    </div>
                    <div className="absolute flex items-center xl:top-[400px] xl:right-[250px] lg:top-1/2 lg:right-[225px] md:top-1/2 md:right-[200px] xs:top-1/2 xs:right-[75px]">
                        <h1 class=" font-capuchetrial text-[#A4161A] xl:text-[180px] lg:text-[115px] md:text-[75px] w450:text-[65px] xs:text-[45px]">
                        GALLERY
                        </h1>
                    </div>
            </div>
            </section>

                <div className="relative xl:bottom-[-50px] lg:bottom-[-50px] md:bottom-[-40px] xs:bottom-[-15px] w-full">
                <div className="relative flex justify-center items-center">
                    <div className="absolute bottom-[-10px] xs:bottom-0">
                        <img src="/assets/paper-person.png" alt="" className="xl:w-48 xl:h-48 lg:w-44 lg:h-44 md:w-28 md:h-28 xs:w-16 xs:h-16" />
                    </div>
                        <img src="/assets/vector.png" alt="" className="w-full"/>
                </div>
                </div>
                <div className="w-full h-full bg-green-500 bg-opacity-50 lg:pt-36 xs:pt-10">
            <section>
            <div
                class="embed-responsive embed-responsive-16by9 relative rounded rounded-[25px] mx-auto xl:w-[1200px] xl:h-[600px] lg:w-[850px] lg:h-[400px] md:w-[650px] md:h-[350px] w450:w-[400px] w450:h-[200px] xs:w-[310px] xs:h-[180px] overflow-hidden">
                <iframe
                    class="embed-responsive-item-full w-full h-full"
                    src="https://www.youtube.com/embed/vNsi243Oa_g"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen>
                    </iframe>
                </div>
            </section>

            <section>
            <div className="relative flex grid grid-cols-4 xl:px-[200px] lg:px-[150px] md:px-[40px] xs:px-[40px] md:gap-8 xs:gap-2 xl:py-[100px] lg:py-[75px] md:py-[50px] xs:py-[25px]">
                <div className="bg-white w-full col-span-3 h-full">
                    <div className="relative">
                        <img src="/assets/gallery/IMG_8271.JPG" alt="" className="mx-auto items-center justify-center w-full md:p-[20px] xs:p-[10px]"/>
                        <p className="font-gooddog text-center xl:px-[50px] lg:px-[40px] md:px-[30px] xs:px-[10px] xl:pb-[20px] lg:pb-[15px] md:pb-[10px] xs:pb-[5px] xl:text-[30px] lg:text-[24px] md:text-[20px] xs:text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                    <div className="absolute xl:left-[150px] lg:left-[100px] md:left-[20px] xs:left-7 bottom-0">
                        <img src="/assets/logoX1left.png" alt=""  className="xl:w-[200px] lg:w-[150px] md:w-[100px] xs:w-[50px]"/>
                    </div>
                    <div className="grid grid-rows-3 gap-1">
                        <div className="bg-white w-full h-full md:py-[10px] xs:py-[2px]">
                        <img src="/assets/gallery/DSC08308.JPG" alt="" className="mx-auto items-center justify-center w-full md:px-[10px] xs:px-[2px] "/>
                        </div>
                        <div className="bg-white w-full h-full md:py-[10px] xs:py-[2px]">
                        <img src="/assets/gallery/IMG_8386.JPG" alt="" className="mx-auto items-center justify-center w-full md:px-[10px] xs:px-[2px]"/>
                        </div>
                        <div className="bg-white w-full h-full md:py-[10px] xs:py-[2px]">
                        <img src="/assets/gallery/IMG_8474.JPG" alt="" className="mx-auto items-center justify-center w-full md:px-[10px] xs:px-[2px]"/>
                        </div>
                    </div>
            </div>
            </section>
                </div>
        </div>
        <Footer/>
        </>
    );
}
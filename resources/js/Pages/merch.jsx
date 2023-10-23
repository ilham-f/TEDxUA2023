import React from "react";

import { Head, router } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import * as Dialog from "@radix-ui/react-dialog";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductMerch from "../../components/produkMerch";
import MerchBundleAnimation from "../../components/MerchBundleAnimation";

export default function Merch() {
    return (
        <>
        <div className="bg-cover bg-no-repeat min-h-full relative xl:bg-[url('../../../assets/bg-merch.jpg')] md:bg-[url('../../../assets/bg-merch.jpg')] xs:bg-[url('../../../assets/bg-merch.jpg')]">
          <div className="flex">
            <div className="absolute flex">
              <img
                className="w-full xl:w-[500px] md:w-[300px] xs:w-[200px]"
                src="/assets/flower1.png"
                alt=""
              />
            </div>
            <div className="flex w-full pt-[900px] xl:pt-[100px] md:pt-[80px] xs:pt-[20px]">
              <h1 className="font-capuchetrial text-white xl:text-[100px] md:text-[90px] xs:text-[40px] mx-auto">MERCHANDISE</h1>
            </div>
          </div>


    <div className="absolute inset-x-0 flex items-center justify-center z-0">
      <img
        className="xl:w-[500px] md:w-[450px] xs:w-[200px] mx-auto"
        src="/assets/people.png"
        alt=""
      />
    </div>

    <div className="relative mx-auto bg-white xl:w-[900px] lg:w-[700px] md:w-[600px] xs:w-[300px] md:rounded-[50px] xs:rounded-[15px] xl:mt-[250px] md:mt-[200px] xs:mt-[100px] z-20 md:py-[30px] xs:py-[15px]">
    <div className="">
      <h1 className="text-center font-capuchetrial text-black xl:text-[60px] lg:text-[50px] md:text-[40px] xs:text-[25px]">"FIND YOUR TRUE SELF"</h1>
    </div>
    <div className="grid grid-cols-2 items-center xl:gap-44 lg:gap-4 md:gap-2 xl:px-[100px] lg:px-[80px] md:px-[20px] xs:px-[10px]">
      <div>
        <h2 className="text-[#A4161A] font-capuchetrial lg:text-[40px] md:text-[40px] xs:text-[20px]">Hello There!</h2>
        <p className="font-migra xl:text-[25px] md:text-[25px] xs:text-[10px] md:px-[30px] xs:px-[15px]">
          Take a Quiz To…
        <span className="block">
        Dig The Gems Out of You!</span>
        </p>
        <div className="text-center md:py-[30px] xs:py-[15px]">
        <span className="inline-block bg-[#A4161A] rounded-xl text-[#FFFFFF]">
          <button onClick={() => router.visit('/quiz-merch')} type="button" className="font-capuchetrial xl:text-[25px] lg:text-[25px] xs:text-[10px] md:px-[50px] xs:px-[25px] md:py-[10px] xs:py-[5px]">
            Take Quiz
          </button>
        </span>
      </div>

      </div>
      <div className="relative">
        <img className="w-full" src="/assets/rollfilm.png" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="w-full md:px-10 xs:px-5" src="/assets/question-mark.png" alt="" />
        </div>
      </div>
    </div>
  </div>

    <div className="flex w-full">
      <h1 className="font-capuchetrial text-white xl:text-[125px] lg:text-[100px] md:text-[80px] xs:text-[40px] mx-auto pt-[50px]">OUR PRODUCT</h1>
    </div>
    <div className="text-center md:py-[30px] xs:py-[15px] ">
        <span className="inline-block bg-[#A4161A] rounded-xl text-[#FFFFFF] border-2 border-[#ffffff] ">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoAuJ69u5bm5QDL2ozXuziyarXSYqe7MvMLbgVq4jPe6cFtQ/viewform" target="_blank">
          <button type="button" className="font-capuchetrial xl:text-[35px] lg:text-[35px] xs:text-[30px] md:px-[50px] xs:px-[25px] md:py-[10px] xs:py-[5px]">
            Buy Now
          </button>
          </a>
        </span>
      </div>

    <MerchBundleAnimation/>
    <ProductMerch />
  </div>
        <Footer />
        <Navbar />
        </>
    );
}

import React from "react";

import { Head, router } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import * as Dialog from "@radix-ui/react-dialog";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductMerch from "../../components/produkMerch";

export default function Merch() {
    return (
        <>
        <div className="bg-cover bg-no-repeat min-h-full relative xl:bg-[url('../../../assets/bg-merch.jpg')] md:bg-[url('../../../public/assets/bg-merch.jpg')] xs:bg-[url('../../../public/assets/bg-merch.jpg')]">
          <div className="flex">
            <div className="absolute flex">
              <img
                className="w-full xl:w-[500px] md:w-[300px] xs:w-[200px]"
                src="/assets/flower1.png"
                alt=""
              />
            </div>
            <div className="flex w-full pt-[100px]">
              <h1 className="font-capuchetrial text-white xl:text-[125px] md:text-[100px] xs:text-[40px] mx-auto">MERCHANDISE</h1>
            </div>
          </div>


    <div className="absolute inset-x-0 flex items-center justify-center z-0">
      <img
        className="xl:w-[600px] md:w-[450px] xs:w-[200px] mx-auto"
        src="/assets/people.png"
        alt=""
      />
    </div>

    <div className="relative mx-auto bg-white xl:w-[1200px] lg:w-[900px] md:w-[600px] xs:w-[300px] md:rounded-[50px] xs:rounded-[15px] xl:mt-[250px] md:mt-[200px] xs:mt-[100px] z-20 md:py-[30px] xs:py-[15px]">
    <div className="">
      <h1 className="text-center font-capuchetrial text-black xl:text-[80px] lg:text-[60px] md:text-[40px] xs:text-[25px]">"FIND YOUR TRUE SELF"</h1>
    </div>
    <div className="flex grid grid-cols-2 items-center xl:gap-44 lg:gap-4 md:gap-2 xl:px-[100px] lg:px-[80px] md:px-[20px] xs:px-[10px]">
      <div>
        <h2 className="text-[#A4161A] font-capuchetrial lg:text-[60px] md:text-[40px] xs:text-[20px]">Hello There!</h2>
        <p className="font-migra xl:text-[35px] md:text-[25px] xs:text-[10px] md:px-[30px] xs:px-[15px]">
          Take a Quiz To…
        <span className="block">
        Dig The Gems Out of You!</span>
        </p>
        <div className="text-center md:py-[30px] xs:py-[15px]">
        <span className="inline-block bg-[#A4161A] rounded-xl text-[#FFFFFF]">
          <a href="/quizMerch">
            <button type="button" className="font-capuchetrial xl:text-[35px] lg:text-[25px] xs:text-[10px] md:px-[50px] xs:px-[25px] md:py-[10px] xs:py-[5px]">
                Take Quiz
            </button>
          </a>
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
    <div className="flex grid grid-cols-2 xl:gap-44 lg:gap-8 md:gap-4 xs:gap-4 md:px-10 xs:px-2">
      <div className="relative">
        <img className="w-full" src="/assets/bundle-product1.png" alt="" />
        <div className="absolute top-0 right-0">
          <img className="xl:w-[300px] lg:w-[200px] md:w-[180px] xs:w-[100px]" src="/assets/bundle-price.png" alt="" />
          <div className="absolute inset-0 flex items-center justify-center text-black font-extrabold font-migra md:text-[30px] xs:text-[12px]">
            100K
          </div>
        </div>
      </div>
      <div className="text-white xl:text-[35px] lg:text-[25px] md:text-[20px] xs:text-[10px] font-migra font-extrabold">
        <h1 className="font-capuchetrial lg:text-[75px] md:text-[55px] xs:text-[20px] text-white">Bundling 1</h1>
        <h2>apa aja yang kamu dapatkan?</h2>
        <ul>
          <li>• 1 Totebag</li>
          <li>• 1 Tumbler</li>
          <li>• 1 Car</li>
          <li>• 1 Helicopter</li>
        </ul>
        <div className="text-center py-[30px]">
          <span className="inline-block bg-[#A4161A] rounded-full text-[#FFFFFF]">
            <button className="font-capuchetrial lg:text-[30px] md:text-[20px] xs:text-[10px] md:px-[100px] xs:px-[40px] md:py-[10px] xs:py-[5px]">
              ORDER NOW
            </button>
          </span>
        </div>
      </div>
    </div>
      <ProductMerch />

  </div>


        <Footer />
        <Navbar />
        </>
    );
}

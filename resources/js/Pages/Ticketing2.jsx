import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Ticketing2() {
  return (
    <>
        <Head title="Ticketing"/>
        <div className="min-h-screen bg-[url('/assets/bg-ticketing.jpg')] grid justify-items-center pt-10 md:pt-44 pb-20">
            <div className="w-[350px] md:w-[700px] lg:w-[835px] lg:mb-32 mb-12">
                <p className="font-capuchetrial text-white text-center lg:text-custom13 md:text-custom14 text-custom4">
                    FILL THIS FORM
                </p>
            </div>
            <form action="">
                <div className="flex flex-col bg-white p-8 w-[370px] md:w-[700px] bg-[url('/assets/texture-paper.jpg')] rounded-lg">
                        <label htmlFor="name" className="font-migraXB text-[#A4161A] text-[18px] md:text-[28px]">Full Name</label>
                        <input type="text" name="name" id="name" className="p-3 md:p-4 bg-[#979797] rounded-2xl mb-5"/>
                        <label htmlFor="email" className="font-migraXB text-[#A4161A] text-[18px] md:text-[28px]">Email Address</label>
                        <input type="text" name="email" id="email" className="p-3 md:p-4 bg-[#979797] rounded-2xl mb-5"/>
                        <label htmlFor="phone" className="font-migraXB text-[#A4161A] text-[18px] md:text-[28px]">Phone Number</label>
                        <input type="text" name="phone" id="phone" className="p-3 md:p-4 bg-[#979797] rounded-2xl mb-5"/>
                        <label htmlFor="line" className="font-migraXB text-[#A4161A] text-[18px] md:text-[28px]">ID Line</label>
                        <input type="text" name="line" id="line" className="p-3 md:p-4 bg-[#979797] rounded-2xl mb-5"/>
                        <div className="flex justify-center">
                            <button className="font-migraXB text-white bg-[#A4161A] px-12 text-[24px] md:text-custom8 rounded-[96px] py-1">
                                Submit
                            </button>
                        </div>
                </div>
            </form>
        </div>
        <Navbar />
        <Footer />
    </>
  )
}

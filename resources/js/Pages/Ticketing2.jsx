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
        <div className="min-h-screen bg-[url('../../../public/assets/bg-ticketing.jpg')] grid justify-items-center pt-44 pb-20">
            <div className="w-[835px] mb-32">
                <p className="font-capuchetrial text-white text-center text-custom13">
                    FILL THIS FORM
                </p>
            </div>
            <form action="">
                <div className="flex flex-col bg-white p-8 w-[700px] bg-[url('../../../public/assets/texture-paper.jpg')] rounded-lg">
                        <label htmlFor="name" className="font-migraXB text-[#A4161A] text-[28px]">Full Name</label>
                        <input type="text" name="name" id="name" className="p-4 bg-[#979797] rounded-2xl mb-5"/>
                        <label htmlFor="email" className="font-migraXB text-[#A4161A] text-[28px]">Email Address</label>
                        <input type="text" name="email" id="email" className="p-4 bg-[#979797] rounded-2xl mb-5"/>
                        <label htmlFor="phone" className="font-migraXB text-[#A4161A] text-[28px]">Phone Number</label>
                        <input type="text" name="phone" id="phone" className="p-4 bg-[#979797] rounded-2xl mb-5"/>
                        <label htmlFor="line" className="font-migraXB text-[#A4161A] text-[28px]">ID Line</label>
                        <input type="text" name="line" id="line" className="p-4 bg-[#979797] rounded-2xl mb-5"/>
                        <div className="flex justify-center">
                            <button className="font-migraXB text-white bg-[#A4161A] px-12 text-custom8 rounded-[96px] w-[50%] py-1">
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

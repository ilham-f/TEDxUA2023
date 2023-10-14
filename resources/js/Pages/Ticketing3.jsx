import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Ticketing3() {
    return (
        <>
            <Head title="Ticketing" />
            <div className="min-h-screen bg-[url('../../../public/assets/bg-ticketing.jpg')] grid justify-items-center pt-44 pb-20">
                <div className="w-[835px] mb-32">
                    <p className="font-capuchetrial text-white text-center text-custom13">
                        MY TICKET
                    </p>
                </div>

                <form action="">
                    <div className="">
                        <input type="file" placeholder="Upload Your Payment Receipt Here"  className="text-black"/>
                    </div>
                </form>
            </div>
            <Footer />
            <Navbar />
        </>
    );
}

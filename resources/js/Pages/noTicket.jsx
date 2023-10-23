import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Ticketing() {

    return (
        <>
            <Head title="Ticketing"/>
            <div className="min-h-screen bg-[url('/assets/bg-ticketing.jpg')] grid justify-items-center pt-10 md:pt-44 pb-20">
            <div className="lg:w-[835px] md:w-[700px] lg:mb-32 mb-12">
                <p className="font-capuchetrial text-white text-center lg:text-custom13 md:text-custom14 text-custom4">
                    No Ticket Available Currently :')
                </p>
            </div>
            </div>
            <Footer />
            <Navbar />
        </>
    );
}

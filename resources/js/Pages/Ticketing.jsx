import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Ticketing({tickets}) {

    // console.log(tickets);
    const [selectedTicket, setSelectedTicket] = useState(tickets[0]);
    console.log(selectedTicket);

    return (
        <>
            <Head title="Ticketing"/>
            <div className="min-h-screen bg-[url('/assets/bg-ticketing.jpg')] grid justify-items-center pt-10 md:pt-44 pb-20">
                <div className="lg:w-[835px] md:w-[700px] lg:mb-32 mb-12">
                    <p className="font-capuchetrial text-white text-center lg:text-custom13 md:text-custom14 text-custom4">
                        GRAB YOUR TICKET!
                    </p>
                </div>
                <div className="bg-[url('/assets/texture-golf.jpg')] bg-cover bg-no-repeat p-7 md:p-0 w-[320px] md:w-[700px] md:h-[350px] lg:w-[1290px] lg:h-[530px] rounded-[72px] mb-10 md:mb-24 items-center flex-col flex md:items-center md:flex-row">
                    <div className="flex flex-wrap content-center justify-center md:w-1/2">
                        <img
                            src="/assets/bundling-ticket.png"
                            alt="ticket"
                            className="lg:w-[585px] lg:h-[440px] md:w-full md:h-full"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="font-capuchetrial text-[24px] md:text-[30px] lg:text-[48px] text-[#A4161A]">
                            {selectedTicket.name}
                        </p>
                        <p className="font-migraXB font-black text-[20px] md:text-[28px] lg:text-[40px] text-[#A4161A]">
                            $199,99
                        </p>
                        <p className="font-migra text-[18px] md:text-[24px] lg:text-[36px] text-[#000]">
                            Teddy Bear
                        </p>
                        <p className="font-migra text-[18px] md:text-[24px] lg:text-[36px] text-[#000]">
                            Tickets
                        </p>
                        <p className="font-migra text-[18px] md:text-[24px] lg:text-[36px] text-[#000]">
                            T Shirt
                        </p>
                    </div>
                </div>
                <div>
                    <RadioGroup.Root
                        className="flex flex-row gap-x-3 gap-y-5 md:gap-y-10 flex-wrap justify-center"
                        defaultValue={1}
                        aria-label="View density"
                        onValueChange={(value) => setSelectedTicket(tickets[value-1])}
                    >
                        {tickets.map((ticket, index) => (
                            <div className="flex items-center" key={index}>
                                <RadioGroup.Item
                                    className="bg-[#A4161A] md:bg-transparent md:rounded-none rounded-lg md:bg-[url('/assets/tickets-red.png')] w-[100px] h-[70px] md:w-[300px] md:h-[80px] lg:w-[412px] lg:h-[104px] bg-contain bg-no-repeat"
                                    value={ticket.id}
                                    id={ticket.id}
                                >
                                    <p className="font-canopee text-white text-custom10 md:text-[28px] lg:text-[35px]">
                                        {ticket.name}
                                    </p>
                                <RadioGroup.Indicator className="flex items-center justify-center relative after:block after:w-[50px] md:after:w-[111px] after:h-[2px] md:after:h-[5px] after:rounded-2xl after:bg-white" />
                                </RadioGroup.Item>
                            </div>
                        ))}
                    </RadioGroup.Root>
                </div>
                <div className="mt-16 md:mt-36">
                    <button className="font-canopee text-white bg-[#A4161A] px-12 text-[36px] md:text-custom4 lg:text-custom14 border-4 border-white rounded-[96px]">
                        NEXT
                    </button>
                </div>
            </div>
            <Footer />
            <Navbar />
        </>
    );
}

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
            <div className="min-h-screen bg-[url('../../../public/assets/bg-ticketing.jpg')] grid justify-items-center pt-44 pb-20">
                <div className="w-[835px] mb-32">
                    <p className="font-capuchetrial text-white text-center text-custom13">
                        GRAB YOUR TICKET!
                    </p>
                </div>
                <div className="bg-[url('../../../public/assets/texture-golf.jpg')] bg-cover bg-no-repeat w-[1290px] h-[530px] rounded-[72px] mb-24 flex items-center">
                    <div className="flex flex-wrap content-center justify-center w-1/2">
                        <img
                            src="/assets/bundling-ticket.png"
                            alt="ticket"
                            className="w-[585px] h-[440px]"
                        />
                    </div>
                    <div className="w-1/2">
                        <p className="font-capuchetrial text-[48px] text-[#A4161A]">
                            {selectedTicket.name}
                        </p>
                        <p className="font-migraXB font-black text-[40px] text-[#A4161A]">
                            $199,99
                        </p>
                        <p className="font-migra text-[36px] text-[#000]">
                            Teddy Bear
                        </p>
                        <p className="font-migra text-[36px] text-[#000]">
                            Tickets
                        </p>
                        <p className="font-migra text-[36px] text-[#000]">
                            T Shirt
                        </p>
                    </div>
                </div>
                <div>
                    <RadioGroup.Root
                        className="flex flex-row gap-x-3 gap-y-10 flex-wrap justify-center"
                        defaultValue={1}
                        aria-label="View density"
                        onValueChange={(value) => setSelectedTicket(tickets[value-1])}
                    >
                        {tickets.map((ticket, index) => (
                            <div className="flex items-center" key={index}>
                                <RadioGroup.Item
                                    className="bg-[url('../../../public/assets/tickets-red.png')] w-[412px] h-[104px] bg-contain"
                                    value={ticket.id}
                                    id={ticket.id}
                                >
                                    <p className="font-canopee text-white text-[35px]">
                                        {ticket.name}
                                    </p>
                                <RadioGroup.Indicator className="flex items-center justify-center relative after:block after:w-[111px] after:h-[5px] after:rounded-2xl after:bg-white" />
                                </RadioGroup.Item>
                            </div>
                        ))}
                    </RadioGroup.Root>
                </div>
                <div className="mt-36">
                    <button className="font-canopee text-white bg-[#A4161A] px-12 text-custom14 border-4 border-white rounded-[96px]">
                        NEXT
                    </button>
                </div>
            </div>
            <Footer />
            <Navbar />
        </>
    );
}

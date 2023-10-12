import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function QuizMerch(){
    return(
        <>
        <div className="bg-cover bg-no-repeat min-h-full relative xl:bg-[url('../../../public/assets/bg-merch.jpg')] md:bg-[url('../../../public/assets/bg-merch.jpg')] xs:bg-[url('../../../public/assets/bg-merch.jpg')]">
            <div className="bg-white mx-auto rounded-lg w-[1200px] jsutify-center items-center text-center">
                <h1 className="text-[80px] font-capuchetrial text-[#A4161A]">"Find Your True Self"</h1>
            </div>

          <Navbar />
          <Footer />
        </div>
        </>
    )
}
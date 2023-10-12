import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DetailProduk(){
    return (
        <>
            <img src="/assets/acc-detailproduk1.png" alt="" className="absolute z-0" />
            <div className="lg:px-[100px] lg:py-[50px] md:px-[50px] md:py-[25px] xs:px-[20px] xs:py-[35px] bg-cover bg-no-repeat min-h-full bg-[url('../../../public/assets/bg-detailproduk.jpg')]">
                <div className="relative z-10 grid grid-cols-4 md:gap-8 xs:gap-2 rounded-lg bg-[#A4161A] w-full h-full p-[25px]">
                    <div className="col-span-4 flex rounded-lg relative mx-auto bg-[#99A252] w-full h-full">
                        <div className="absolute md:top-[75px] md:left-[30px] xs:top-[30px] xs:left-[5px]">
                            <img src="/assets/arrow-left.png" alt="" className="px-[20px] lg:h-[30px] md:h-[20px] xs:h-[10px] z-60"/>
                        </div>
                        <div className="absolute bottom-0">
                            <img src="/assets/flower4.png" alt="" className="md:px-[20px] xl:h-[300px] lg:h-[200px] md:h-[150px] xs:h-[80px] z-60"/>
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <img src="/assets/flower2.png" alt="" className="md:px-[10px] xl:h-[250px] lg:h-[200px] md:h-[150px] xs:h-[60px] z-60"/>
                        </div>
                        <div>
                            <img src="/assets/bg-price.png" alt="" className='absolute right-1/4 top-1/4 xl:w-[150px] lg:w-[125px] md:w-[100px] xs:w-[50px] z-40'/>
                            <div className="absolute z-50 xl:top-[200px] xl:right-[350px] lg:top-[165px] lg:right-[235px] md:top-[135px] md:right-[190px] xs:top-[66px] xs:right-[100px] text-black font-extrabold font-migra xl:text-[30px] lg:text-[25px] md:text-[18px] xs:text-[10px]">
                                <p>70K</p>
                            </div>
                        </div>
                        <img className="relative mx-auto xl:h-[600px] lg:h-[500px] md:h-[400px] xs:h-[200px] xl:px-[250px] lg:px-[200px] md:px-[150px] xl:py-[25px] md:py-[50px] xs:py-[10px]" src="/assets/teddybear.png" alt="" />
                    </div>
                    <div className="rounded-lg relative mx-auto bg-[#99A252] w-full h-full">
                        <img className="relative mx-auto lg:py-[20px] md:py-[15px] xl:h-[200px] lg:h-[150px] md:h-[100px] xs:h-[50px]" src="/assets/teddybear.png" alt="" />
                    </div>
                    <div className="rounded-lg relative mx-auto bg-[#99A252] w-full h-full">
                        <img className="relative mx-auto lg:py-[20px] md:py-[15px] xl:h-[200px] lg:h-[150px] md:h-[100px] xs:h-[50px]" src="/assets/doll1.png" alt="" />
                    </div>
                    <div className="rounded-lg relative mx-auto bg-[#99A252] w-full h-full">
                        <img className="relative mx-auto lg:py-[20px] md:py-[15px] xl:h-[200px] lg:h-[150px] md:h-[100px] xs:h-[50px]" src="/assets/doll2.png" alt="" />
                    </div>
                    <div className="rounded-lg relative mx-auto bg-[#99A252] w-full h-full">
                        <img className="relative mx-auto lg:py-[20px] md:py-[15px] xl:h-[200px] lg:h-[150px] md:h-[100px] xs:h-[50px]" src="/assets/doll3.png" alt="" />
                    </div>
                </div>
                <div className="font-capuchetrial xl:text-[100px] lg:text-[80px] md:text-[60px] xs:text-[40px]">
                    <h1 className="text-[#99A252]">
                        Teddy Bear
                    </h1>
                    <ul className="lg:pl-[100px] md:pl-[50px] xs:pl-[30px] lg:text-[35px] md:text-[20px] xs:text-[15px] text-white font-migra">
                    <li><span className="md:text-[50px]">•</span> Warna : Coklat, Kuning., Ungu, Coklat Muda</li>
                    <li><span className="md:text-[50px]">•</span> Bahan : Katun</li>
                    <li><span className="md:text-[50px]">•</span> Ukuran : 20cm x 30cm</li>
                    </ul>
                </div>
                    <div className="text-center py-[50px]">
                    <span className="bg-[#A4161A] rounded-full text-[#FFFFFF] lg:px-[100px] md:px-[80px] xs:px-[50px] lg:py-[20px] md:py-[15px] xs:py-[10px]">
                    <button type="button" className="font-capuchetrial lg:text-[30px] xs:text-[20px]">
                        Buy Now
                    </button>
                    </span>
                </div>
            </div>

            <Navbar/>
            <Footer/>
        </>
    );
}
import React from 'react';
import Footer from '../../components/Footer';


const QuizMerchAfter = ({ mostSelectedBundle }) => {
    return (
        <>
        <div className="xl:px-[100px] lg:px-[50px] lg:px-[40px] xs:px-[20px] py-[50px] bg-cover bg-no-repeat md:h-full xs:h-screen relative xl:bg-[url('/assets/bg-afterquiz.jpg')] xs:bg-[url('/assets/bg-afterquiz.jpg')]">
            <h1 className='text-white xl:text-[100px] lg:text-[80px] md:text-[60px] xs:text-[30px] text-center font-capuchetrial'>"FIND YOUR TRUE SELF"</h1>
            <h2 className='text-[#E79B08] xl:text-[45px] lg:text-[35px] md:text-[25px] xs:text-[20px] text-center font-migra font-bold'>Thank you for taking the quiz, based on your answer <span className='block'>you are a ......</span></h2>
            <div className='grid flex grid-cols-2 gap-4 justify-center items-center'>
                <img className='xl:px-10 h-full' src={mostSelectedBundle.image1} alt="Gambar Bundling" />
                <img className='xl:px-10 h-full' src={mostSelectedBundle.image2} alt="Gambar Bundling" />
            </div>

            <p className='text-[#99A252] xl:text-[100px] lg:text-[80px] md:text-[60px] xs:text-[30px] text-center font-capuchetrial p-10'>{mostSelectedBundle.name}</p>
            <p className='xl:px-[150px] lg:px-[90px] md:px-[60px] xs:px-[30px] text-white xl:text-[40px] lg:text-[30px] md:text-[20px] xs:text-[10px] text-center font-migra font-bold'>{mostSelectedBundle.desc}</p>

            <div className="text-center py-[30px]">
            <span className="inline-block bg-[#A4161A] rounded-full text-[#FFFFFF]">
                <a
                href="https://forms.gle/6WCS4dZCFL3MJf729"
                className="font-capuchetrial lg:text-[30px] md:text-[20px] xs:text-[10px] md:px-[100px] xs:px-[40px] md:py-[10px] xs:py-[5px]"
                target="_blank" // Tambahkan target="_blank" di sini
                >
                Buy Now
                </a>
            </span>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default QuizMerchAfter;

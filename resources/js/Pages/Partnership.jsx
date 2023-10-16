import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Partnership() {
  return (
    <>
        <div className="bg-[url('/assets/bg-partnership.jpg')] bg-cover bg-no-repeat pt-12 pb-24 w450:pt-32 w450:pb-32 grid justify-center">
            <div className='grid justify-center mb-5'>
                <h1 className='font-capuchetrial text-white text-[40px] sm:text-[50px] md:text-[100px] lg:text-[150px] mx-auto drop-shadow-custom1'>PARTNERSHIP</h1>
            </div>
            <div className='xs:grid justify-center hidden mb-12'>
                <p className='font-migraXB xs:text-[11px] md:text-[20px] lg:text-[40px] mb-3 text-center'><mark className='bg-[#A4161A] rounded-md p-2 text-white font-black'>We are excited to announce that we are actively seeking partnerships</mark></p>
                <p className='font-migraXB xs:text-[11px] md:text-[20px] lg:text-[40px] text-center'><mark className='bg-[#A4161A] rounded-md p-2 text-white font-black'>such as Media Partners, Company Partners, and In-Kind Partners </mark></p>
            </div>
            <div className='bg-white rounded-md w-[280px] xs:w-[350px] md:w-[700px] mx-auto p-3 xs:p-6'>
                <form action="" className=''>
                    <label htmlFor="name" className='font-lastik text-[13px] md:text-base'>Name</label>
                    <input type="text" id='name' name='name' className='w-full border border-black mb-3 p-1'/>
                    <label htmlFor="instansi" className='font-lastik text-[13px] md:text-base'>Instansi</label>
                    <input type="text" id='instansi' name='instansi' className='w-full border border-black mb-3 p-1'/>
                    <label htmlFor="jabatan" className='font-lastik text-[13px] md:text-base'>Jabatan</label>
                    <input type="text" id='jabatan' name='jabatan' className='w-full border border-black mb-3 p-1'/>
                    <label htmlFor="phone" className='font-lastik text-[13px] md:text-base'>No. HP</label>
                    <input type="text" id='phone' name='phone' className='w-full border border-black mb-3 p-1'/>
                    <label htmlFor="email" className='font-lastik text-[13px] md:text-base'>Email Anda</label>
                    <input type="text" id='email' name='email' className='w-full border border-black mb-3 p-1'/>
                    <label htmlFor="deskripsi" className='font-lastik text-[13px] md:text-base'>Deskripsi Singkat Tentang Kerjasama</label>
                    <textarea name="deskripsi" id="deskripsi" cols="30" rows="10" className='w-full border border-black mb-3 p-1'></textarea>
                    <label htmlFor="why" className='font-lastik text-[13px] md:text-base'>Kenapa TEDxUniversitasAirlangga Harus Berpatisipasi Dalam Acara Ini?</label>
                    <textarea name="why" id="why" cols="30" rows="10" className='w-full border border-black mb-3 p-1'></textarea>
                    <label htmlFor="other" className='font-lastik text-[13px] md:text-base'>Lain - Lain</label>
                    <textarea name="other" id="other" cols="30" rows="10" className='w-full border border-black mb-3 p-1'></textarea>
                    <div className='w-full flex justify-center font-lastik text-[13px] md:text-base'>
                        <button className='bg-[#A4161A] py-2 px-5 text-white border border-black hover:bg-gray-300 hover:text-[#A4161A]'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
            <Footer />
            <Navbar />
    </>
  )
}

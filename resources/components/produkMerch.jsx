import React from 'react';

function ProdukMerch() {
  const items = [
    {
      id: 1,
      name: 'Acrylic Pin',
      price: '25k',
      imageUrl: '/assets/merch/acrylic.png',
    },
    {
      id: 2,
      name: 'Cap',
      price: '65k',
      imageUrl: '/assets/merch/cap.png',
    },
    {
      id: 3,
      name: 'Iron Patch',
      price: '20k',
      imageUrl: '/assets/merch/iron.png',
    },
    {
      id: 4,
      name: 'Keychain',
      price: '20k',
      imageUrl: '/assets/merch/keychain.png',
    },
    {
      id: 5,
      name: 'Lanyard',
      price: '20k',
      imageUrl: '/assets/merch/lanyard.png',
    },
    {
      id: 6,
      name: 'Sticker Set',
      price: '15k',
      imageUrl: '/assets/merch/sticker.png',
    },
    {
      id: 7,
      name: 'Totebag',
      price: '65k',
      imageUrl: '/assets/merch/totebag.png',
    },
    {
      id: 8,
      name: 'T-Shirt',
      price: '85k',
      imageUrl: '/assets/merch/tshirt.png',
    },
  ];

  return (
    <div className="grid grid-cols-3 md:gap-16 xs:gap-x-2 xs:gap-y-6 md:grid-rows-2 md:grid-cols-3 md:p-[100px] xs:p-[20px] xs:pb-[75px] relative">
  {items.map((item) => (
    <div key={item.id} className="bg-[#99A252] rounded-lg text-center relative">
      <div className="absolute md:top-[-50px] md:right-[-50px] xs:top-[-20px] xs:right-[-10px]">
        <img src="/assets/bg-price.png" alt="" className='lg:w-[150px] md:w-[100px] xs:w-[50px]'/>
        <div className="absolute inset-0 flex items-center justify-center text-black font-extrabold font-migra lg:text-[30px] md:text-[20px] xs:text-[10px]">
          {item.price}
        </div>
      </div>
      <div className="flex-col justify-between">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="xl:h-[350px] lg:h-[250px] md:h-[150px] xs:h-[100px] mx-auto w-fit mb-2"
        />
        <div className="bg-white xs:h-10 md:h-16 lg:h-18 xl:h-20 flex flex-col items-center justify-center">
            <p className=" xl:text-[50px] lg:text-[30px] md:text-[20px] xs:text-[15px] font-capuchetrial font-bold text-black">
            {item.name}
            </p>
        </div>
      </div>
    </div>
  ))}
</div>

  );
}

export default ProdukMerch;

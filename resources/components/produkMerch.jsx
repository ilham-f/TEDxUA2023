import React from 'react';

function ProdukMerch() {
  const items = [
    {
      id: 1,
      name: 'Cap Green',
      price: '50k',
      imageUrl: '/assets/merch/cap mockup design tedx-Green.png',
    },
    {
      id: 2,
      name: 'Iron Patch1',
      price: '50k',
      imageUrl: '/assets/merch/iron patch 1 (1).png',
    },
    {
      id: 3,
      name: 'Iron Patch2',
      price: '50k',
      imageUrl: '/assets/merch/iron patch 2 (1).png',
    },
    {
      id: 4,
      name: 'Cap Maroon',
      price: '50k',
      imageUrl: '/assets/merch/cap mockup design tedx- Maroon.png',
    },
    {
      id: 5,
      name: 'Iron Patch3',
      price: '50k',
      imageUrl: '/assets/merch/iron patch 3 (1).png',
    },
    {
      id: 6,
      name: 'Tshirt cream',
      price: '50k',
      imageUrl: '/assets/merch/kaos tedx cream.png',
    },
    {
      id: 7,
      name: 'Tshirt black',
      price: '50k',
      imageUrl: '/assets/merch/Kaos TEDX item.png',
    },
    {
      id: 8,
      name: 'Lanyard',
      price: '50k',
      imageUrl: '/assets/merch/lanyard.png',
    },
    {
      id: 9,
      name: 'Tshirt cream',
      price: '50k',
      imageUrl: '/assets/merch/kaos tedx cream.png',
    },
    {
      id: 10,
      name: 'Tshirt cream',
      price: '50k',
      imageUrl: '/assets/merch/kaos tedx cream.png',
    },
    {
      id: 11,
      name: 'Tshirt cream',
      price: '50k',
      imageUrl: '/assets/merch/kaos tedx cream.png',
    },
    {
      id: 12,
      name: 'Tshirt cream',
      price: '50k',
      imageUrl: '/assets/merch/kaos tedx cream.png',
    },
    {
      id: 13,
      name: 'Tshirt cream',
      price: '50k',
      imageUrl: '/assets/merch/kaos tedx cream.png',
    },
    {
      id: 14,
      name: 'Tshirt cream',
      price: '50k',
      imageUrl: '/assets/merch/kaos tedx cream.png',
    },
    {
      id: 15,
      name: 'Tshirt cream',
      price: '50k',
      imageUrl: '/assets/merch/kaos tedx cream.png',
    },
  ];

  return (
    <div className="grid grid-cols-3 md:gap-16 xs:gap-x-2 xs:gap-y-6 md:grid-rows-2 md:grid-cols-3 md:p-[100px] xs:p-[20px] relative">
  {items.map((item) => (
    <div key={item.id} className="bg-[#99A252] rounded-lg text-center relative">
      <div className="absolute md:top-[-50px] md:right-[-50px] xs:top-[-20px] xs:right-[-10px]">
        <img src="/assets/bg-price.png" alt="" className='lg:w-[150px] md:w-[100px] xs:w-[50px]'/>
        <div className="absolute inset-0 flex items-center justify-center text-black font-extrabold font-migra lg:text-[30px] md:text-[20px] xs:text-[10px]">
          {item.price}
        </div>
      </div>
      <div className="items-center justify-end">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="xl:h-[350px] lg:h-[250px] md:h-[150px] xs:h-[100px] mx-auto w-fit mb-2"
        />
        <p className="bg-white xl:text-[50px] lg:text-[30px] md:text-[20px] xs:text-[15px] font-capuchetrial font-bold text-black">
          {item.name}
        </p>
      </div>
    </div>
  ))}
</div>

  );
}

export default ProdukMerch;

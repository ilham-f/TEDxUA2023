import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function SpeakersCarousel() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      interval={5000}
      stopOnHover={true}
      swipeable={true}
    >
      {/* Setiap elemen di bawah ini akan menjadi satu slide di carousel */}
      <div>
        <img src="/assets/speaker.png" alt="Pembicara 1" />
        <p className="font-canopee text-white py-2">ELENA</p>
      </div>
      <div>
        <img src="/assets/speaker.png" alt="Pembicara 2" />
        <p className="font-canopee text-white py-2">Speaker 2</p>
      </div>
      {/* Anda dapat menambahkan lebih banyak elemen speaker sesuai kebutuhan */}
    </Carousel>
  );
}

export default SpeakersCarousel;

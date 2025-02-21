import React, { useEffect, useState } from "react";
import "../css/circleTextAnimation.css"; // Mengimpor gaya CSS

function CircularTextAnimation() {
    const [transformedText, setTransformedText] = useState("");

    useEffect(() => {
        const text = "GRAB YOUR TICKET GRAB YOUR TICKET GRAB YOUR TICKET";
        const transformedChars = text.split("").map((char, i) => (
            <span key={i} style={{ transform: `rotate(${i * 7}deg)` }}>
                {char}
            </span>
        ));
        setTransformedText(transformedChars);
    }, []);

    return (
        <>
            <div className="flex-col justify-center items-center hidden md:flex">
                <div className="circle xl:w-[75px] md:w-[75px]  xl:h-[75px] md:h-[75px]">
                    {" "}
                    {/* Menggunakan kelas CSS 'circle' */}
                    <img
                        className="absolute xl:w-[25px] md:w-[20px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        src="/assets/arrow-circle.png"
                        alt="circle"
                    />
                    <div className="text">{transformedText}</div>{" "}
                    {/* Menggunakan kelas CSS 'text' */}
                </div>
            </div>
        </>
    );
}

export default CircularTextAnimation;

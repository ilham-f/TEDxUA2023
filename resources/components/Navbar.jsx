import React from "react";
import { initTE, Dropdown } from "tw-elements";
import { useState, useEffect } from "react";

import { Link, Head, router } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import * as Dialog from '@radix-ui/react-dialog';

export default function Navbar() {

    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        // Inisialisasi Dropdown
        initTE({ Dropdown });

        // mendeteksi perubahan lebar layar
        const handleResize = () => {
            if (window.innerWidth <= 450) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
        };

        // Panggil handleResize pada awalnya
        handleResize();

        // Tambahkan event listener ke window
        window.addEventListener("resize", handleResize);

        // Cleanup event listener saat komponen tidak lagi digunakan
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return (
        <>
            {showNavbar ? (
                <div className="z-50 grid bg-[#1A1A1A] opacity-75 border-b-4 border-[#b93021] fixed left-0 right-0 top-0">
                    {/* ...Isi navbar Anda di sini */}
                    <div className="flex xl:h-[50px] md:h-[25px] xs:h-[10px] xl:mx-[100px] md:mx-[20px] xs:mx-[10px] my-[20px] content-center">
                        {/* Logo Tedx */}
                            <img
                                src="/assets/TEDxUniversitasAirlangga.png"
                                alt=""
                                className=" xl:max-w-[250px] max-w-[150px] h-max self-center"
                            />
                        <nav className="flex ml-auto items-center">
                            <ul className="flex xl:flex-row md:flex-row xs:flex-row font-helvetica xl:gap-[30px] md:gap-[25px] xs:gap-[10px] md:text-[12px] xs:text-[5px] font-bold">
                                <li className="flex items-center">
                                    <a
                                        href="#"
                                        className="text-white hover:text-neutral-500"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <a
                                        href="#"
                                        className="text-white hover:text-neutral-500"
                                    >
                                        GALLERY
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <a
                                        href="#"
                                        className="text-white hover:text-neutral-500"
                                    >
                                        PARTNERSHIP
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <a
                                        class="flex items-center text-white hover:text-neutral-500 hover:ease-in-out focus:text-neutral-700"
                                        href="#"
                                        type="button"
                                        id="dropdownMenuButton2"
                                        data-te-dropdown-toggle-ref
                                        aria-expanded="false"
                                    >
                                        ORDER NOW
                                        <span class="ml-2 md:w-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                class="h-5 w-5"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul
                                        class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                        aria-labelledby="dropdownMenuButton2"
                                        data-te-dropdown-menu-ref
                                    >
                                        <li>
                                            <a
                                                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                href="#"
                                                data-te-dropdown-item-ref
                                            >
                                                Ticketing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                href='#'
                                                data-te-dropdown-item-ref
                                            >
                                                Merch
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="flex items-center">
                                    <a
                                        href="#"
                                        className="text-white text-center border-[2px] border-[#b93021] hover:bg-[#b93021] rounded-md p-[10px] md:p-[5px] xs:p-[3px]"
                                    >
                                        LOGIN
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            ) : (
                <div class="navigation">
                    <div class="menuToggle">
                        <i></i>
                    </div>
                    <div class="menu">
                        <ul>
                            <li>
                                <a href="#" className="font-helvetica">ORDER</a>
                            </li>
                            <li>
                                <a href="#" className="font-helvetica">PARTNER</a>
                            </li>
                            <li className="mx-[20px] invisible"></li>
                            <li>
                                <a href="#" className="font-helvetica">GALLERY</a>
                            </li>
                            <li>
                                <a href="#" className="font-helvetica">LOGIN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

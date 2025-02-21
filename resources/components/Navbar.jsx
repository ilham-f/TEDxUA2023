import React from "react";
import { initTE, Dropdown } from "tw-elements";
import { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
    const { auth } = usePage().props;
    const [showNavbar, setShowNavbar] = useState(true);
    const isLoggedIn = auth.user;
    const [modal, setModal] = useState(false);

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
                <div className="grid bg-[#1A1A1A] opacity-75 border-b-4 border-[#b93021] fixed left-0 right-0 top-0 z-50">
                    {/* ...Isi navbar Anda di sini */}
                    <div className="flex xl:h-[50px] md:h-[25px] xs:h-[10px] xl:mx-[100px] md:mx-[20px] xs:mx-[10px] my-[20px] content-center items-center">
                        {/* Logo Tedx */}
                        <Link href="/">
                            <img
                                src="/assets/TEDxUniversitasAirlangga.png"
                                alt=""
                                className="xl:max-w-[250px] max-w-[150px] self-center"
                            />
                        </Link>

                        <nav className="flex ml-auto items-center">
                            <ul className="flex xl:flex-row md:flex-row xs:flex-row font-helvetica xl:gap-[30px] md:gap-[25px] xs:gap-[10px] md:text-[12px] xs:text-[5px] font-bold">
                                <li className="flex items-center">
                                    <Link
                                        href="/"
                                        className="text-white hover:text-neutral-500"
                                    >
                                        HOME
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <Link
                                        href="/gallery"
                                        className="text-white hover:text-neutral-500"
                                    >
                                        GALLERY
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <Link
                                        href="/partnership"
                                        className="text-white hover:text-neutral-500"
                                    >
                                        PARTNERSHIP
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <a
                                        className="flex items-center text-white hover:text-neutral-500 hover:ease-in-out focus:text-neutral-700"
                                        href="#"
                                        type="button"
                                        id="dropdownMenuButton2"
                                        data-te-dropdown-toggle-ref
                                        aria-expanded="false"
                                    >
                                        ORDER NOW
                                        <span className="ml-2 md:w-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </a>
                                    <ul
                                        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                        aria-labelledby="dropdownMenuButton2"
                                        data-te-dropdown-menu-ref
                                    >
                                        <li>
                                            <Link
                                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                href="/ticket"
                                                data-te-dropdown-item-ref
                                            >
                                                Ticket
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                href="/merch"
                                                data-te-dropdown-item-ref
                                            >
                                                Merch
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="flex items-center">
                                    {auth.user ? (
                                        // <button className="text-white text-center border-[2px] border-[#b93021] hover:bg-[#b93021] rounded-md p-[10px] md:p-[5px] xs:p-[3px] mr-2" onClick={handleLogout}>Logout</button>
                                        <Link href="/logout" method="post" className="text-white text-center border-[2px] border-[#b93021] hover:bg-[#b93021] rounded-md p-[10px] md:p-[5px] xs:p-[3px] mr-2">
                                            LOGOUT
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route("login")}
                                                className="text-white text-center border-[2px] border-[#b93021] hover:bg-[#b93021] rounded-md p-[10px] md:p-[5px] xs:p-[3px] mr-2"
                                            >
                                                LOGIN
                                            </Link>
                                            <Link
                                                href={route("register")}
                                                className="text-white text-center border-[2px] border-[#b93021] hover:bg-[#b93021] rounded-md p-[10px] md:p-[5px] xs:p-[3px]"
                                            >
                                                REGISTER
                                            </Link>
                                        </>
                                    )}
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            ) : (
                <div className="navigation">
                    <Link href="/">
                        <div className="menuToggle">
                            <i></i>
                        </div>
                    </Link>
                    <div className="menu">
                        <ul className="flex flex-row justify-evenly w-full">
                            <li>
                                <button className="font-helvetica" onClick={() => setModal(!modal)}>
                                   ORDER
                                </button>
                            </li>
                            <li>
                                <a href="/partnership" className="font-helvetica">
                                    PARTNER
                                </a>
                            </li>
                            <li>
                                <a href="/gallery" className="font-helvetica">
                                    GALLERY
                                </a>
                            </li>
                            {auth.user ? (
                                <li>
                                    <Link
                                        href="/logout"
                                        method="post"
                                        className="font-helvetica"
                                    >
                                        LOGOUT
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            href="/login"
                                            className="font-helvetica"
                                        >
                                            LOGIN
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link
                                            href="/register"
                                            className="font-helvetica"
                                        >
                                            REGISTER
                                        </Link>
                                    </li> */}
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            )}

            <Dialog.Root open={modal}>
                <Dialog.Portal>
                    <AnimatePresence>
                        {modal && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Dialog.Overlay className=" bg-zinc-900/75 fixed inset-0 sm:hidden" />
                                <Dialog.Content
                                    className="xl:w-[1123px] xl:h-[586px] md:w-[640px] md:h-[370px] xs:w-[300px] w-[280px] h-[188px] bg-[#A4161A] bg-cover rounded-3xl fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-50 sm:hidden"
                                    onInteractOutside={(e) =>
                                        setModal(!modal)
                                    }
                                >
                                    <Dialog.Description className="flex flex-col gap-5">
                                        <Link className="text-[#A4161A] bg-white font-canopee xl:text-[125px] md:text-[70px] text-[25px] text-center px-4 py-1 border border-white rounded-lg focus:bg-gray-300"
                                        href="/ticket">
                                            Ticket
                                        </Link>
                                        <Link className="text-[#A4161A] bg-white font-canopee xl:text-[125px] md:text-[70px] text-[25px] text-center px-4 py-1 border border-white rounded-lg focus:bg-gray-300"
                                        href="/merch">
                                            Merch
                                        </Link>

                                    </Dialog.Description>
                                    <Dialog.Close>
                                        <button
                                            className="absolute top-[12px] right-[20px] items-center justify-center block text-white font-migraXB text-[30px]"
                                            aria-label="Close"
                                            onClick={() =>
                                                setModal(!modal)
                                            }
                                        >
                                            X
                                        </button>
                                    </Dialog.Close>
                                </Dialog.Content>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}

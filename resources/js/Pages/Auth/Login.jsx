import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Input from "../Input";
import PasswordInput from "../PasswordInput";
import Footer from "/resources/components/Footer";
import Navbar from "/resources/components/Navbar";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: true,
    });

    console.log(data);

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <div className="bg-[url('/assets/bg-grass.jpg')] bg-no-repeat bg-cover pt-10 pb-24 w450:pt-44 w450:pb-44 grid justify-center px-8 w-full">
                <div className="mb-2 md:mb-8 relative w-full text-center text-[45px] xs:text-[60px] md:text-[100px] lg:text-[150px]">
                    <span className="text-[#A4161A] font-capuchetrial">
                        LOG
                    </span>
                    <span className="text-[#fff] font-capuchetrial">IN</span>
                </div>
                <div className="border-4 rounded-3xl backdrop-blur-[2px] px-4 pt-8 md:px-16 md:pt-10 w-[280px] xs:w-[360px] md:w-[600px] lg:w-[800px] mb-44 md:mb-0">
                    <img
                        src="/assets/logox1.png"
                        alt="logox1"
                        className="top-0 right-0 xs:top-[-10px] xs:right-[-10px] md:top-[-70px] md:right-[-70px] absolute w-[10px] xs:w-[40px] md:w-[138px]"
                    />
                    <form className="grid" onSubmit={submit}>
                        {/* <label htmlFor="name" className='mb-3 font-gooddog text-white text-[40px]'>Name</label>
                    <input id='name' type="text" className='mb-3 p-4 rounded-md'/>
                    <label htmlFor="email" className='mb-3 font-gooddog text-white text-[40px]'>Email</label>
                    <input id='email' type="email" className='mb-3 p-4 rounded-md'/>
                    <label htmlFor="password" className='mb-3 font-gooddog text-white text-[40px]'>Password</label>
                    <input id='password' type="password" className='mb-3 p-4 rounded-md'/>
                    <label htmlFor="confirmpassowrd" className='mb-3 font-gooddog text-white text-[40px]'>Confirm Passowrd</label>
                    <input id='confirmpassowrd' type="password" className='mb-3 p-4 rounded-md'/> */}
                        <Input
                            label={"Email"}
                            placeholder={"Email"}
                            id={"email"}
                            type={"email"}
                            name={"email"}
                            onChange={(e) => setData("email", e.target.value)}
                            value={data.email}
                        />
                        <InputError message={errors.email} className="mt-2" />

                        <PasswordInput
                            label={"Password"}
                            placeholder={"Password"}
                            id={"password"}
                            name={"password"}
                            onChange={(e) => setData("password", e.target.value)}
                            value={data.password}
                        />
                        <InputError message={errors.password} className="mt-2" />
                        <button type="submit" className="bg-[#A4161A] mt-10 p-1 font-gooddog text-[25px] md:text-[40px] rounded-full text-white hover:bg-white hover:text-[#A4161A] transition-all mx-4">
                            LOGIN
                        </button>
                    </form>
                    <div className="flex justify-center gap-1 mt-3 mb-20 md:mb-44">
                        <span className="font-gooddog text-white text-[20px] md:text-[25px]">
                            Don't Have An Account?
                        </span>
                        <button
                            className="bg-[#fff] rounded-full text-[#A4161A] text-[16px] md:text-[20px] px-[12px] font-gooddog hover:text-white hover:bg-[#A4161A] transition-all underline"
                            type="button"
                        >
                            REGISTER
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                        <img
                            src="/assets/bungaa.png"
                            alt="bunga"
                            className="w-[270px] xs:w-[360px] md:w-[700px] lg:w-[940px] max-w-none"
                        />
                    </div>
                </div>
            </div>
            <Footer />
            <Navbar />
        </>
    );
}

{/* <GuestLayout>
    <Head title="Log in" />

    {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
    )}

    <form onSubmit={submit}>
        <div>
            <InputLabel htmlFor="email" value="Email" />

            <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                onChange={(e) => setData("email", e.target.value)}
            />

            <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
            <InputLabel htmlFor="password" value="Password" />

            <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="current-password"
                onChange={(e) => setData("password", e.target.value)}
            />

            <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="block mt-4">
            <label className="flex items-center">
                <Checkbox
                    name="remember"
                    checked={data.remember}
                    onChange={(e) => setData("remember", e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
        </div>

        <div className="flex items-center justify-end mt-4">
            {canResetPassword && (
                <Link
                    href={route("password.request")}
                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Forgot your password?
                </Link>
            )}

            <PrimaryButton className="ml-4" disabled={processing}>
                Log in
            </PrimaryButton>
        </div>
    </form>
</GuestLayout>; */}

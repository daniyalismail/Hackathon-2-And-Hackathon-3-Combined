import "../styles/footer.css";
import { RiGithubFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#f0f0f0] w-full px-7 py-7 flex flex-col items-center justify-center">
            {/* Main Content */}
            <div id="mainbox" className="flex flex-wrap w-full justify-center mt-40 gap-4">
                {/* Left Section */}
                <div className="w-full md:w-[45%] lg:w-[30%]  p-4">
                    <h1 className="font-extrabold tracking-tighter text-3xl mb-1">SHOP.CO</h1>
                    <p className="mb-2 text-[#606060]">
                        We have clothes that suits your style and which you&apos;re proud to wear. From women to men.
                    </p>
                    <div className="flex mt-8">
                        <RiGithubFill className="cursor-pointer hover:text-white rounded-full p-[6px] h-[30px] w-[30px] border-1 m-1 border-gray-300 border-[0.5px] transition duration-500 ease-in-out bg-white hover:bg-black transform hover:-translate-y-1 hover:scale-110" />
                        <FaInstagram className="cursor-pointer hover:text-white rounded-full p-[6px] h-[30px] w-[30px] border-1 m-1 border-gray-300 border-[0.5px] transition duration-500 ease-in-out bg-white hover:bg-black transform hover:-translate-y-1 hover:scale-110" />
                        <FaFacebookF className="cursor-pointer hover:text-white rounded-full p-[6px] h-[30px] w-[30px] border-1 m-1 border-gray-300 border-[0.5px] transition duration-500 ease-in-out bg-white hover:bg-black transform hover:-translate-y-1 hover:scale-110" />
                        <FaTwitter className="cursor-pointer hover:text-white rounded-full p-[6px] h-[30px] w-[30px] border-1 m-1 border-gray-300 border-[0.5px] transition duration-500 ease-in-out bg-white hover:bg-black transform hover:-translate-y-1 hover:scale-110" />
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[45%] lg:w-[60%] flex flex-wrap justify-evenly gap-4 p-4">
                    <div className="min-w-[120px] max-w-[150px] flex-1">
                        <h1 className="text-xl font-normal mb-4 tracking-wider">COMPANY</h1>
                        <ul className="text-[#606060]">
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">About</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Features</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Works</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Careers</li>
                        </ul>
                    </div>
                    <div className="min-w-[120px] max-w-[150px] flex-1">
                        <h1 className="text-xl font-normal mb-4 tracking-wider">HELP</h1>
                        <ul className="text-[#606060]">
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Customer Support</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Delivery Details</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Terms & Conditions</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="min-w-[120px] max-w-[150px] flex-1">
                        <h1 className="text-xl font-normal mb-4 tracking-wider">FAQ</h1>
                        <ul className="text-[#606060]">
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Account</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Manage Deliveries</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Orders</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Payment</li>
                        </ul>
                    </div>
                    <div className="min-w-[120px] max-w-[150px] flex-1">
                        <h1 className="text-xl font-normal mb-4 tracking-wider">RESOURCES</h1>
                        <ul className="text-[#606060]">
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Free eBook</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Development Tutorial</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">How to Blog</li>
                            <li className="mb-2 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Youtube Playlist</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center w-full">
                <hr className="w-4/5 mt-4 mb-4 text-2xl text-[#d8d8d8]" />
            </div>

            {/* Footer Bottom */}
            <div className="w-full flex justify-center">
                <div className="w-[80%] flex flex-wrap justify-between gap-4">
                    <div>
                        <p className="text-[#606060]">Shop.co &copy; 2000-2023, All Rights Reserved</p>
                    </div>
                    <div className="flex gap-2">
                        <Image className="cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" src="/pay/applepay.png" height={49} width={66} alt="apple" />
                        <Image className="cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" src="/pay/gpay.png" height={49} width={66} alt="google" />
                        <Image className="cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" src="/pay/mastercard.png" height={49} width={66} alt="master" />
                        <Image className="cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" src="/pay/visa.png" height={49} width={66} alt="visa" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
import { TfiEmail } from "react-icons/tfi";
import "../styles/newsletter.css";
export default function Newsletter(){
    return(
        <div  className="w-full flex justify-center">
        <div id="main-box" className="w-4/5 h-auto bg-black flex rounded-3xl items-center justify-between relative top-20 flex-wrap">
            <div id="heading-box" className="flex w-5/12">
            <h1 id="heading" className=" text-white  rounded-3xl px-10 py-10 text-5xl font-bold tracking-tighter">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>
            <div id="r-box" className="flex justify-center items-center mr-8 ">
                <div id="box-2" className="flex-col h-full justify-center items-center w-full  px-2 py-2 ">
                <div className=" w-[100%] rounded-full bg-white flex items-center justify-center">
                <TfiEmail className="ml-3 text-2xl text-gray-400"/>
                <input className="w-full h-12 px-2 rounded-full" type="email" placeholder="Enter your amail adress" />
                </div>
                <button className="w-[100%] h-12 rounded-full mt-3 bg-white
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
        </div>
    )
}
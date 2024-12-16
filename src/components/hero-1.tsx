import Image from "next/image";
import "../styles/hero1.css";
export default function Hero1(){
    return(
        <div className="hero-1" /*className="w-full h-[500px] flex justify-between items-start bg-[#F2F0F1]"*/>
            <div className="left"/*className="w-auto mt-3 "*/ >
            <div className="top">
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            </div>
            <div className="s-button">
            <button>Shop Now</button>
            </div>
            <div className="bottom">
            <div className="box1">
                <h1>200+</h1>
                <p>International Brands</p>
            </div>
            <div className="box2">
                <h1>2,000+</h1>
                <p>High Quality Products</p>
            </div>
            <div className="box3">
                <h1>30,000+</h1>
                <p>Happy Customers</p>
            </div>
            </div>
            </div>
            <div className="right">
            <div className="s-star">
            <Image className="small-star"  src="/vector.png" height={50} width={50} alt="vector" ></Image>
            </div>
            <Image className="hero-1-bg" src="/hero-1-bg.jpeg" alt="bg" height={4096} width={2730}/>
            <div className="bigg-star">
            <Image className="big-star" src="/vector.png" height={65} width={65} alt="vector" ></Image>
            </div>
            </div>
            </div>
    );

}
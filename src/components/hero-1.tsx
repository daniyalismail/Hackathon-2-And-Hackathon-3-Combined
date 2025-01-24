import Image from "next/image";
import "../styles/hero1.css";
import Link from "next/link";

export default function Hero1() {
    return (
        <div className="hero-1">
            <div className="left">
                <div className="top">
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                </div>
                <div className="s-button">
                <Link href="/Products">
                    <button className="hover-effect">Shop Now</button>
                    </Link>
                </div>
                <div className="bottom">
                    <div className="box1 hover-effect">
                        <h1>200+</h1>
                        <p>International Brands</p>
                    </div>
                    <div className="box2 hover-effect">
                        <h1>2,000+</h1>
                        <p>High Quality Products</p>
                    </div>
                    <div className="box3 hover-effect">
                        <h1>30,000+</h1>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="s-star">
                    <Image className="small-star hover-effect" src="/Hero/Vector.png" height={50} width={50} alt="vector" />
                </div>
                <Image className="hero-1-bg hover-effect" src="/Hero/hero-1-bg.jpeg" alt="bg" height={4096} width={2730} />
                <div className="bigg-star">
                    <Image className="big-star hover-effect" src="/Hero/Vector.png" height={65} width={65} alt="vector" />
                </div>
            </div>
        </div>
    );
}
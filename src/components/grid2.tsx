import Link from "next/link";
import "../styles/grid2.css";
import Image from "next/image";
export default function Grid2(){
    return(
        <main className="main-box">
        <div className="heading-1">
            <h1 className="mt-10">TOP SELLING</h1>
        </div>
        <div className="grid-box">
            <Link href="/Products/Vertical Striped Shirt">
            <div className="box1">
                <Image src="/grid/grid-pic-5.png" height={298} width={295} alt="Shirt1"/>
                <h1>Vertical Striped Shirt</h1>
                <Image src="/review-2-1.png" height={19} width={160.7} alt="review1"/>
                <div className="price-box">
                <p>$212<del>$232</del></p>
                <div className="sale-box">
                    <p>-30%</p>
                </div>
            </div>
            </div>
            </Link>
            <Link href="/Products/LOOSE FIT BERMUDA SHORTS">
            <div className="box2">
            <Image src="/grid/grid-pic-6.png" height={298} width={295} alt="Shirt2" />
                <h1>LOOSE FIT BERMUDA SHORTS</h1>
                <Image src="/review-2-2.png" height={19} width={137.90} alt="review2"/>
                <p>$145</p>
            </div>
            </Link>
            <Link href="/Products/COURAGE GRAPHIC T-SHIRT">
            <div className="box3">
            <Image src="/grid/grid-pic-7.png" height={298} width={295} alt="Shirt3"/>
                <h1>COURAGE GRAPHIC T-SHIRT</h1>
                <Image src="/review-2-3.png" height={19} width={113.09} alt="review3"/>
                <p>$80</p>
            </div>
            </Link>
            <Link href="/Products/Classic Black Straight-Leg Jeans">
            <div className="box4">
            <Image src="/grid/grid-pic-8.png" height={298} width={295} alt="Shirt4"/>
            <h1>Classic Black Straight-Leg Jeans</h1>
            <Image src="/review-2-4.png" height={19} width={150} alt="review4"/>
            <div className="price-box">
                <p>$142.80<del>$170</del></p>
                <div className="sale-box">
                    <p>-16%</p>
                </div>
            </div>
            </div>
            </Link>
        </div>
        <Link href="/Products">
        <div className="view-all-bt">
                <button>
                    View All
                </button>
            </div>
            </Link>
        </main>
    )
}
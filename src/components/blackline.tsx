import Image from "next/image"
import "../styles/blackline.css"
export default function Blackline(){
    return(
        <main className="box">
            <div className="logo1">
                <Image className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" src="/blackline/versace.png" alt="versace" height={33.35} width={206.79} ></Image>
            </div>
            <div className="logo2">
            <Image className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" src="/blackline/zara.png" alt="zara" height={38} width={91}></Image>
            </div>
            <div className="logo3">
            <Image className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" src="/blackline/gucci.png" alt="gucci" height={36} width={156}></Image>
            </div>
            <div className="logo4">
            <Image  className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" src="/blackline/prada.png" alt="prada" width={194} height={32}></Image>
            </div>
            <div className="logo5">
            <Image className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300" src="/blackline/calvin.png" alt="calvin" height={33.35} width={206.79} ></Image>
            </div>
        </main>
    )
}
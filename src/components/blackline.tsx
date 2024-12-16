import Image from "next/image"
import "../styles/blackline.css"
export default function Blackline(){
    return(
        <main className="box">
            <div className="logo1">
                <Image className="p1" src="/versace.png" alt="versace" height={33.35} width={206.79} ></Image>
            </div>
            <div className="logo2">
            <Image className="p2" src="/zara.png" alt="zara" height={38} width={91}></Image>
            </div>
            <div className="logo3">
            <Image className="p3" src="/gucci.png" alt="gucci" height={36} width={156}></Image>
            </div>
            <div className="logo4">
            <Image  className="p4" src="/prada.png" alt="prada" width={194} height={32}></Image>
            </div>
            <div className="logo5">
            <Image className="p5" src="/calvin.png" alt="calvin" height={33.35} width={206.79} ></Image>
            </div>
        </main>
    )
}
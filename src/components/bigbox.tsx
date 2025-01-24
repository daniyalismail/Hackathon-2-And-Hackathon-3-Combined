import Image from "next/image"
import "../styles/bigbox.css"
import Link from "next/link"
export default function Bigbox(){
    return(
        <main className="big-box">
            <div className="main-bigbox">
              <h1>BROWSE BY DRESS STYLE</h1>
              <div className="div1">
              <div className="casual">
              <Link href="/Products">
                <Image className="h-full w-full" src ="/bigbox/bb-1.png" height={289} width={407} alt="casual"/>
            </Link>
                </div>
                 
                <div className="formal">
                <Link href="/Products">
                    <Image className="h-full w-full" src ="/bigbox/bb-2.png" height={289} width={684} alt="formal"/>
                </Link>
                </div>
                </div>
                <div className="div2">
                <div className="party">
                <Link href="/Products">
                    <Image className="h-full w-full" src ="/bigbox/bb-4.png" height={289} width={684} alt="party"/>
                </Link>
                </div>
                <div className="gym">
                <Link href="/Products">
                    <Image  className="h-full w-full" src ="/bigbox/bb-3.png" height={289} width={407} alt="gym"/>
                </Link>
                </div>
                </div>
            </div>
        </main>
    )
}
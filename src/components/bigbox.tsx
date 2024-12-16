import Image from "next/image"
import "../styles/bigbox.css"
export default function Bigbox(){
    return(
        <main className="big-box">
            <div className="main-bigbox">
              <h1>BROWSE BY DRESS STYLE</h1>
              <div className="div1">
              <div className="casual">
                <Image className="h-full w-full" src ="/bb-1.png" height={289} width={407} alt="casual"/>
                </div>  
                <div className="formal">
                    <Image className="h-full w-full" src ="/bb-2.png" height={289} width={684} alt="formal"/>
                </div>
                </div>
                <div className="div2">
                <div className="party">
                    <Image className="h-full w-full" src ="/bb-4.png" height={289} width={684} alt="party"/>
                </div>
                <div className="gym">
                    <Image  className="h-full w-full" src ="/bb-3.png" height={289} width={407} alt="gym"/>
                </div>
                </div>
            </div>
        </main>
    )
}
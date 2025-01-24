"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import "../styles/header.css"
import Link from "next/link"
const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid grid-cols-1 items-center gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="bg-white text-black"><Menu/></Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle><div className="logo"><Link href="/"><h1>SHOP.CO</h1></Link></div></SheetTitle>
            </SheetHeader>
            <div className="middle-elements-insheet">
            <select name="Shop">
            <Link href="/Products"><option value="Shop">Shop</option></Link>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
            <Link href="/Sale"><h1>On Sale</h1></Link>
            <Link href="/NewArrival"><h1>New Arrivals</h1></Link>
            <h1>Brands</h1>
          </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

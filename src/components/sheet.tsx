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
              <SheetTitle><div className="logo"><h1>SHOP.CO</h1></div></SheetTitle>
            </SheetHeader>
            <div className="middle-elements-insheet">
            <select name="Shop">
              <option value="Shop">Shop</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
            <h1>On Sale</h1>
            <h1>New Arrivals</h1>
            <h1>Brands</h1>
          </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

"use client";
import "../styles/ProductPageres.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import "../styles/header.css";
import Link from "next/link";
import Image from "next/image";
import { FaChevronRight, FaChevronUp } from "react-icons/fa6";
const SHEET_SIDES = ["bottom"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SheetSide2() {
  return (
    <div className="grid grid-cols-1 items-center gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="">
              <div
                id="filter-b"
                className=" w-[80%] ml-[-30px]
                                 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
              >
                <Image
                  className=""
                  src="/filter.png"
                  alt="Filter Image"
                  width={22}
                  height={19}
                />
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>
                <p className="flex items-center justify-start relative bottom-2 font-medium text-2xl">
                  Filters
                </p>
              </SheetTitle>
            </SheetHeader>
            <hr className="w-[100% ] mt-1 border-[1px] border-[#e6e6e6]" />
            <div className=" text-sm text-[#666666] flex justify-between items-center mt-1">
              <p>T-shirts</p>
              <FaChevronRight />
            </div>
            <div className=" text-sm text-[#666666] flex justify-between items-center mt-1">
              <p>Shorts</p>
              <FaChevronRight />
            </div>
            <div className=" text-sm text-[#666666] flex justify-between items-center mt-1">
              <p>Shirts</p>
              <FaChevronRight />
            </div>
            <div className=" text-sm text-[#666666] flex justify-between items-center mt-1">
              <p>Hoodie</p>
              <FaChevronRight />
            </div>
            <div className=" text-sm text-[#666666] flex justify-between items-center mt-1">
              <p>Jeans</p>
              <FaChevronRight />
            </div>
            <hr className="w-[100% ] mt-1 mb-1 border-[1px] border-[#e6e6e6]" />
            <div className="text-base text-[#666666] flex justify-between items-center mt-1 mb-1">
              <p className="font-semibold text-black">Price</p>
              <FaChevronUp />
            </div>
            <div className="w-full flex justify-between items-center">
              <p>$50</p>
              <Slider
                className="ml-1 mr-1"
                defaultValue={[33]}
                max={100}
                step={1}
              />
              <p>$200</p>
            </div>
            <hr className="w-[100% ] mt-1 mb-1 border-[1px] border-[#e6e6e6]" />
            <div className="text-base text-[#666666] flex justify-between items-center mt-1 mb-1">
              <p className="font-semibold text-black">Colors</p>
              <FaChevronUp />
            </div>
            <div className="w-full flex-col justify-between items-center">
              <div className="w-full flex justify-between items-center mt-1">
                <div
                  className=" cursor-pointer w-[20px] h-[20px] bg-green-700 rounded-full border-[1px] border-[#e6e6e6]
              transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                >
                  <p className="text-[#15803d]"></p>
                </div>
                <div
                  className=" cursor-pointer w-[20px] h-[20px] bg-red-700 rounded-full border-[1px] border-[#e6e6e6]
              transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                >
                  <p className="text-[#b91c1c]"></p>
                </div>
                <div
                  className=" cursor-pointer w-[20px] h-[20px] bg-yellow-400 rounded-full border-[1px] border-[#e6e6e6]
              transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                >
                  <p className="text-[#facc15]"></p>
                </div>
                <div
                  className=" cursor-pointer w-[20px] h-[20px] bg-orange-600 rounded-full border-[1px] border-[#e6e6e6]
              transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                >
                  <p className="text-[#ea580c]"></p>
                </div>
                <div
                  className=" cursor-pointer w-[20px] h-[20px] bg-blue-400 rounded-full border-[1px] border-[#e6e6e6]
              transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                >
                  <p className="text-[#60a5fa]"></p>
                </div>
              </div>
              <div className="w-full flex justify-between items-center mt-1">
                <div
                  className=" cursor-pointer w-[20px] h-[20px] bg-blue-800 rounded-full border-[1px] border-[#e6e6e6]
              transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                >
                  <p className="text-[#1e40af]"></p>
                </div>
                <div
                  className=" cursor-pointer w-[20px] h-[20px] bg-purple-600 rounded-full border-[1px] border-[#e6e6e6]
              transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                >
                  <p className="text-[#9333ea]"></p>
                </div>
                <div
                  className=" cursor-pointer w-[20px] h-[20px] bg-pink-600 rounded-full border-[1px] border-[#e6e6e6]
              transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                >
                  <p className="text-[#db2777]"></p>
                </div>
                <div
                  className=" cursor-pointer w-[20px] h-[20px] bg-white rounded-full border-[1px] border-[#e6e6e6]
              transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                >
                  <p className="text-white"></p>
                </div>
                <div
                  className=" cursor-pointer w-[20px] h-[20px] bg-black rounded-full border-[1px] border-[#e6e6e6]
              transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                >
                  <p className="text-black"></p>
                </div>
              </div>
            </div>
            <hr className="w-[100% ] mt-1 mb-1 border-[1px] border-[#e6e6e6]" />
            <div className="text-base text-[#666666] flex justify-between items-center mt-1 mb-1">
              <p className="font-semibold text-black">Size</p>
              <FaChevronUp />
            </div>
            <div className="flex flex-wrap gap-3 mt-1">
              <div
                className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
              cursor-pointer flex justify-center hover:bg-black hover:text-white items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0] text-[##606060]"
              >
                <p>XX-Small</p>
              </div>
              <div
                className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
              cursor-pointer flex justify-center hover:bg-black hover:text-white items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0] text-[##606060]"
              >
                <p>X-Small</p>
              </div>
              <div
                className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
              cursor-pointer flex justify-center items-center rounded-xl w-[40%]  hover:bg-black hover:text-white h-[50%] bg-[#f0f0f0] text-[##606060]"
              >
                <p>Small</p>
              </div>
              <div
                className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
              cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]"
              >
                <p>Medium</p>
              </div>
              <div
                className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
              cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]"
              >
                <p>Large</p>
              </div>
              <div
                className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
              cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]"
              >
                <p>X-Large</p>
              </div>
              <div
                className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
              cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]"
              >
                <p>XX-Large</p>
              </div>
              <div
                className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
              cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]"
              >
                <p>3X-Large</p>
              </div>
              <div
                className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
              cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]"
              >
                <p>4X-Large</p>
              </div>
            </div>
            <hr className="w-[100% ] mt-1 mb-1 border-[1px] border-[#e6e6e6]"/>
            <div className="text-base text-[#666666] flex justify-between items-center mt-1 mb-1">
              <p className="font-semibold text-black">Dress Style</p>
              <FaChevronUp />
            </div>
            <div className=" text-sm text-[#666666] flex justify-between items-center mt-1">
              <p>Casual</p>
              <FaChevronRight />
            </div>
            <div className=" text-sm text-[#666666] flex justify-between items-center mt-1">
              <p>Formal</p>
              <FaChevronRight />
            </div>
            <div className=" text-sm text-[#666666] flex justify-between items-center mt-1">
              <p>Party</p>
              <FaChevronRight />
            </div>
            <div className=" text-sm text-[#666666] flex justify-between items-center mt-1">
              <p>Gym</p>
              <FaChevronRight />
            </div>
            <div
              className="py-2 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 cursor-pointer
            w-full h-[100%] text-white flex items-center justify-center rounded-3xl bg-black mt-2 mb-1"
            >
              <button>Apply Filter</button>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

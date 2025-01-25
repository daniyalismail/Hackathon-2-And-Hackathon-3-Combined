"use client";
import "../../styles/cart.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BiPurchaseTag } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Image from "next/image";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import Link from "next/link";

export default function Cart() {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [quantity3, setQuantity3] = useState(1);

  const price1 = 145; 
  const price2 = 180;
  const price3 = 240;

  const incrementQuantity1 = () => {
    if (quantity1 < 20) {
      setQuantity1(quantity1 + 1);
    }
  };

  const decrementQuantity1 = () => {
    if (quantity1 > 1) {
      setQuantity1(quantity1 - 1);
    }
  };

  const incrementQuantity2 = () => {
    if (quantity2 < 20) {
      setQuantity2(quantity2 + 1);
    }
  };

  const decrementQuantity2 = () => {
    if (quantity2 > 1) {
      setQuantity2(quantity2 - 1);
    }
  };

  const incrementQuantity3 = () => {
    if (quantity3 < 20) {
      setQuantity3(quantity3 + 1);
    }
  };

  const decrementQuantity3 = () => {
    if (quantity3 > 1) {
      setQuantity3(quantity3 - 1);
    }
  };
  const totalPrice1 = price1 * quantity1;
  const totalPrice2 = price2 * quantity2;
  const totalPrice3 = price3 * quantity3;
  const subtotal = totalPrice1 + totalPrice2 + totalPrice3;
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const totalPrice = subtotal - discount + deliveryFee;

  return (
    <div className="w-full flex-col items-center ">
      <div className="w-full flex justify-center">
        <div className="w-[80%]">
          <hr className="border-[1px] border-[#e6e6e6] mb-4" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-black" href="/Cart">
                  Cart
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%]">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mt-4 mb-4">YOUR CART</h1>
        </div>
      </div>
      <div id="cart-box" className="w-full flex justify-center items-center gap-2">
        <div id="l-c-box" className="w-[50%] flex-col items-center justify-center  border-[1px] border-[#e6e6e6] rounded-lg">
          <div className="w-[100%] p-2 h-full flex  items-center">
            <div id="i-box1" className="w-[20%] rounded-xl">
              <Image
                src="/grid/grid-pic-1.png"
                width={295}
                height={298}
                alt="Black Striped T-Shirt"
              />
            </div>
            <div className="flex-col justify-between p-2 w-full">
              <div className="flex justify-between w-full items-center">
              <Link href="/Products/Black Striped T-Shirt">
                <h1 className="text-sm md-[1095px]:text-xl font-semibold">Black Striped T-Shirt</h1>
                </Link>
                <RiDeleteBin6Fill
                  className="text-[#ff3333]
                cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                />
              </div>
              <div className="text-sm text-black">
                <p>
                  Size: <span className="text-[#707070]">Large</span>
                </p>
              </div>
              <div className="text-sm text-black">
                <p>
                  Color: <span className="text-[#707070]">White</span>
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-2xl font-semibold">${totalPrice1}</h1>
                <div className="bg-[#f0f0f0] w-[90px] h-[30px] md-[1095px]:w-[126px] md-[1095px]:h-[44px] rounded-[62px] flex items-center justify-evenly">
                  <FiMinus
                    className="cursor-pointer"
                    onClick={decrementQuantity1}
                  />
                  <p>{quantity1}</p>
                  <GoPlus
                    className="cursor-pointer"
                    onClick={incrementQuantity1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
          <hr className="w-[98%]  border-[1px] border-[#e6e6e6]" />
          </div>
          <div className="w-[100%] p-2 h-full flex  rounded-lg items-center">
            <div id="i-box2" className="w-[20%] rounded-xl">
              <Image
                src="/grid/grid-pic-2.png"
                width={295}
                height={298}
                alt="Skinny Fit Jeans"
              />
            </div>
            <div className="flex-col justify-between p-2 w-full">
              <div className="flex justify-between w-full items-center">
              <Link href="/Products/Skinny Fit Jeans">               
                <h1 className="text-sm md-[1095px]:text-xl font-semibold">Skinny Fit Jeans</h1>
                </Link>
                <RiDeleteBin6Fill
                  className="text-[#ff3333]
                cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                />
              </div>
              <div className="text-sm text-black">
                <p>
                  Size: <span className="text-[#707070]">Medium</span>
                </p>
              </div>
              <div className="text-sm text-black">
                <p>
                  Color: <span className="text-[#707070]">Red</span>
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-2xl font-semibold">${totalPrice2}</h1>
                <div className="bg-[#f0f0f0] w-[90px] h-[30px] md-[1095px]:w-[126px] rounded-[62px] flex items-center justify-evenly">
                  <FiMinus
                    className="cursor-pointer"
                    onClick={decrementQuantity2}
                  />
                  <p>{quantity2}</p>
                  <GoPlus
                    className="cursor-pointer"
                    onClick={incrementQuantity2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
          <hr className="w-[98%]  border-[1px] border-[#e6e6e6]" />
          </div>
          <div className="w-[100%] p-2 h-full flex  items-center">
            <div id="i-box3" className="w-[20%] rounded-xl">
              <Image
                src="/grid/grid-pic-3.png"
                width={295}
                height={298}
                alt="Checkered Shirt"
              />
            </div>
            <div className="flex-col justify-between p-2 w-full">
              <div className="flex justify-between w-full items-center">
              <Link href="/Products/Checkered Shirt">
                <h1 className="text-sm md-[1095px]:text-xl font-semibold">Checkered Shirt</h1>
                </Link>
                <RiDeleteBin6Fill
                  className="text-[#ff3333]
                cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                />
              </div>
              <div className="text-sm text-black">
                <p>
                  Size: <span className="text-[#707070]">Large</span>
                </p>
              </div>
              <div className="text-sm text-black">
                <p>
                  Color: <span className="text-[#707070]">Blue</span>
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-2xl font-semibold">${totalPrice3}</h1>
                <div className="bg-[#f0f0f0] w-[90px] h-[30px] md-[1095px]:w-[126px] rounded-[62px] flex items-center justify-evenly">
                  <FiMinus
                    className="cursor-pointer"
                    onClick={decrementQuantity3}
                  />
                  <p>{quantity3}</p>
                  <GoPlus
                    className="cursor-pointer"
                    onClick={incrementQuantity3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="r-c-box" className="w-[30%] p-2 border-[1px] border-[#e6e6e6] rounded-md">
          <div>
          <h1 className="text-2xl  mt-4 font-semibold">Order Summary</h1>
          </div>
          <div className="flex text-xl mt-4 mb-4 justify-between items-center">
            <p className="text-[#666666]">Subtotal</p>
            <p className="font-semibold text-2xl">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex mb-4 text-xl  justify-between items-center">
            <p className="text-[#666666]">Discount (-20%)</p>
            <p className="text-[#ff3333] font-semibold text-2xl">-${discount.toFixed(2)}</p>
          </div>
          <div className="flex mb-4 text-xl  justify-between items-center" >
            <p className="text-[#666666]">Delivery Fee</p>
            <p className="font-semibold text-2xl">${deliveryFee.toFixed(2)}</p>
          </div>
          <hr className="border-[1px] border-[#e6e6e6]" />
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-medium">Total</p>
            <p className="text-xl font-semibold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="w-full flex items-center gap-2 p-1 mt-4 mb-4">
            <div className="w-[70%] px-3 py-3 bg-[#f0f0f0] rounded-3xl flex text-[#909090] items-center gap-3 text-lg ">
            <BiPurchaseTag/>
              <input className="w-full  text-xs sm:text-base md-[1095px]:text-lg placeholder:text-[#909090] bg-[#f0f0f0]" type="text" placeholder="Add Promo Code" />
            </div>
            <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
            w-[30%] cursor-pointer px-1 py-3 bg-black text-white rounded-3xl flex justify-center">
              <button>Apply</button>
            </div>
            </div>
            <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
            w-full text-white  px-1 py-3 cursor-pointer flex items-center justify-center bg-black rounded-3xl">
              <button>Go to Checkout </button>
            </div>
        </div>
      </div>
    </div>
  );
}
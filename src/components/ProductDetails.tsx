"use client";
import "../styles/productdetails.css";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProductType {
  name: string;
  image: {
    _type: "image";
    asset: { _ref: string; _type: "reference" };
  };
  discountPercent: number;
  colors: string[];
  sizes: string[];
  _id: string;
  price: number;
  description: string;
}

interface ProductDetailsProps {
  product: ProductType;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  const newPrice = product.price - (product.price * (product.discountPercent || 0)) / 100;
  const totalPrice = newPrice * quantity; // Calculate total price based on quantity

  const incrementQuantity = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <main className="w-full">
      <div id="br" className="w-[60%] flex justify-center">
        <Breadcrumb>
          <BreadcrumbList className="text-xs">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/Products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-black" href={`/Products/${product.name}`}>
                {product.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full flex justify-center mt-10 mb-52">
        <div id="b-box" className="w-[70%] flex">
          <div id="l-box" className="w-[50%] h-[80%] flex items-center" key={product._id}>
            <div id="box2" className="w-[30%] h-[100%] flex justify-center items-center">
              <div className="w-[100%] h-[100%] flex lg-[1040px]:flex-col items-center justify-center">
                {[1, 2, 3].map((_, index) => (
                  <div id="box-2-in" key={index} className="w-[100%] h-[33%] flex justify-center items-center">
                    <Image
                      src={urlFor(product.image).url()}
                      height={298}
                      width={295}
                      alt={`${product.name}`}
                      className="w-[80%] h-[90%] border-[#f3f1ef] border-[1px] hover:border-[1px] hover:border-black bg-cover rounded-md transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div id="box1" className="w-[65%] h-[100%] lg-[1040px]:mr-6 flex justify-center items-center">
              <div id="box-1-in" className="w-[100%] h-[100%] flex justify-center items-center">
                <Image
                  src={urlFor(product.image).url()}
                  height={298}
                  width={295}
                  alt={`${product.name}`}
                  className="w-[95%] h-[95%] bg-cover border-[#f3f1ef] border-[1px] hover:border-[1px] hover:border-black rounded-md transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div id="r-box" className="w-[50%] p-5">
            <h1 className="text-5xl font-black uppercase tracking-tighter">{product.name}</h1>
            <div className="flex items-center py-1">
              <RiStarSFill className="text-yellow-400 text-xl" />
              <RiStarSFill className="text-yellow-400 text-xl" />
              <RiStarSFill className="text-yellow-400 text-xl" />
              <p className="px-2 text-sm">3.5/5</p>
            </div>
            <div className="flex">
              <h1 className="font-semibold text-2xl">${totalPrice.toFixed(2)}</h1> {/* Display total price */}
              {product.discountPercent > 0 && (
                <>
                  <del className="font-semibold text-2xl px-2 text-gray-400">
                    ${(product.price * quantity).toFixed(2)} {/* Display original total price */}
                  </del>
                  <p className="rounded-2xl bg-red-200 px-3 flex items-center text-red-600">
                    -{product.discountPercent}%
                  </p>
                </>
              )}
            </div>
            <p className="text-[#666666] text-xs mb-4 mt-4">{product.description}</p>
            <hr className="border-[#e6e6e6] border-[1px]" />
            <div>
              <p className="text-[#666666] mb-1">Select Colors</p>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-[30px] border-black border-[0.05rem] cursor-pointer h-[30px] rounded-full transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex-col mb-3">
              <p className="text-[#666666] mb-3">Choose Size</p>
              <div className="flex gap-2">
                {product.sizes.map((size, index) => (
                  <div
                    key={index}
                    className="w-[86px] h-[40px] cursor-pointer flex items-center justify-center text-[#666666] bg-[#f0f0f0] rounded-3xl transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 hover:bg-black hover:text-white"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <hr className="border-[#e6e6e6] border-[1px]" />
            <div className="flex justify-between w-full h-full mt-4">
              <div className="bg-[#f0f0f0] w-[30%] h-[8%] flex items-center justify-evenly rounded-3xl">
                <FiMinus
                  className="cursor-pointer"
                  onClick={decrementQuantity}
                />
                <p>{quantity}</p>
                <GoPlus
                  className="cursor-pointer "
                  onClick={incrementQuantity}
                />
              </div>
              <div className="bg-black text-white w-[60%] h-[8%] cursor-pointer rounded-3xl flex justify-center items-center transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
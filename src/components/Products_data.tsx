
"use client"; 

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";

interface ProductType {
  name: string;
  image: {
    _type: "image";
    asset: { _ref: string; _type: "reference" };
  };
  discountPercent: number;
  _id: string;
  price: number;
}

interface ProductsProps {
  pro_data: ProductType[];
}

export default function Products({ pro_data }: ProductsProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-1/5"></div>
      <div className="w-3/6 flex-col justify-center">
        <h1 className="px-10 text-4xl py-5 font-medium tracking-tighter">Casual</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {pro_data.map((data) => {
            const newPrice =
              data.price - (data.price * (data.discountPercent || 0)) / 100;
            return (
              <a
                key={data._id}
                href={`/${data.name}`}
                className="cursor-pointer"
              >
                <div className="w-72">
                  <div>
                    <Image
                      src={urlFor(data.image).url()}
                      height={298}
                      width={295}
                      alt={`${data.name}`}
                      className="w-[295px] h-[298px] rounded-md"
                      priority 
                    />
                  </div>
                  <h1 className="font-semibold py-1">{data.name}</h1>
                  <div className="flex items-center py-1">
                    <RiStarSFill className="text-yellow-400 text-xl" />
                    <RiStarSFill className="text-yellow-400 text-xl" />
                    <RiStarSFill className="text-yellow-400 text-xl" />
                    <p className="px-2 text-sm">3.5/5</p>
                  </div>
                  <div className="flex items-center py-1">
                    <h1 className="font-semibold text-2xl">
                      ${newPrice.toFixed(2)}
                    </h1>
                    {data.discountPercent > 0 && (
                      <>
                        <del className="font-semibold text-2xl px-2 text-gray-400">
                          ${data.price.toFixed(2)}
                        </del>
                        <p className="rounded-xl bg-red-200 px-3 text-red-600">
                          -{data.discountPercent}%
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
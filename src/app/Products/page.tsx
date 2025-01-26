
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import "../../styles/ProductPageres.css";
import Link from "next/link";
import { FaChevronRight, FaChevronUp } from "react-icons/fa6";
import { Slider } from "@/components/ui/slider";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SheetSide2 } from "@/components/sheet_down_shadcn";

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

export default async function ProductsPage() {
  const products: ProductType[] = await client.fetch(`
    *[_type == "products"]{
      _id,
      name,
      price,
      discountPercent,
      image,
    }`);

    return (
      <div
        id="m-box"
        className="w-full flex-col flex items-center justify-center">
        <div className="w-full flex justify-center">
      <hr className="border-[1px] border-[#e6e6e6] w-[75%] mt-2 mb-4" />
      </div>
        <div id="breadcrumb-box" className="w-[75%]  mb-6 flex items-center justify-start">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-black" href="/Products">
                  Casual
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="w-full flex justify-center gap-1">
          <div id="f-box" className="w-[20%]">
            <div className=" w-[100%] border-[1px] rounded-2xl border-[#e6e6e6] flex-col p-4 items-center justify-between">
              <div className="flex  justify-between items-center">
                <p className="font-medium text-2xl">Filters</p>
                <div className="w-[20%] height-[20%]
                 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">
                  <Image
                    className="ml-9"
                    src="/filter.png"
                    alt="Filter Image"
                    width={22}
                    height={19}
                  />
                </div>
              </div>
              <hr className="w-[100% ] mt-4 border-[1px] border-[#e6e6e6]" />
              <div className=" text-xl text-[#666666] flex justify-between items-center mt-4">
                <p>T-shirts</p>
                <FaChevronRight />
              </div>
              <div className=" text-xl text-[#666666] flex justify-between items-center mt-4">
                <p>Shorts</p>
                <FaChevronRight />
              </div>
              <div className=" text-xl text-[#666666] flex justify-between items-center mt-4">
                <p>Shirts</p>
                <FaChevronRight />
              </div>
              <div className=" text-xl text-[#666666] flex justify-between items-center mt-4">
                <p>Hoodie</p>
                <FaChevronRight />
              </div>
              <div className=" text-xl text-[#666666] flex justify-between items-center mt-4">
                <p>Jeans</p>
                <FaChevronRight />
              </div>
              <hr className="w-[100% ] mt-4 border-[1px] border-[#e6e6e6]" />
              <div className="text-xl text-[#666666] flex justify-between items-center mt-6 mb-6">
                <p className="font-semibold text-black">Price</p>
                <FaChevronUp />
              </div>
              <div className="w-full flex justify-between items-center">
                <p>$50</p>
                <Slider className="ml-1 mr-1" defaultValue={[33]} max={100} step={1} />
                <p>$200</p>
              </div>
              <hr className="w-[100% ] mt-4 border-[1px] border-[#e6e6e6]" />
              <div className="text-xl text-[#666666] flex justify-between items-center mt-6 mb-6">
                <p className="font-semibold text-black">Colors</p>
                <FaChevronUp />
              </div>
              <div   className="w-full flex-col justify-between items-center">
                <div className="w-full flex justify-between items-center mt-4">
                <div className=" cursor-pointer w-[30px] h-[30px] bg-green-700 rounded-full border-[1px] border-[#e6e6e6]
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"><p className="text-[#15803d]">.</p></div>
                <div className=" cursor-pointer w-[30px] h-[30px] bg-red-700 rounded-full border-[1px] border-[#e6e6e6]
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"><p className="text-[#b91c1c]">.</p></div>
                <div className=" cursor-pointer w-[30px] h-[30px] bg-yellow-400 rounded-full border-[1px] border-[#e6e6e6]
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"><p className="text-[#facc15]">.</p></div>
                <div className=" cursor-pointer w-[30px] h-[30px] bg-orange-600 rounded-full border-[1px] border-[#e6e6e6]
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"><p className="text-[#ea580c]">.</p></div>
                <div className=" cursor-pointer w-[30px] h-[30px] bg-blue-400 rounded-full border-[1px] border-[#e6e6e6]
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"><p className="text-[#60a5fa]">.</p></div>
                </div>
                <div className="w-full flex justify-between items-center mt-4">
                <div className=" cursor-pointer w-[30px] h-[30px] bg-blue-800 rounded-full border-[1px] border-[#e6e6e6]
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"><p className="text-[#1e40af]">.</p></div>
                <div className=" cursor-pointer w-[30px] h-[30px] bg-purple-600 rounded-full border-[1px] border-[#e6e6e6]
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"><p className="text-[#9333ea]">.</p></div>
                <div className=" cursor-pointer w-[30px] h-[30px] bg-pink-600 rounded-full border-[1px] border-[#e6e6e6]
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"><p className="text-[#db2777]">.</p></div>
                <div className=" cursor-pointer w-[30px] h-[30px] bg-white rounded-full border-[1px] border-[#e6e6e6]
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"><p className="text-white">.</p></div>
                <div className=" cursor-pointer w-[30px] h-[30px] bg-black rounded-full border-[1px] border-[#e6e6e6]
                transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"><p className="text-black">.</p></div>
                </div>
                </div>
                <hr className="w-[100% ] mt-4 border-[1px] border-[#e6e6e6]" />
                <div className="text-xl text-[#666666] flex justify-between items-center mt-6 mb-6">
                <p className="font-semibold text-black">Size</p>
                <FaChevronUp />
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
                cursor-pointer flex justify-center hover:bg-black hover:text-white items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0] text-[##606060]">
                <p>XX-Small</p>
                </div>
                <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
                cursor-pointer flex justify-center hover:bg-black hover:text-white items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0] text-[##606060]">
                <p>X-Small</p>
                </div>
                <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
                cursor-pointer flex justify-center items-center rounded-xl w-[40%]  hover:bg-black hover:text-white h-[50%] bg-[#f0f0f0] text-[##606060]">
                <p>Small</p>
                </div>
                <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
                cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]">
                <p>Medium</p>
                </div>
                <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
                cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]">
                <p>Large</p>
                </div>
                <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
                cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]">
                <p>X-Large</p>
                </div>
                <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
                cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]">
                <p>XX-Large</p>
                </div>
                <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
                cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]">
                <p>3X-Large</p>
                </div>
                <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300
                cursor-pointer flex justify-center items-center rounded-xl w-[40%] h-[50%] bg-[#f0f0f0]  hover:bg-black hover:text-white text-[##606060]">
                <p>4X-Large</p>
                </div>
              </div>
              <div className="text-xl text-[#666666] flex justify-between items-center mt-6 mb-6">
                <p className="font-semibold text-black">Dress Style</p>
                <FaChevronUp />
              </div>
              <div className=" text-xl text-[#666666] flex justify-between items-center mt-4">
                <p>Casual</p>
                <FaChevronRight />
              </div>
              <div className=" text-xl text-[#666666] flex justify-between items-center mt-4">
                <p>Formal</p>
                <FaChevronRight />
              </div>
              <div className=" text-xl text-[#666666] flex justify-between items-center mt-4">
                <p>Party</p>
                <FaChevronRight />
              </div>
              <div className=" text-xl text-[#666666] flex justify-between items-center mt-4">
                <p>Gym</p>
                <FaChevronRight />
              </div>
              <div className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 cursor-pointer
              w-full h-[100%] text-white flex items-center justify-center rounded-2xl bg-black mt-8 mb-2">
                <button>Apply Filter</button>
              </div>
            </div>
          </div>
          <div id="p-box" className="w-[55%] flex-col justify-center">
            <div className="w-full flex justify-center">
            <div className=" w-[80%] flex items-center justify-between">
            <h1 id="h1" className=" text-xl sm-[460px]:text-4xl font-medium tracking-tighter">
              Casual
            </h1>
            <div className="flex items-center justify-center gap-2">
            <div className="flex w-[100%] text-xs justify-center items-center">
            <p id="sh-box" className="text-[#787878] w-full">Showing 1-10 of 100 Products</p>
            <p id="mp-box" className="text-[#787878] w-full">Sort by:<span className="text-black">Most Popular</span></p>
            <FaChevronUp id="spand" className="rotate-180" />
            </div>
            <div id="filter-b"  className=" w-[10%] block lg-[1300px]:hidden
                 cursor-pointer transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">
                  <SheetSide2/>
                </div> 
            </div>
            </div>
            </div>
            <div className="flex justify-center gap-4 mb-24 flex-wrap">
              {products.map((data) => {
                const newPrice =
                  data.price - (data.price * (data.discountPercent || 0)) / 100;
                return (
                  <Link
                    key={data._id}
                    href={`/Products/${data.name}`}
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
                  </Link>
                );
              })}
            </div>
            <hr className="border-[#e6e6e6] border-[1px]" />
            <div className="w-full  mt-4 p-2 ">
              <Pagination>
                <PaginationContent>
                  <PaginationItem className="pl-3 border-[#e6e6e6] w-[28%] border-[1px] flex justify-start md-[680px]:justify-center hover:bg-[#f0f0f0] hover transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">
                    <PaginationPrevious className=" text-xs md-[850]:text-bs" />
                  </PaginationItem>
                  <div className="flex justify-center text-xs">
                  <PaginationItem>
                    <PaginationLink
                      className="hover:bg-[#f0f0f0] text-[#808080] hover:text-black hover transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                      href="#"
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      className="hover:bg-[#f0f0f0] text-[#808080] hover:text-black hover transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                      href="#"
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem id="third">
                    <PaginationLink
                      className="hover:bg-[#f0f0f0] text-[#808080] hover:text-black hover transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                      href="#"
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem id="fourth">
                    <PaginationLink
                      className="hover:bg-[#f0f0f0] text-[#808080] hover:text-black hover transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300"
                      href="#"
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  </div>
                  <PaginationItem className="hover:bg-[#f0f0f0] border-[1px] border-[#e6e6e6] hover transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 w-[28%] flex justify-end md-[680px]:justify-center">
                    <PaginationNext className=" text-xs md-[850]:text-bs" href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

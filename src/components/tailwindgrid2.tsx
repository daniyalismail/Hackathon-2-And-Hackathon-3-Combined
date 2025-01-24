import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import "../styles/g.css";
import Link from "next/link";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating: string;
  star: number;
  oldPrice?: string;
  discountPercent?: string;
  image_url: string;
}

let products: Iproducts[] = [
  {
    title: "Vertical Striped Shirt",
    price: "$212",
    id: 1,
    rating: "5/5",
    star: 5,
    oldPrice: "$232",
    image_url: "/grid/grid-pic-5.png",
    discountPercent: "-30%",
  },
  {
    title: "LOOSE FIT BERMUDA SHORTS",
    price: "$145",
    id: 2,
    star: 4,
    rating: "4/5",
    image_url: "/grid/grid-pic-6.png",
  },
  {
    title: "COURAGE GRAPHIC T-SHIRT",
    price: "$80",
    id: 3,
    rating: "3/5",
    star: 3,
    image_url: "/grid/grid-pic-7.png",
  },
  {
    title: "Classic Black Straight-Leg Jeans",
    price: "$142.80",
    id: 4,
    rating: "4.5/5",
    star: 4,
    oldPrice: "$170",
    discountPercent: "-16%",
    image_url: "/grid/grid-pic-8.png",
  },
];

export default function TailwindGrid2() {
  return (
    <div className="w-full overflow-auto">
      <h1 className="mb-4 mt-4 sm-[556px]:text-6xl text-4xl tracking-tighter font-extrabold text-center">
        TOP SELLING
      </h1>
      {/* Responsive container */}
      <div
        id="bo"
        className="pb-5 pt-5 flex gap-6 mt-6 mb-6 overflow-x-auto snap-x snap-mandatory pl-[calc(50%-147.5px)] pr-[calc(50%-147.5px)] lg:justify-center lg:overflow-x-visible lg:pl-0 lg:pr-0"
      >
        {products.map((product) => (
          <Link href={`/Products/${product.title}`} key={product.id}>
            <div
              className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 snap-start flex-shrink-0"
            >
              <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px]">
                <Image
                  className="w-full h-full rounded-[20px]"
                  src={product.image_url}
                  alt={product.title}
                  height={298}
                  width={295}
                />
              </div>
              <p className="text-xl mt-2 font-semibold">{product.title}</p>
              <div className="flex gap-1 items-center">
                <div className="flex gap-1">
                  {Array.from({ length: product.star }, (_, index) => (
                    <FaStar className="text-[#ffc633]" key={index} />
                  ))}
                </div>
                <p className="flex items-center">{product.rating}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold">{product.price}</p>
                {product.oldPrice && (
                  <div className="flex">
                    <p className="text-2xl text-[#999999] font-semibold">
                      <del>{product.oldPrice}</del>
                    </p>
                    <div className="sale-box">
                      <p>{product.discountPercent}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 mb-4 w-full flex justify-center">
        <Link href="/NewArrival">
          <button
            className="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 py-3 rounded-3xl px-24 width-[100%] hover:bg-black hover:text-white border-[1px] bg-white border-[#e6e6e6] h-[100%]"
          >
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}
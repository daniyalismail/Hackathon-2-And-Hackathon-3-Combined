"use client";
import { useState } from "react";
import "../styles/header.css";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import { RxCross2 } from "react-icons/rx";
import { SheetSide } from "./sheet";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header() {
  const [isHeaderExtendedVisible, setIsHeaderExtendedVisible] = useState(true);

  const toggleHeaderExtendedVisibility = () => {
    setIsHeaderExtendedVisible(!isHeaderExtendedVisible);
  };

  return (
    <header className="header">

      <div
        className="header-extended"
        style={{ display: isHeaderExtendedVisible ? "flex" : "none" }}
      >
        <p>
          Sign up and get 20% off to your first order.{" "}
          <span>
            <a href="">Sign Up Now</a>
          </span>
        </p>
        <p
          className="text-xl ml-4 cursor-pointer"
          onClick={toggleHeaderExtendedVisibility}
        >
          <RxCross2 />
        </p>
      </div>
      <div className="main-header">
        <div className="middle-header">
          <div className="after-responsive">
            <div className="sheet">
              <SheetSide />
            </div>
            <div className="logo">
              <Link href="/">
                <h1>SHOP.CO</h1>
              </Link>
            </div>
          </div>
          <div className="middle-elements">
            <Select>
              <SelectTrigger className="w-[90px] border-none shadow-none">
                <SelectValue placeholder="Shop" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Men</SelectItem>
                <SelectItem value="dark">Women</SelectItem>
                <SelectItem value="system">Kids</SelectItem>
              </SelectContent>
            </Select>
            <Link href="/Sale">
              <h1>On Sale</h1>
            </Link>
            <Link href="/NewArrival">
              <h1>New Arrivals</h1>
            </Link>
            <h1 className="cursor-pointer">Brands</h1>
          </div>
          <div className="searchbar">
            <Search className="Search" />
            <input type="search" placeholder="Search for products..." />
          </div>
          <div className="last-header">
            <Search className="search" />
            <Link href="/Cart">
              <ShoppingCart className="shoppingcart" />
            </Link>
            <CircleUserRound className="circleuserround" />
          </div>
        </div>
      </div>
    </header>
  );
}

import "../styles/header.css";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Menu } from 'lucide-react';
import { Search } from "lucide-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
import { SheetSide } from "./sheet";
export default function Header() {
  return (
    
    <header className="header">
      <div className="header-extended">
        <p>
          Sign up and get 20% off to your first order.{" "}
          <span>
            <a href="">Sign Up Now</a>
          </span>
        </p>
      </div>
      <div className="main-header">
        <div className="middle-header">
            <div className="after-responsive">
            <div className="sheet">
            <SheetSide/>
            </div>
          <div className="logo">
            <h1>SHOP.CO</h1>
          </div>
          </div>
          <div className="middle-elements">
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
          <div className="searchbar">
          <Search className="Search"/>
          <input type="search" placeholder="Search for products..." />
          </div>
          <div className="last-header">
            <Search className="search"/>
            <ShoppingCart className="shoppingcart" />
            <CircleUserRound className="circleuserround" />
          </div>
        </div>
      </div>
    </header>
  );
}

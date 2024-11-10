"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { SheetDemo } from "./menu";
import logo from "../../public/logo2.jpeg";

const navItems = ["Home", "About", "Portfolio", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-4 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-32 h-16">
            <Image
              src={logo}
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-medium">Alina Lee</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden  rounded-xl border-none md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="text-gray-300  transition-colors group hidden md:flex gap-4 mt-4 px-3 mb-5">
          {" "}
          <Link
            target="_blank"
            href={"https://www.facebook.com/share/1Er84PR1oV/?mibextid=qi2Omg"}
            className="text-gray-500 text-3xl "
          >
            <FaFacebook className="w-5 h-5 hover:text-[#1877F2] " />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/hooriyaa"}
            className="text-gray-500 text-3xl"
          >
            <FaGithub className="w-5 h-5 hover:text-gray-800 " />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/hooriyaa"}
            className="text-gray-500 text-3xl "
          >
            <FaTwitter className="w-5 h-5 hover:text-[#1DA1F2] " />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/hooriyaa"}
            className="text-gray-500 text-3xl "
          >
            <FaInstagram className="w-5 h-5 hover:text-[#E4405F] " />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/hooriyaa"}
            className="text-gray-500 text-3xl "
          >
            <FaYoutube className="w-5 h-5 hover:text-[#FF0000] " />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <SheetDemo />
        </div>
      </div>
    </nav>
  );
}

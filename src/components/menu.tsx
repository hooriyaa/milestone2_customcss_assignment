import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CgMenuRightAlt } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo2.jpeg";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const navItems = ["Home", "About", "Portfolio", "Contact"];

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <CgMenuRightAlt className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-50">
        <div className="flex flex-col gap-4 mb-12">
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 px-1">
            <div className="relative w-20 h-24">
              <Image
                src={logo}
                alt="Alina Lee Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-medium">Alina Lee</span>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4 mb-10">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg text-gray-600 hover:text-blue-500 transition-colors px-4"
              >
                {item}
              </Link>
            ))}
            <div>
              <Link
                href="#"
                className="text-gray-600  transition-colors group flex gap-4 mt-4 px-3 mb-12"
              >
                <FaFacebook className="w-5 h-5 hover:text-[#1876f2d8]  " />
                <FaTwitter className="w-5 h-5 hover:text-[#1DA1F2] " />
                <FaInstagram className="w-5 h-5 hover:text-[#E4405F] " />
                <FaYoutube className="w-5 h-5 hover:text-[#FF0000] " />
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

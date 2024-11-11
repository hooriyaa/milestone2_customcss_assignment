"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import img1 from "../../public/portfolio/img1.png";
import img2 from "../../public/portfolio/img2.png";
import img3 from "../../public/portfolio/img3.png";
import img4 from "../../public/portfolio/img4.png";

export default function PortfolioSection() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 mx-auto max-w-6xl md:mt-14">
        <div className="flex flex-col justify-center md:flex-row gap-6 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 lg:w-2/5 mt-20"
          >
            <h2 className="text-4xl font-serif mb-4">Portfolio</h2>
            <p className="text-gray-600 mb-6 pr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
              scelerisque viverra at id senectus scelerisque.
            </p>
            <Button
              variant="default"
              size="lg"
              className="bg-black text-white px-6 py-2 hover:bg-gray-800"
            >
              HIRE ME
            </Button>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:w-1/2 lg:w-3/5 w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-3 ml-10">
              {/* Top row */}
              <div className="aspect-[4/3] relative h-48 sm:h-40 md:h-48 lg:h-56">
                <Image
                  alt="Portfolio 1"
                  src={img1}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="aspect-[4/3] relative h-48 sm:h-40 md:h-48 lg:h-56">
                <Image
                  alt="Portfolio 2"
                  src={img2}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Bottom row */}
              <div className="aspect-[4/3] relative h-48 sm:h-40 md:h-48 lg:h-56">
                <Image
                  alt="Portfolio 3"
                  src={img3}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="aspect-[4/3] relative h-48 sm:h-40 md:h-48 lg:h-56">
                <Image
                  alt="Portfolio 4"
                  src={img4}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

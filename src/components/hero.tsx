"use client"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroimage from "../../public/home.png";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white flex items-center px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-1 items-center">
      <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-first lg:order-last"
        >
          <Card className="overflow-hidden bg-gray-50 relative aspect-[3/4] w-full max-w-md mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <Image
                src={heroimage}
                alt="Photographer with camera"
                className="object-cover w-full h-full"
                width={400}
                height={600}
              />
            </motion.div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-6xl font-serif tracking-tight">
              Photographer
              <br />& Film Maker
            </h1>
            <p className="text-gray-600 text-xl">Los Angeles, USA</p>
          </div>

          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-xl">
            HIRE ME
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
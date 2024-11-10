"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import about from "../../public/about.png";
import Image from "next/image";

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="container mx-auto px-4 pt-28 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden">
          <Image
            src={about}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="flex-1 space-y-6 text-center md:text-left"
      >
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-gray-600 text-lg">
          Creative professional with expertise in digital design and visual
          storytelling. Passionate about creating meaningful and impactful
          experiences.
        </p>
        <Button variant="default" size="lg" className="hover:bg-black hover:text-white border-2 border-black rounded-lg">
          View My Work
        </Button>
      </motion.div>
    </section>
  );
}

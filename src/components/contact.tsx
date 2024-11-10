"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import contactImage from "../../public/home.png";

export default function ContactSection() {
  return (
    <section className="bg-[#f8fafc] h-screen flex items-center mt-5 ">
      <div className="container mx-auto px-4 mt-96 md:mt-0 overflow-hidden ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:ml-9 ">
          {/* Left Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 max-w-md"
          >
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl font-bold">Contact Me</h1>
              <p className="text-gray-600">
                I would love to get suggestions from you.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xdknoaab"
              method="POST"
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black transition-colors focus:outline-none rounded-none px-0 pl-4"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Input
                  type="email"
                  placeholder="Your e-mail address"
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black transition-colors focus:outline-none rounded-none px-0 pl-4"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Textarea
                  placeholder="Your message"
                  id="message"
                  name="message"
                  required
                  className="w-full bg-transparent border-b border-gray-300 focus:border-black transition-colors focus:outline-none resize-none h-24 rounded-none px-0 pl-4"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button
                  type="submit"
                  className="bg-black hover:bg-white hover:text-black text-white hover:border-2 hover:border-black px-8 py-3 rounded-lg transition-colors"
                >
                  SEND IT
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Side - Image */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 relative h-[500px] max-h-[90vh]"
          >
            <Image
              src={contactImage}
              alt="Contact"
              fill
              className="object-contain object-center overflow-hidden "
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

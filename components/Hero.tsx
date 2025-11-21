"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Hi, I’m <span className="text-blue-600">Mohammad Tohidul Alam</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Full Stack Developer passionate about building scalable apps with
          NestJS, React, PostgreSQL, and modern web technologies.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}

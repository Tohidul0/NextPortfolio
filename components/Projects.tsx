"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "BetProtect Portal",
    description:
      "A full-stack SaaS built with Node.js, MongoDB, React, Stripe subscriptions & SafeCreative API.",
    image: "/sad.PNG",
    link: "https://beatprotect.io/",
  },
  {
    title: "OTA B2B SaaS Platform",
    description:
      "B2B OTA platform using React, MUI, NestJS, MySQL, and Sabre/Zenith APIs with dashboards.",
    image: "/Capture.PNG",
    link: "#",
  },
  {
    title: "Blog 360",
    description:
      "A full-stack blog platform using React, Redux, MongoDB & Firebase authentication.",
    image: "/Screenshot (437).png",
    link: "#",
  },
  {
    title: "Tive Coaching Platform",
    description:
      "Coaching platform with Stripe, WebRTC, NestJS, Prisma ORM & PostgreSQL.",
    image: "/Screenshot (437).png",
    link: "#",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-purple-700/20 rounded-full blur-[220px]" />
      <div className="absolute bottom-0 right-20 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[200px]" />

      {/* Heading */}
      <div className="text-center relative z-10 mb-20">
        <h2 className="text-4xl font-bold text-white drop-shadow-lg tracking-wide">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Some of my best full-stack projects — professional, scalable and beautiful.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((p, i) => {
          const isExpanded = expanded === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group rounded-3xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-purple-400/40 hover:shadow-purple-500/20 duration-300"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-110 duration-700"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col min-h-[230px]">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {p.title}
                </h3>

                <p
                  className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
                    isExpanded ? "" : "line-clamp-3"
                  }`}
                >
                  {p.description}
                </p>

                <button
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  className="text-purple-400 hover:text-purple-300 underline text-sm mt-2"
                >
                  {isExpanded ? "See Less ↑" : "See More ↓"}
                </button>

                <a
                  href={p.link}
                  target="_blank"
                  className="mt-auto pt-4 text-purple-300 hover:text-purple-200 font-medium tracking-wide"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

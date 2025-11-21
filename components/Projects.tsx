"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const projects = [
  {
    title: "BetProtect Portal",
    description:
      "Developed and deployed BeatProtect, a full-stack web app using Node.js, MongoDB, and React for beat authorization and protection. Integrated SafeCreative API and Stripe-based subscriptions.",
    image: "/sad.PNG",
    link: "https://beatprotect.io/",
  },
  {
    title: "OTA B2B SaaS Platform",
    description:
      "Etripzone is a B2B OTA platform built with React, MUI, NestJS, and MySQL. Integrates Sabre and Zenith APIs for real-time flight operations with admin and agent dashboards.",
    image: "/Capture.PNG",
    link: "#",
  },
  {
    title: "Blog360",
    description:
      "A full-stack blog app built with React, Redux, Express, MongoDB, and Firebase authentication. Includes admin CRUD, comments, and post likes.",
    image: "/Screenshot (437).png",
    link: "#",
  },
  {
    title: "Tive A Coaching Platform",
    description:
      "Coaching and scheduling platform with Stripe payments, video calls (WebRTC), and NestJS backend. Built using Prisma ORM and PostgreSQL.",
    image: "/Screenshot (437).png",
    link: "#",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore some of my best full-stack projects — secure, scalable, and
          beautifully designed web applications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="py-10"
        >
          {projects.map((p, i) => {
            const isExpanded = expanded === i;
            return (
              <SwiperSlide
                key={i}
                className="w-72 sm:w-80 md:w-96 lg:w-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex flex-col h-full"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={300}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {p.title}
                    </h3>
                    <p
                      className={`text-gray-600 dark:text-gray-400 text-sm transition-all duration-300 ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {p.description}
                    </p>
                    <button
                      onClick={() => setExpanded(isExpanded ? null : i)}
                      className="text-blue-600 hover:underline text-sm mt-1 self-start"
                    >
                      {isExpanded ? "See Less ↑" : "See More ↓"}
                    </button>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-medium hover:underline mt-auto pt-3"
                    >
                      View Project →
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

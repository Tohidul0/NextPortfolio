"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-100 dark:bg-gray-900">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          I’m a <strong>Full Stack Developer</strong> specializing in building modern, secure,
          and scalable web applications. I work primarily with
          <span className="text-blue-500 font-medium">
            {" "}NestJS, Next.js, Prisma, PostgreSQL, and AWS
          </span>.
          I love solving backend challenges, integrating APIs, and creating seamless user experiences.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">🎯 Goal</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Build reliable software systems that simplify business workflows.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">💡 Passion</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Exploring scalable backend architectures and clean REST/GraphQL design.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">⚙️ Stack</h3>
            <p className="text-gray-600 dark:text-gray-400">
              TypeScript, NestJS, Prisma, PostgreSQL, Next.js, Docker, AWS.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

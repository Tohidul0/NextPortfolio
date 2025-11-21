"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git & GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-blue-600">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-5 py-2 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

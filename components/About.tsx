"use client";

import { motion } from "framer-motion";
import { Code, Globe, Database, Smartphone } from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: Code,
    description: "React, Next.js, TypeScript, Tailwind CSS...",
  },
  {
    name: "Backend Development",
    icon: Database,
    description: "Node.js, Express, ASP.NET, Django...",
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    description: "React Native, Flutter...",
  },
  {
    name: "Web Technologies",
    icon: Globe,
    description: "HTML5, CSS3, JavaScript, REST APIs...",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate and experienced engineer with a strong foundation
            in modern web technologies. I love solving complex problems and
            creating user-friendly applications that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With 13 years of experience in software development and project
              lead, I've worked on various projects ranging from medium business
              websites to large-scale enterprise applications. I specialize in
              creating responsive, accessible, and performant web applications
              using modern technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              I'm always eager to learn new technologies and best practices to
              stay current in this ever-evolving field. When I'm not coding, you
              can find me contributing to open-source projects, writing
              technical blog posts, or mentoring junior developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Key Skills
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <skill.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

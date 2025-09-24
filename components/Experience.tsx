"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company: "Syberry",
    location: "Austin, TX",
    period: "2021 - Present",
    description:
      "Led development of enterprise web applications using React, Node.js, and AWS. Led team of 6 developers and implemented CI/CD pipelines.",
    technologies: [
      "React",
      "Next",
      "ASP.NET",
      "Node.js",
      "AWS",
      "Docker",
      "MongoDB",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Omega Hospital",
    location: "Metairie, LA",
    period: "2018 - 2021",
    description:
      "Developed responsive web applications and REST APIs. Collaborated with design team to implement pixel-perfect UI/UX designs.",
    technologies: ["React", "Next", "ASP.NET", "PostgreSQL", "Redis", "Jest"],
  },
  {
    title: "Full Stack Developer",
    company: "Autonomous",
    location: "Fort Worth, TX",
    period: "2012 - 2018",
    description:
      "Built modern, responsive websites and  diverse industry platforms. Optimized performance and implemented SEO best practices.",
    technologies: [
      "HTML5",
      "React",
      "Next",
      ".NET",
      "Express.js",
      "CSS",
      "JavaScript",
      "jQuery",
      "WordPress",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-gray-50 dark:bg-dark-800"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development, showcasing growth
            and expertise across various roles and technologies.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card p-6 md:p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-3">
                    {experience.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/dash0820" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/eric-james-11734537b/",
  },
  { name: "Telegram", icon: Twitter, href: "https://t.me/miracle0820" },
  { name: "Email", icon: Mail, href: "mailto:ericjames.speed0422@gmail.com" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-12">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Eric K James</h3>
            <p className="text-gray-400 text-sm">
              Senior Full Stack Engineer passionate about creating amazing
              digital experiences
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">Quick Links</p>
            <div className="flex flex-col space-y-1 text-sm">
              <a
                href="#about"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Eric K James. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

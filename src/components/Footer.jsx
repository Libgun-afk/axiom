/** @format */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
  Mail,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-bold mb-4">Business Consulting</h2>
            <p className="text-gray-400">
              Transforming businesses with expert strategies and innovative
              solutions.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p>123 Business Ave</p>
              <p>Consulting City, BZ 12345</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@businessconsulting.com</p>
            </address>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © 2024 Business Consulting. All rights reserved.
          </motion.p>
          <motion.div
            className="flex space-x-4 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Follow us on ${Icon.name}`}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

/** @format */

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Target,
  Users,
  Briefcase,
  LineChart,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ServicesPage() {
  const services = [
    {
      icon: BarChart2,
      title: "Business Strategy",
      description:
        "Develop comprehensive strategies to drive your business forward and achieve long-term success.",
    },
    {
      icon: Target,
      title: "Market Analysis",
      description:
        "Gain valuable insights into your market, competitors, and target audience to make informed decisions.",
    },
    {
      icon: Users,
      title: "Organizational Development",
      description:
        "Optimize your team structure and processes to improve efficiency and productivity.",
    },
    {
      icon: Briefcase,
      title: "Financial Planning",
      description:
        "Create robust financial plans and strategies to ensure the financial health of your business.",
    },
    {
      icon: LineChart,
      title: "Performance Optimization",
      description:
        "Identify areas for improvement and implement strategies to enhance overall business performance.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description:
        "Foster a culture of innovation and develop new products or services to stay ahead of the competition.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center text-center py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=400&width=1920"
            alt="Services hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-200">
            Comprehensive consulting solutions tailored to your business needs.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <service.icon className="w-12 h-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button asChild variant="outline" className="mt-auto">
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact us today to discuss how our services can help you achieve
            your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              className="bg-white text-orange-500 hover:bg-gray-100 text-lg px-8 py-6"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

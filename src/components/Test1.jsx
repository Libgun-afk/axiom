/** @format */

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart2, Target, Users, Phone } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Test1() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-center py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.opentech.it/wp-content/uploads/2022/09/auditing-software.png"
            alt="Business consulting hero background"
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
            Илүү сайн ирээдүйн төлөө бизнесийг өөрчлөх
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Таны бизнесийг өнөөгийн нөхцөлд амжилттай хөгжүүлэхэд туслах
            мэргэжилтнүүдийн зөвлөх үйлчилгээ өрсөлдөөнт зах зээл.
          </p>
          <Button
            asChild
            className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-6"
          >
            <Link href="/contact">
              Get Started <ChevronRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Манай үйлчилгээ
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart2,
                title: "Business Strategy",
                description:
                  "Develop winning strategies for sustainable growth.",
              },
              {
                icon: Target,
                title: "Market Analysis",
                description: "Gain insights into your market and competitors.",
              },
              {
                icon: Users,
                title: "Organizational Development",
                description: "Optimize your team and processes for success.",
              },
            ].map((service, index) => (
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
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  );
}

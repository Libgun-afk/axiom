/** @format */

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Appointment",
    description:
      "Business advisory service advises current and future businesses prospects of a client.",
  },
  {
    number: "2",
    title: "Proposal",
    description:
      "Business advisory service advises current and future businesses prospects of a client.",
  },
  {
    number: "3",
    title: "Sign a Contract",
    description:
      "Business advisory service advises current and future businesses prospects of a client.",
  },
  {
    number: "4",
    title: "Consultation",
    description:
      "Business advisory service advises current and future businesses prospects of a client.",
  },
];

export default function Hehe() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* How We Work Section */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">How We Work?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative h-full">
                  <CardContent className="pt-6">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mt-4 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Video Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative aspect-video rounded-lg overflow-hidden">
            {/* <img
              src="/placeholder.svg?height=400&width=600"
              alt="Business consultation meeting"
              className="w-full h-full object-cover"
            /> */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="relative inset-0 z-10 bg-white w-full h-full object-cover"
            >
              <source
                src="https://cdn.pixabay.com/video/2022/02/24/108777-681686580_large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/20" />
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-4 text-white hover:bg-orange-600 transition-colors"
              aria-label="Play video"
            >
              <PlayCircle className="w-8 h-8" />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-orange-500 font-semibold">TALK TO US</span>
          <h2 className="text-3xl font-bold">
            The Better We Know You,
            <br />
            The More We Can Do
          </h2>
          <p className="text-gray-600">
            A consultant is a professional who provides professional or expert
            advice in a particular area such as security, management, law,
            accountancy, human resources, marketing & finance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="outline">
              <Link href="/pricing">Our Pricing</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

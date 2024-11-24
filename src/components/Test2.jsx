/** @format */

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Test2() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center text-center py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.opentech.it/wp-content/uploads/2022/09/auditing-software.png"
            alt="About us hero background"
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
            About Our Company
          </h1>
          <p className="text-xl text-gray-200">
            Delivering excellence in business consulting for over a decade.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, our company has been at the forefront of business
              consulting, helping organizations of all sizes navigate the
              complexities of the modern business landscape.
            </p>
            <p className="text-gray-600">
              With a team of experienced professionals and a commitment to
              excellence, we've helped hundreds of businesses achieve their
              goals and reach new heights of success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expertise",
                description:
                  "Our team consists of industry experts with years of experience.",
              },
              {
                icon: Users,
                title: "Client-Focused",
                description:
                  "We prioritize your needs and tailor our solutions to your specific challenges.",
              },
              {
                icon: TrendingUp,
                title: "Results-Driven",
                description:
                  "We measure our success by the tangible results we deliver to our clients.",
              },
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <reason.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Team
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Jane Smith",
                role: "COO",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Mike Johnson",
                role: "Senior Consultant",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Brown",
                role: "Marketing Director",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

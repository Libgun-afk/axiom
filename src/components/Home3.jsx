/** @format */

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CastleIcon as ChessKnight, Target, Phone } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const statsVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export default function Home3() {
  return (
    <div className="min-h-screen bg-gray-50 py-[200px] flex flex-col gap-[40px]">
      {/* Feature Cards */}
      <div className="container mx-auto px-4 pt-16">
        <div className="grid md:grid-cols-2 gap-6 -mt-32 relative z-10">
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#FFA500] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ChessKnight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Strategy</h3>
                <p className="text-gray-600 mb-4">
                  A consultant is a professional job
                </p>
                <Button
                  variant="ghost"
                  className="bg-[#FFA500] text-white hover:bg-[#FF8C00]"
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#FFA500] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Goal</h3>
                <p className="text-gray-600 mb-4">
                  Your Business goal is important for us
                </p>
                <Button
                  variant="ghost"
                  className="bg-[#FFA500] text-white hover:bg-[#FF8C00]"
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[500px] flex items-center justify-center text-center py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.opentech.it/wp-content/uploads/2022/09/auditing-software.png"
            alt="Business consulting background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {"It's About Your"} <span className="text-[#FFA500]">Life</span>
            <br />
            {"Not"} <span className="text-[#FFA500]">Just</span> {"Your Money"}
          </h1>
          <Button className="bg-[#FFA500] text-white hover:bg-[#FF8C00] text-lg px-8 py-6">
            Get Started
          </Button>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-gradient-to-r from-[#FFA500] to-[#FF8C00] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              className="text-center text-white"
              variants={statsVariants}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-5xl font-bold mb-2">23+</h2>
              <p className="text-lg">Pro Advisors</p>
            </motion.div>

            <motion.div
              className="text-center text-white"
              variants={statsVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold mb-2">12</h2>
              <p className="text-lg">Years</p>
            </motion.div>

            <motion.div
              className="text-center text-white"
              variants={statsVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-5xl font-bold mb-2">67k</h2>
              <p className="text-lg">Happy Clients</p>
            </motion.div>
          </motion.div>
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] transform -skew-y-3 -mb-8" /> */}
      </div>
      <section className="bg-orange-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Бизнесээ дараагийн түвшинд гаргахад бэлэн үү?
          </motion.h2>
          <motion.p
            className="text-xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Үнэгүй зөвлөгөө авахын тулд өнөөдөр бидэнтэй холбогдож, яаж хийх
            боломжтойг олж мэдээрэй зорилгодоо хүрэхэд тань тусална.
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
              <Link href="/contact">
                <Phone className="mr-2" />
                Холбоо барих
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

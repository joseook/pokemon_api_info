"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  return (
    <section className="home w-full h-[40rem] mt-[150px] p-[50px] overflow-hidden" id="home">
      <div className="mx-auto flex">
        <motion.div
          className={`flex flex-col justify-start pt-16 pb-8 relative xl:left-[45px] ${
            animationComplete ? "animate__animated animate__fadeInLeft" : ""
          }`}
        >
          <motion.h1
            className="xl:text-6xl font-bold text-5xl xl:text-start text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          >
            Welcome to a basic pokemon tour
          </motion.h1>
          <motion.p
            className="xl:w-9/12 xl:text-2xl tracking-tight pt-16 xl:text-start text-center text-xl "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          >
            On this journey, I will show you pokemon trainers and their
            characteristics, the story behind pokemon and much more.
          </motion.p>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
        >
          <Image
            src="/home/img/group_guild.png"
            alt="Trainners"
            priority
            className="hidden xl:block"
            width={700}
            height={1000}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

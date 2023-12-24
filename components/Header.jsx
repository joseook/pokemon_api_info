"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "@/components/support/Logo";
import Nav from "./Nav";
import ThemeToggler from "./Themes/ThemeToggler";
import MobileNav from "./MobileNav";
import { AlignJustify } from "lucide-react";

const Header = () => {
  const { hidden: titleHidden, visible: titleVisible } = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const titleVariants = {
    hidden: titleHidden,
    visible: titleVisible,
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <header className="bg-white shadow dark:bg-secondary">
        <div className="container mx-auto py-4">
          <motion.div
            className="flex items-center xl:justify-between justify-evenly p-4"
            initial={titleHidden}
            animate={titleVisible}
          >
            <Logo className="mr-4" />

            <motion.h1
              className="header-title font-bold text-2xl"
              variants={titleVariants}
            >
              Pokemon API Search
            </motion.h1>

            {/* Nav */}
            <div className="lg:block hidden">
              <Nav />
            </div>
            {/* Theme Toggler */}
            <ThemeToggler />
            <div className="flex items-center xl:hidden lg:hidden">
              {isMobile ? <MobileNav /> : <Nav />}
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;

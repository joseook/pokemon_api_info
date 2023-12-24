"use client";

import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SwiperBtn = () => {
  const swiper = useSwiper();
  const [nextButtonPressed, setNextButtonPressed] = useState(false);

  const handlePrevClick = () => {
    setNextButtonPressed(false);
    swiper.slidePrev();
  };

  const handleNextClick = () => {
    setNextButtonPressed(true);
    swiper.slideNext();
  };

  return (
    <div className="btns_swipe flex gap-5 mt-7">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button onClick={handlePrevClick}>Prev</Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={handleNextClick}
          color={nextButtonPressed ? "primary" : "default"}
        >
          Next
        </Button>
      </motion.div>
    </div>
  );
};

export default SwiperBtn;

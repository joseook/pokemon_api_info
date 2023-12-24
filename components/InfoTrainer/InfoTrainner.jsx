"use client";

import React, {useState, useEffect}from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import useMedia from "@/components/support/useMedia";

import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper/modules";
import BtnSwiper from "./navSwiperBtn/SwiperBtn";
import "swiper/swiper-bundle.css";

const InfoTrainner = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const trainnersData = [
    {
      id: 1,
      name: "Red",
      figure: (
        <Image
          src="/trainner/img/red-removebg-preview.png"
          width={170}
          height={10}
        />
      ),
      curiosity:
        "Red is the playable character in Pokémon Red, Blue, Green, and Yellow. He is known to be one of the most skilled trainers and is often associated with the starter Pokémon Charizard.",
    },
    {
      id: 2,
      name: "Ash Ketchum (Satoshi)",
      figure: (
        <Image
          src="/trainner/img/ash-removebg-preview.png"
          width={170}
          height={10}
        />
      ),
      curiosity:
        "Ash is the protagonist of the Pokémon anime series. He is recognized for his distinctive cap and always traveling with his faithful partner Pikachu. Ash is one of the most iconic and persistent trainers in the quest to become a Pokémon Master.",
    },
    {
      id: 3,
      name: "Blue (Gary Oak)",
      figure: (
        <Image
          src="/trainner/img/blue-removebg-preview.png"
          width={140}
          height={10}
        />
      ),
      curiosity:
        "Blue is Red's rival in the Pokémon Red, Blue, Green, and Yellow games. He is the grandson of Professor Oak and becomes the Pokémon League Champion. His team is powerful and challenging.",
    },
    {
      id: 4,
      name: "Misty (Kasumi)",
      figure: (
        <Image
          src="/trainner/img/misty-removebg-preview.png"
          width={130}
          height={10}
        />
      ),
      curiosity:
        "Misty is a Gym Leader and travel companion of Ash in the Pokémon anime. She specializes in Water-type Pokémon and is known for her strong personality and temperament.",
    },
    {
      id: 5,
      name: "Brock (Takeshi)",
      figure: (
        <Image
          src="/trainner/img/brock-removebg-preview.png"
          width={160}
          height={10}
        />
      ),
      curiosity:
        "Brock is a Gym Leader and also travels with Ash in the anime. He specializes in Rock-type Pokémon and later becomes a Pokémon Breeder. Brock is known for his romantic advances, especially towards Officer Jenny and Nurse Joy.",
    },
  ];

  const isMobile = useMedia("(max-width: 768px)");

  const swiperModules = [Scrollbar, A11y];

  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const newSlidesPerView = isMobile ? 1 : (Math.floor(window.innerWidth / 600));
      setSlidesPerView(newSlidesPerView);
    };

    window.addEventListener("resize", updateSlidesPerView);
    updateSlidesPerView();

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, [isMobile]);

  useEffect(() => {
    if (swiper) {
      swiper.params.slidesPerView = slidesPerView;
      swiper.update();
    }
  }, [swiper, slidesPerView]);


  return (
    <section className={`mt-[250px] shadow-md w-full h-[30rem] relative overflow-hidden pb-12 ${isMobile ? 'mobile-styling' : 'desktop-styling'}`} id="InfoTrainner">
      <Swiper
        modules={swiperModules}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        effect="cube"
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {trainnersData.map((trainer) => (
          <SwiperSlide key={trainer.id}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className={`h-full flex items-center relative ${isMobile ? 'mobile-card' : 'desktop-card'}`}
            >
              <Card className={`h-[350px] xl:w-[700px] w-[400px]  relative z-20 shadow-md ${isMobile ? 'mobile-card-content' : 'desktop-card-content'}`}>
                <CardHeader>
                  <h2 className={`text-2xl font-bold mb-2 ${isMobile ? 'mobile-title' : 'desktop-title'}`}>{trainer.name}</h2>
                </CardHeader>
                <CardContent>
                  <p className={`text-gray-700 w-9/12 ${isMobile ? 'mobile-content' : 'desktop-content'}`}>{trainer.curiosity}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://www.pokemon.com/br/pokedex/"
                    target="__blank"
                    passHref
                  >
                    <Button>{isMobile ? 'Learn' : 'Learn More'}</Button>
                  </Link>
                </CardFooter>
                <div className={`absolute top-20 right-0 w-[120px] ${isMobile ? 'mobile-image' : 'desktop-image'}`}>{trainer.figure}</div>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
        <div className="flex relative xl:left-[10px] left-[20px] z-20">
          <BtnSwiper />
        </div>
      </Swiper>
    </section>
  );
};

export default InfoTrainner;
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";

import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, EffectCube } from "swiper/modules";
import BtnSwiper from "./navSwiperBtn/SwiperBtn";
import useMedia from "@/components/support/useMedia";
import dynamic from "next/dynamic";
import "swiper/swiper-bundle.css";

const DynamicSwiper = dynamic(() => import("swiper/react"), {
  ssr: false,
});

const CuriousPokemon = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };
  {/* Dados dos Cards */}
  const pokemonsData = [
    {
      id: 1,
      name: "Pikachu",
      icon: <Image src='/curious/img/pikachu-removebg-preview.png' width={80} height={32} className="icon" />,
      feature: "Electric Attacks",
      curiosity:
        "Pikachu is an Electric-type Pokémon known for its electric attacks, especially Thunderbolt.",
    },
    {
      id: 2,
      name: "Charizard",
      icon: <Image src='/curious/img/charizard-removebg-preview.png' width={80} height={32} className="icon" />,
      feature: "Fire Breath",
      curiosity:
        "Charizard is a Fire/Flying-type Pokémon known for its powerful fire breath.",
    },
    {
      id: 3,
      name: "Mewtwo",
      icon: <Image src='/curious/img/metwo-removebg-preview.png' width={90} height={32} className="icon" />,
      feature: "Psychic Abilities",
      curiosity:
        "Mewtwo is a Psychic-type Pokémon known for its strong psychic abilities.",
    },
    {
      id: 4,
      name: "Bulbasaur",
      icon: <Image src='/curious/img/bulbasaur-removebg-preview.png' width={100} height={32} className="icon" />,
      feature: "Grass/Poison",
      curiosity:
        "Bulbasaur is a dual-type Pokémon, Grass/Poison, known for its plant bulb on its back.",
    },
    {
      id: 5,
      name: "Squirtle",
      icon: <Image src='/curious/img/squirtle-removebg-preview.png' width={70} height={32} className="icon" />,
      feature: "Water-type",
      curiosity:
        "Squirtle is a Water-type Pokémon, known for its turtle-like appearance and water-based attacks.",
    },
    {
      id: 6,
      name: "Jigglypuff",
      icon: <Image src='/curious/img/jigglypuff-removebg-preview.png' width={120} height={32} className="icon relative left-[-30px]" />,
      feature: "Normal/Fairy",
      curiosity:
        "Jigglypuff is a dual-type Pokémon, Normal/Fairy, known for its singing and sleep-inducing abilities.",
    },
    {
      id: 7,
      name: "Eevee",
      icon: <Image src='/curious/img/Eevee-removebg-preview.png' width={70} height={32} className="icon" />,
      feature: "Evolutionary Pokémon",
      curiosity:
        "Eevee is known for its multiple evolution options, including Water, Fire, Electric, and more.",
    },
    {
      id: 8,
      name: "Snorlax",
      icon: <Image src='/curious/img/Snorlax-removebg-preview.png' width={80} height={32} className="icon" />,
      feature: "Sleeping Pokémon",
      curiosity:
        "Snorlax is a Normal-type Pokémon known for its large size and love for sleeping.",
    },
    {
      id: 9,
      name: "Gengar",
      icon: <Image src='/curious/img/gengar-removebg-preview.png' width={80} height={32} className="icon" />,
      feature: "Ghost/Poison",
      curiosity:
        "Gengar is a dual-type Pokémon, Ghost/Poison, known for its mischievous nature.",
    },
  ];

  
  const isMobile = useMedia("(max-width: 768px)");
  const isLargeScreen = useMedia("(min-width: 1080px)");

  const swiperModules = [Scrollbar, A11y, EffectCube].filter(Boolean);

  const [swiper, setSwiper] = useState(null);
  const [shouldRenderSwiper, setShouldRenderSwiper] = useState(false);

  useEffect(() => {
    setShouldRenderSwiper(true);
  }, []);

  useEffect(() => {
    if (swiper) {
      const updateSlidesPerView = () => {
        swiper.params.slidesPerView = isMobile ? 1 : (Math.floor(window.innerWidth / 600));
        swiper.update();
      };

      window.addEventListener("resize", updateSlidesPerView);

      return () => {
        window.removeEventListener("resize", updateSlidesPerView);
      };
    }
  }, [swiper, isMobile]);

  return (
    <section className="CuriousPokemon shadow-md bg-[#78716c] dark:bg-transparent py-16 mt-[300px] overflow-hidden" id="CuriousPoke">
      <div className="container mx-auto relative xl:left-[40px]">
        {shouldRenderSwiper && typeof window !== 'undefined' && (
          <Swiper
            modules={swiperModules}
            spaceBetween={30}
            slidesPerView={isMobile ? "auto" : 3}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            effect={isMobile && isLargeScreen ? "cube" : undefined}
            cubeEffect={
              isMobile && isLargeScreen
                ? {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }
                : undefined
            }
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="flex relative z-20">
              <BtnSwiper />
            </div>

            {pokemonsData.map((pokemon) => (
              <SwiperSlide key={pokemon.id}>
                <div className="max-w-sm mx-auto">
                  <Card className="h-[340px] shadow-md">
                    <CardHeader>{pokemon.icon}</CardHeader>
                    <CardContent>
                      <h2 className="text-xl font-bold mb-2">{pokemon.feature}</h2>
                      <p className="text-gray-700">{pokemon.curiosity}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.pokemon.com/br/pokedex/" target="__blank" passHref>
                        <Button>Learn More</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default CuriousPokemon;
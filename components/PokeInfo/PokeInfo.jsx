"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import CardsPokemon from "./Card";
import CardInfo from "./CardInfo";

import { Button } from "@/components/ui/button";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const PokeInfo = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [pokeDex, setPokeDex] = useState(null);
  const [isMobile, setIsMobile] = useState(
    typeof window === "object" && window.innerWidth <= 768
  );

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isCardInfoOpen, setIsCardInfoOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsCardInfoOpen(true);
  };

  const handleCloseCardInfo = () => {
    setIsCardInfoOpen(false);
  };

  const pokeGet = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    const data = await Promise.all(
      res.map(async (item) => {
        const result = await axios.get(item.url);
        return result.data;
      })
    );

    const cardLimit = isMobile ? 2 : 6;
    const limitedData = data.slice(0, cardLimit);

    setPokeData(limitedData);
  };

  const handlePrevClick = () => {
    setPokeData([]);
    setUrl(prevUrl);
  };

  const handleNextClick = () => {
    setPokeData([]);
    setUrl(nextUrl);
  };

  useEffect(() => {
    if (url) {
      pokeGet();
    }
  }, [url, prevUrl, nextUrl, isMobile]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="PokeInfo w-full shadow-md h-[90rem] overflow-hidden pt-[100px] mt-[300px]"
      id="PokeInfo"
    >
      <div className="container mx-auto">
        <motion.div
          className="contentHeader flex flex-col text-center items-center gap-5"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl font-bold text-center text-red-500"
            variants={headerVariants}
          >
            Pokedex
          </motion.h1>

          <motion.p className="w-1/2 text-xl" variants={paragraphVariants}>
            Here lies basically most of the pokemon that exist, pressing on them
            will bring up some extra information such as the skills and base
            stats of the pokemon.
          </motion.p>
        </motion.div>

        <div className="pokemons-choice basis-1/2 pt-40 relative x:left-[-20%]">
          <CardsPokemon
            pokemon={pokeData}
            loading={loading}
            infoPokemon={setPokeDex}
            onCardClick={handleCardClick}
            onCloseCardInfo={handleCloseCardInfo}
          />
          <div className="btn-group flex gap-5 items-center absolute xl:left-[-15%] left-[5%] bottom-[-7%]">
            {prevUrl && <Button onClick={handlePrevClick}>Prev</Button>}
            {nextUrl && <Button onClick={handleNextClick}>Next</Button>}
          </div>
        </div>
        <div className="descriptions-pokemons basis-1/2 absolute xl:left-[50%] xl:top-[340%] top-[370%] left-[15%]">
          {isCardInfoOpen && selectedPokemon && (
            <CardInfo data={selectedPokemon} onCloseCardInfo={handleCloseCardInfo} />
          )}
        </div>
      </div>
    </section>
  );
};

export default PokeInfo;

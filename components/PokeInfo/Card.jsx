"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";



const CardsPokemon = ({ pokemon, loading, infoPokemon, onCardClick, onCloseCardInfo }) => {
  const Variantscard = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.9 } },
  };

  return (
    <>
      {loading ? (
        <CardTitle>Loading...</CardTitle>
      ) : (
        <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-[5rem]">
          {pokemon.map((item) => (
            <motion.div
              key={item.id}
              variants={Variantscard}
              initial="hidden"
              animate="visible"
            >
              <Card
                className="sm:w-[200px] xl:w-[300px] relative xl:left-[-200px] bg-[#a5b4fc] shadow-md p-3 flex flex-col"
                onClick={() => {
                  infoPokemon(item);
                  onCardClick && onCardClick(item); 
                }}
                onCloseCardInfo={onCloseCardInfo}
              >
                <CardHeader className="items-center">
                  <Image
                    src={item.sprites.front_default}
                    alt=""
                    priority
                    width={100}
                    height={10}
                  />
                </CardHeader>
                <CardContent>
                  <motion.h1>
                    <CardTitle className="mb-4">{item.id}</CardTitle>
                  </motion.h1>
                  <CardDescription className='uppercase font-bold text-black'>{item.name}</CardDescription>
                </CardContent>
                
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
};

export default CardsPokemon;

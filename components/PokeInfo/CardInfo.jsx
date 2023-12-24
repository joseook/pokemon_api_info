"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import {
  Sword,
  BarChart2,
  X
} from "lucide-react";

const CardInfo = ({ data, onCloseCardInfo }) => {
  const [isCardInfoOpen, setIsCardInfoOpen] = useState(true);

  const handleClose = () => {
    setIsCardInfoOpen(false);
    onCloseCardInfo && onCloseCardInfo(); 
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className={`flex justify-end container mx-auto ${isCardInfoOpen ? 'visible' : 'hidden'}`}>
      {data && isCardInfoOpen && (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="h-full"
        >
          <Card shadow-md className="bg-[#a5b4fc] dark:bg-transparent dark:backdrop-blur relative xl:left-[200px] xl:w-[600px] lg:w-[320px] w-[350px] xl:h-full  left-[-50px]">
            <CardHeader className="items-center">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                alt=""
                priority
                width={120}
                height={10}
              />
            </CardHeader>
            <CardContent>
              <div className="flex justify-end">
                <button className="close-button" onClick={handleClose}>
                  <X className='absolute top-[5%] right-[10%] text-[#000]' size={24} />
                </button>
              </div>
              <CardTitle className="uppercase">{data.name}</CardTitle>
              <div className="abilities uppercase pt-10">
                <CardTitle className="mb-4 flex gap-4">
                  <Sword />
                  skills
                </CardTitle>
                {data.abilities.map((poke) => (
                  <div key={poke.ability.name} className="group">
                    <CardDescription className="flex gap-4 mb-4 text-red-500">
                      {poke.ability.name}
                    </CardDescription>
                  </div>
                ))}
              </div>
              <div className="base-stats uppercase space-y-4 pt-4">
                <CardTitle className="mb-4 flex gap-4">
                  <BarChart2 />
                  Base-Stats
                </CardTitle>
                <div className="flex xl:flex-col flex-wrap gap-3">
                  {data.stats.map((poke) => (
                    <div key={poke.stat.name}>
                      {poke.stat.name}:<span className="text-red-500 ml-2">{poke.base_stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default CardInfo;

import React from 'react';
import Home from '@/components/Home/Hero';
import CuriousPoke from '@/components/CuriousPoke/CuriousPokemon';
import InfoTrainner from '@/components/InfoTrainer/InfoTrainner';
import InfoPoke from '@/components/PokeInfo/PokeInfo';
const ContentMain = () => {
  return (
    <>
      <Home />
      <CuriousPoke />
      <InfoTrainner />
      <InfoPoke />
    </>
  )
}

export default ContentMain
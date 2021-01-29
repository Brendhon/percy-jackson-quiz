import React from 'react';
import Image from 'next/image';
import aluraLogo from '../../../assets/img/alura-logo.svg';

export default function QuizLogo() {
  return (
    <Image
      src={aluraLogo}
      alt="Logo do evento"
      width={120}
      height={50}
    />
  );
}

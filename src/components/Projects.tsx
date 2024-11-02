// src/components/Projects.tsx:

import React from 'react'
import HeroText from './HeroText';

const Projects = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
      <HeroText
        text="What I've done"
        className="pointer-events-none mb-3 whitespace-pre-wrap bg-foreground bg-clip-text text-center text-8xl font-bold leading-none text-transparent"
      />
    </div>
  );
}

export default Projects
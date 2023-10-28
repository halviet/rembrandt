'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {cn} from "@/lib/utils";

const imgSet = [
  "/img/1.png",
  "/img/2.png",
  "/img/3.png",
  "/img/4.png",
  "/img/5.png",
  "/img/6.png",
]

const Background = () => {
  const [currentImg, setCurrentImg] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((current) => current === 5 ? 0 : current + 1)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
      <div className="transition-all duration-1000 absolute w-screen min-h-screen overflow-hidden -z-50">
        {imgSet.map((img, index) => (
            <Image
                src={img}
                alt={"Rembrandt"}
                className={cn(
                    "-z-10 absolute object-cover transition-all duration-[1s] overflow-hidden",
                    currentImg === index ? "opacity-100" : index === currentImg - 1 ? "opacity-0 duration-[10s]" : "opacity-0"
                )}
                fill
                key={img}
            />
        ))}
      </div>
  );
};

export default Background;
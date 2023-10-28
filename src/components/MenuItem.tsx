'use client'

import React, {useState} from 'react';
import {motion} from "framer-motion";
import Image from "next/image";
import {cn} from "@/lib/utils";

interface MenuItemProps {
  children: React.ReactNode
  img: string

}

const MenuItem = ({children, img}: MenuItemProps) => {
  const [visible, setVisible] = useState<boolean>(false)

  const variants = {
    visible: {
      y: 0
    },
    hidden: {
      y: "-100%"
    }
  }

  return (
      <div className="flex flex-col items-center justify-end h-full flex-1 overflow-hidden">
        <motion.div
            className="relative w-full h-full"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
          <motion.div
              initial={"hidden"}
              animate={visible ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 0.4,
                ease: "easeIn"
              }}
              className="flex flex-col items-center justify-end h-full flex-1 overflow-hidden"
          >
            <Image src={img} alt={"biography image"} fill className="object-cover relative"/>
          </motion.div>
        </motion.div>
        <div className={cn(
            "text-5xl z-50 absolute mb-20",
            visible && "text-white transition duration-500"
        )}>
          {children}
        </div>
      </div>
  );
};

export default MenuItem;
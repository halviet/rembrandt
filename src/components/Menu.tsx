'use client'

import React from 'react';
import Link from "next/link";
import {cn} from "@/lib/utils";
import {quintessential} from "@/lib/fonts";
import Button from "@/components/ui/Button";
import {AnimatePresence, motion} from "framer-motion";
import MenuItem from "@/components/MenuItem";

interface MenuProps {
  isOpen: boolean,
  onClose: () => void
}

const Menu = ({isOpen, onClose}: MenuProps) => {

  return (
      <AnimatePresence>
        {
            isOpen && (
                <motion.div
                    initial={{y: "-100%"}}
                    animate={{y: 0}}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    exit={{y: "-100%"}}
                    className="bg-white z-50 w-screen h-screen absolute top-0 left-0 overflow-hidden"
                >
                  <div className="absolute w-full top-0 z-50">
                    <ul className="flex w-full items-center justify-between text-black p-5 md:w-[720px] md:m-auto md:px-0 lg:max-w-[1560px] lg:w-full lg:px-20">
                      <Link href={"/"}>
                        <li
                            className={cn(
                                quintessential.className,
                                "text-lg"
                            )}
                        >
                          Rembrandt
                        </li>
                      </Link>
                      <Button onClick={onClose}>
                        <li className="text-base uppercase underline">Close</li>
                      </Button>
                    </ul>
                  </div>

                  <div
                      className={cn(
                          "text-black w-full max-h-screen h-screen flex",
                          quintessential.className
                      )}
                  >
                    <MenuItem img={"/img/menu-1.png"}>
                      <h3><sup>01</sup>Biography</h3>
                    </MenuItem>

                    <MenuItem img={"/img/menu-2.png"}>
                      <h3><sup>02</sup>Gallery</h3>
                    </MenuItem>

                    <MenuItem img={"/img/menu-3.png"}>
                      <h3><sup>03</sup>Tickets</h3>
                    </MenuItem>

                    <MenuItem img={"/img/menu-4.png"}>
                      <h3><sup>04</sup>Tickets</h3>
                    </MenuItem>
                  </div>
                </motion.div>
            )
        }
      </AnimatePresence>
  );
};

export default Menu;
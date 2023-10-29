'use client'

import React, {useState} from 'react';
import Link from "next/link";
import {cn} from "@/lib/utils";
import {quintessential} from "@/lib/fonts";
import Menu from "@/components/Menu";
import Button from "@/components/ui/Button";
import {ClassValue} from "clsx";

interface HeaderProps {
  className?: string
  logoClass?: ClassValue
  menuClass?: string
}

const Header = ({className, logoClass, menuClass}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
      <div
          className={cn(
              "w-full",
              className
          )}
      >
        <ul className="flex w-full items-center justify-between">
          <Link href={"/"}>
            <li
                className={cn(
                    quintessential.className,
                    "text-lg",
                    logoClass
                )}
            >
              Rembrandt
            </li>
          </Link>
          <Button onClick={onOpen}>
            <li className={cn("text-base uppercase underline", menuClass)}>Menu</li>
          </Button>
        </ul>

        <Menu isOpen={isOpen} onClose={onClose}/>
      </div>
  );
};

export default Header;
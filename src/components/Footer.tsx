import React from 'react';
import {cn} from "@/lib/utils";
import {quintessential} from "@/lib/fonts";
import Link from "next/link";

interface FooterProps {
  className?: string
}

const Footer = ({className}: FooterProps) => {
  return (
      <footer className={cn("w-full", className)}>
        <div className="mt-14 flex w-full items-center justify-between md:mt-28">
              <span
                  className={cn(
                      quintessential.className,
                      "text-xl hidden lg:block"
                  )}
              >©Rembrandt 2023</span>
          <nav className="w-full md:w-auto">
            <ul className="flex w-full justify-between gap-5 uppercase">
              <Link href="/biography">
                <li>Biography</li>
              </Link>
              <Link href="/gallery">
                <li>Gallery</li>
              </Link>
              <Link href="/tickets">
                <li>Tickets</li>
              </Link>
              <Link href="/contacts">
                <li>Contacts</li>
              </Link>
            </ul>
          </nav>
          <ul className="hidden md:flex md:gap-5">
            <li>+ 318 (588) 86-3686</li>
            <li>Facebook</li>
          </ul>
        </div>
      </footer>
  );
};

export default Footer;
import React from 'react';
import {cn} from "@/lib/utils";
import {quintessential} from "@/lib/fonts";

const Footer = () => {
  return (
      <footer className="w-full">
        <p className="text-sm uppercase min-w-[335px] max-w-[560px] md:text-lg">
          Rembrandt Harmens van Rijn is a famous Dutch painter, engraver, the greatest of the masters of
          chiaroscuro. He became the largest representative of the Golden Age of Dutch painting.
        </p>
        <div className="mt-14 flex w-full items-center justify-between md:mt-28">
              <span
                  className={cn(
                      quintessential.className,
                      "text-xl hidden lg:block"
                  )}
              >©Rembrandt 2023</span>
          <nav className="w-full md:w-auto">
            <ul className="flex w-full justify-between gap-5 uppercase">
              <li>Biography</li>
              <li>Gallery</li>
              <li>Tickets</li>
              <li>Contacts</li>
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
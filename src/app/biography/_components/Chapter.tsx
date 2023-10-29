import React from 'react';
import Image from "next/image";
import Button from "@/components/ui/Button";
import {quintessential} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import Link from "next/link";

interface ChapterProps {
  children: React.ReactNode
  date?: string
  header?: string
}

const Chapter = ({children, date, header}: ChapterProps) => {
  return (
      <div className="flex">
        <div className="h-screen relative w-full min-w-[530px] max-w-[830px]">
          <div
              className={cn(
                  quintessential.className,
                  "absolute z-10 text-white"
              )}
          >Rembrandt
          </div>
          <div className="h-full flex flex-col items-center justify-end overflow-hidden w-full">
            <Image
                src="/img/1.png"
                alt="Rembrandt"
                fill
                className="object-cover"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center py-12">
          <div className="flex flex-col items-center justify-between w-[720px] h-full mx-4">
            <div className="w-full flex flex-col items-end mb-12">
              <Button>
                MENU
              </Button>
            </div>

            <div className="">
              <div className="text-center mb-24 text-lg">
                <span>Preface.</span>
                <p>Rembrandt biography and personal life</p>
              </div>

              <div className={cn(
                  quintessential.className,
                  "text-center space-y-2.5 mb-12"
              )}>
                {date && (
                    <span className="">{date}</span>
                )}
                {header && (
                    <h1 className="text-6xl">{header}</h1>
                )}
              </div>

              <div className="space-y-12 text-center text-base">
                {children}
              </div>
            </div>

            <div className="">
              <Link href="/tickets" className="flex items-center gap-2">
                Buy tickets
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1L2.33333 1M11 1V9.66667" stroke="#2B2B2B"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Chapter;
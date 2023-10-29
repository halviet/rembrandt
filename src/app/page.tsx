import {cn} from "@/lib/utils";
import {quintessential} from "@/lib/fonts";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";


export default function Home() {
  return (
      <>
        <Background/>
        <div className="flex flex-col items-center justify-between p-5 text-white h-[100dvh] md:w-[720px] md:m-auto md:px-0 lg:max-w-[1560px] lg:w-full lg:px-20">
          <Header />

          <div className="flex flex-col items-center gap-5">
            <span
                className={cn(
                    quintessential.className,
                    "text-3xl"
                )}
            >1606-1669</span>
            <h1 className="text-6xl md:text-8xl">Rembrandt</h1>
            <p
                className={cn(
                    quintessential.className,
                    "text-center text-base w-[300px] md:w-[320px]"
                )}
            >All of his work is imbued with humanism <br/> and a deep understanding of human nature.</p>
          </div>

          <div className="w-full">
            <p className="text-sm uppercase min-w-[335px] max-w-[560px] md:text-lg">
              Rembrandt Harmens van Rijn is a famous Dutch painter, engraver, the greatest of the masters of
              chiaroscuro. He became the largest representative of the Golden Age of Dutch painting.
            </p>
            <Footer/>
          </div>
        </div>
      </>
  )
}

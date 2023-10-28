import localFont from "@next/font/local";
import {Quintessential} from 'next/font/google'

export const quintessential = Quintessential({ subsets: ['latin'], weight: "400" })
export const helvetica = localFont({src: "../app/(fonts)/HelveticaNeueCyr-Roman.woff2"})


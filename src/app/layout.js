import localFont from "next/font/local";
import "./globals.css";
import { Inter, Montserrat, Itim } from 'next/font/google'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Providers } from "@/providers/provider";


export const metadata = {
  title: "CleanroomAC",
  description: "Cleanroomac website service",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-monserrat',
  display: 'swap',
})

const itim = Itim({
  subsets: ['latin'],
  variable: '--font-itim',
  weight: '400',
  display: 'swap',
})

// Rubik Vinyl (Local Font)
const rubikVinyl = localFont({
  src: [
    {
      path: './fonts/RubikVinyl-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-rubik-vinyl',
  display: 'swap',
});

const bungeeSpice = localFont({
  src: [
    {
      path: "/fonts/BungeeSpice-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bungee-spice",
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          `${inter.variable} 
          ${itim.variable} 
          ${montserrat.variable} 
          ${rubikVinyl.variable} 
          ${bungeeSpice.variable}
          antialiased`
          }
      >
        <Providers>
        <Header />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}

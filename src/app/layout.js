import localFont from "next/font/local";
import "./globals.css";
import { Inter, Montserrat, Itim } from 'next/font/google'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


export const metadata = {
  title: "Airy International",
  description: "Airy International website service",
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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${itim.variable} ${montserrat.variable} antialiased`}
      >
        <div>
        <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}

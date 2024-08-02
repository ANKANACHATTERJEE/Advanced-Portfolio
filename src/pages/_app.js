import Footer from "@/components/Footer";
import NavBar from "../components/NavBar";
import "@/styles/globals.css";
import ParticleBackground from "@/components/ParticleBackground";
import { Montserrat } from "next/font/google"; 
import { useState,useEffect } from "react";

const montserrat = Montserrat({
subsets: ["latin"],
variable: "--font-mont",
});
export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>   
    <ParticleBackground/>
      <main className={`${montserrat.variable} flex flex-col font-mont bg-light w-full min-h-screen dark:bg-dark dark:text-light justify-between`} >
         
      
        <NavBar />
        <Component {...pageProps} />
        <Footer/>
      </main>
      
    </>
  );
}

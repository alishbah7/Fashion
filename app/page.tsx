import Image from "next/image";
// import { Button } from "@/components/ui/button"
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="h-[100vh]"></div>
    </div>
   
  );
}

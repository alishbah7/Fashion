'use client';
import 'aos/dist/aos.css';
import Arrivals from "@/components/arrivals";
import BrandsSlider from "@/components/brandsSlider";
import Hero from "@/components/hero";
import Sale from "@/components/sale";
import Fav from "@/components/fav";
import Download from "@/components/download";

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <BrandsSlider />
      <Arrivals />
      <Sale/>
      <Fav />
      <Download />

      {/*----===== NEWSLETTER =====----*/}
      <div className="bg-yellow-400 text-center flex flex-col items-center justify-center h-[50vh]">
        <h2 data-aos='fade-down' className="block text-3xl font-black text-white mb-[25px] tracking-wide max-[550px]:text-[18px] max-[330px]:hidden">
          JOIN SHOPPING COMMUNITY <br /> TO GET MONTHLY PROMO
        </h2>
        <h2 data-aos='fade-down' className="hidden text-3xl font-black text-white mb-2 tracking-wide max-[550px]:text-[18px] max-[330px]:block">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h2>
        <p data-aos='fade-right' className="text-white mb-6 tracking-widest max-[400px]:tracking-normal max-[350px]:text-[12px]">
          Type your email down below and be young wild generation
        </p>
        <div className="flex justify-center">
          <div className="flex bg-white w-[315px] rounded-md max-[350px]:w-[260px]" data-aos='fade-left'>
          <input
            type="email"
            placeholder="Add your email here"
            className="px-4 py-2 rounded-l-md focus:outline-none"
          />
          <button className="bg-gray-800 text-white w-[80px] m-[5px] rounded-sm max-[350px]:text-[12px] max-[350px]:p-[10px] max-[350px]:ml-[-40px]">
            SEND
          </button>
          </div>
        </div>
      </div>

    </div>    


   
  );
}

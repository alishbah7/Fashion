'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Arrivals from "@/components/arrivals";
import BrandsSlider from "@/components/brandsSlider";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Sale from "@/components/sale";
import Fav from "@/components/fav";
import Download from "@/components/download";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
}, []);
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <BrandsSlider />
      <Arrivals />
      <Sale/>
      <Fav />
      <Download />

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

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6 px-6">
          <div className="xl:col-span-5" data-aos='fade-right'>
            <h3 className="font-black mb-4 text-[40px]">FASHION</h3>
            <p className="mb-4 text-[14px] text-gray-500">
              Complete your style with awesome clothes from us.
            </p>
            <div className="flex gap-3">
              <Facebook className="text-black bg-yellow-500 rounded-md p-[5px]" data-aos='fade-up'/>
              <Instagram className="text-black bg-yellow-500 rounded-md p-[5px]" data-aos='fade-up'/>
              <Twitter className="text-black bg-yellow-500 rounded-md p-[5px]" data-aos='fade-up'/>
              <Linkedin className="text-black bg-yellow-500 rounded-md p-[5px]" data-aos='fade-up'/>
            </div>
          </div>

          <div className="hidden xl:block xl:col-span-1"></div>

          <div className="xl:col-span-2" data-aos='fade-right'>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">About</li>
              <li className="text-gray-400">Contact us</li>
              <li className="text-gray-400">Support</li>
              <li className="text-gray-400">Careers</li>
            </ul>
          </div>

          <div className="xl:col-span-2" data-aos='fade-right'>
            <h3 className="font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Share Location</li>
              <li className="text-gray-400">Orders Tracking</li>
              <li className="text-gray-400">Size Guide</li>
              <li className="text-gray-400">FAQs</li>
            </ul>
          </div>

          <div className="xl:col-span-2" data-aos='fade-right'>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Terms & Conditions</li>
              <li className="text-gray-400">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>

    </div>    


   
  );
}

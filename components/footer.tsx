'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer(){
    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease'});
    }, []);
    return(
        <footer className="bg-black text-white py-8" data-aos='fade' data-aos-delay="1000">
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
    )
}
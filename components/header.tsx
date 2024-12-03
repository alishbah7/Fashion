'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from '../public/images/logo.png';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
}, []);
  return (
    <header className='flex justify-between py-[25px] px-[5%]'  data-aos='fade-down'>
        <div>
            <Image src={logo} alt='fashion logo' className='h-auto w-[100px] sm:w-[140px]'/>
        </div>
        <div className='hidden md:block'>
            <ul className='flex gap-[40px]'>
                <li className='mt-[6px]'><Link href={''} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Catalogue</Link></li>
                <li className='mt-[6px]'><Link href={''} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Fashion</Link></li>
                <li className='mt-[6px]'><Link href={''} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Favourite</Link></li>
                <li className='mt-[6px]'><Link href={''} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Lifestyle</Link></li>
                <li><Link href={''}><Button>Sign Up</Button></Link></li>
            </ul>
        </div>
        <div className='flex gap-[5px] md:hidden'>
          <Link href={''} className='font-sans'><Button className=''>Sign Up</Button></Link>
          <Sheet>
            <SheetTrigger>
              <Menu className='block md:hidden w-[30px] h-[25px]'/>
            </SheetTrigger>
              <SheetContent>
              <div className='block md:hidden'>
                <ul className='flex flex-col gap-[40px]'>
                    <li className='mt-[6px]'><Link href={''} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Catalogue</Link></li>
                    <li className='mt-[6px]'><Link href={''} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Fashion</Link></li>
                    <li className='mt-[6px]'><Link href={''} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Favourite</Link></li>
                    <li className='mt-[6px]'><Link href={''} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Lifestyle</Link></li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
    </header>
  );
}
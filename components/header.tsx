'use client';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from '../public/images/logo.png';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {

  const [cartQuantity, setCartQuantity] = useState(0);

  //--=== CALCULATING TOTAL QUANTITY ===--//
  const calculateCartQuantity = () => {
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalQuantity = cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);
    setCartQuantity(totalQuantity);
  };

  useEffect(() => {
    calculateCartQuantity();

    //--=== REAL TIME UPDATE ===--//
    const handleCartUpdate = () => {
      calculateCartQuantity();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };

  }, []);

  return (
    <header className='flex justify-between py-[25px] px-[5%]' data-aos='fade-down'>

      {/*--=== LOGO ===--*/}
      <div>
          <Image src={logo} alt='fashion logo' className='h-auto w-[100px] sm:w-[140px]'/>
      </div>

      {/*--=== NAVLIST ===--*/}
      <div className='hidden md:block'>
          <ul className='flex gap-[40px]'>
              <li className='mt-[6px]'><Link href={'/'} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>HOME</Link></li>
              <li className='mt-[6px]'><Link href={'/catalogue'} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Catalogue</Link></li>
              <li className='mt-[6px]'><Link href={'/products'} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Products</Link></li>
              <li>
                  <Link href={'/cart'}>
                      <Button>
                          Cart 
                          <div className='w-[20px] h-[20px] bg-white rounded-full text-black flex items-center justify-center'>
                            {cartQuantity}
                          </div>
                      </Button>
                  </Link>
              </li>
          </ul>
      </div>

      {/*--=== NAVLIST FOR SMALL DEVICES ===--*/}
      <div className='flex gap-[5px] md:hidden'>
        <Link href={'/cart'} className='font-sans'><Button>Cart<div className='py-[2px] px-[4px] bg-white rounded-full text-black flex items-center justify-center'>{cartQuantity}</div></Button></Link>
        <Sheet>
          <SheetTrigger>
            <Menu className='block md:hidden w-[30px] h-[25px]'/>
          </SheetTrigger>
          <SheetContent>
            <div className='block md:hidden'>
              <ul className='flex flex-col gap-[40px]'>
                  <li className='mt-[6px]'><Link href={'/'} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Home</Link></li>
                  <li className='mt-[6px]'><Link href={'/catalogue'} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Catalogue</Link></li>
                  <li className='mt-[6px]'><Link href={'/products'} className='font-sans font-medium uppercase md:text-[12px] lg:text-lg'>Products</Link></li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </header>
  );
}

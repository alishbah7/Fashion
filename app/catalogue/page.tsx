'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import CategoryCard from "@/components/catcards";
import Link from "next/link"
import GalleryCards from "@/components/gallerycards";
import Image from 'next/image'
import trends from '../../public/images/trends.jpg'
import bestsellers from '../../public/images/bestsellers.jpg'

const Catalogue = () => {
  useEffect(() => {
          AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
  }, []);
  const categories = [
    { image: '/images/arrivalimg2.png', title: "Winter", link:"/"},
    { image: "/images/arrivalimg3.png", title: "Denim",  link:"/"},
    { image: "/images/arrivalimg1.jpg", title: "Casual", link:"/"},
  ];
  const galleryItems = [
    {
      image: '/images/gallimg1.jpg',
      title: 'Hoodies',
      link: '/'
    },
    {
      image: '/images/gallimg2.jpg',
      title: 'Jackets',
      link: '/'
    },
    {
      image: '/images/gallimg3.png',
      title: 'Sweatshirts',
      link: '/'
    },
    {
      image: '/images/gallimg4.jpg',
      title: 'T-Shirts',
      link: '/'
    },
  ];

  return (
    <div>
      <div className='h-screen'>
        <h1 className="flex items-center justify-center text-[25px] font-extrabold mt-[30px]" data-aos='fade-right'>CATALOGUE</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {categories.map((category, index) => (
            <Link href={category.link} data-aos="zoom-in">
            <CategoryCard
              key={index}
              image={category.image}
              title={category.title}
            />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className='flex flex-col items-center justify-center h-screen'>
          <h1 className="flex items-center justify-center text-[25px] font-extrabold mt-[30px]" data-aos='fade-right'>GALLERY</h1>
          <div className="flex items-center justify-center w-full h-[400px] mt-5 bg-[url('https://designtemplate.tech/images/Elegant%20Beige%20Fabric%20Background%20for%20Luxury%20and%20Fashion%20Projects-HD.webp')] bg-cover bg-no-repeat bg-center" data-aos='fade'>
            <h1 className="text-[30px] sm:text-[60px] font-extrabold tracking-wide text-[#fceaa8] font-[cursive]" style={{ textShadow: '0px 1px 25px black' } as React.CSSProperties}><i>YourFashion</i></h1>
          </div>
        </div>
        <div className='flex flex-col justify-center h-screen w-[100%]'>
          <h1 className="flex items-center justify-center md:justify-start text-[20px] sm:text-[25px] font-bold font-[cursive] tracking-wide mt-[30px] md:ml-[20px]" data-aos='fade-right'>#YourFashionTrends</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {galleryItems.map((item, index) => (
              <Link href={item.link} data-aos='zoom-in'>
              <GalleryCards
                key={index}
                image={item.image}
                title={item.title}
              />
              </Link>
            ))}
          </div>
        </div>
        <div className='h-screen'>
          <h1 className="flex items-center justify-center md:justify-start text-[20px] sm:text-[25px] font-bold font-[cursive] tracking-wide mt-[30px] md:ml-[20px]" data-aos='fade-right'>#ShopBySeasons</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[20px] md:gap-[20px] mt-5 px-[14px] mb-[40px]">
            <div>
              <Link href={''}><Image src={trends} alt="trends" width={550} height={400} className="w-[500px] sm:w-[600px] sm:h-[400px]" data-aos='zoom-in'/></Link>
              <p className="mt-2 text-[14px]" data-aos='fade-right'>Shop by</p>
              <h1 className="text-[22px] font-[cursive]" data-aos='fade-up'>Trends</h1>
            </div>  
            <div>
              <Link href={''}><Image src={bestsellers} alt="trends" width={550} height={400} className="w-[500px] sm:w-[600px] sm:h-[400px]" data-aos='zoom-in'/></Link>
              <p className="mt-2 text-[14px]" data-aos='fade-right'>Shop by</p>
              <h1 className="text-[22px] font-[cursive]" data-aos='fade-up'>Best Sellers</h1>
            </div> 
          </div> 
        </div> 
      </div>
    </div>
  );
};

export default Catalogue;
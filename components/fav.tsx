'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Image from "next/image";
import favheading from '../public/images/favheading.png';
import { ArrowRight } from 'lucide-react';
import favimg1 from '../public/images/favimg1.png'
import favimg2 from '../public/images/favimg2.png'

export default function Fav(){
    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
}, []);
    return(
        <div>
            <div className='max-[950px]:flex max-[950px]:items-center max-[950px]:justify-center max-[950px]:w-[100%]'>
                <Image data-aos='fade-right' src={favheading} alt='new arrivals' className='h-auto w-[300px] pt-[40px] ml-[180px] max-[950px]:ml-[0] max-[320px]:w-[250px]'/>
            </div>
            <div className="flex max-[587px]:flex-col justify-center items-center gap-[30px] mt-[40px]">
                <div data-aos='fade-right'>
                    <Image src={favimg1} alt='shopping website image' className='h-auto w-[250px] lg:w-[300px] xl:w-[500px]'/>
                    <div className='flex justify-between w-[250px] lg:w-[300px] xl:w-[500px] pt-[10px]'>
                        <div>
                            <h4 className='fontHoodie font-semibold tracking-tighter text-[20px]'>Trending On Instagram</h4>
                            <p className='text-[15px] text-gray-500'>Explore Now!</p>
                        </div>
                        <div>
                            <ArrowRight className='mt-[10px] text-slate-700'/>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-left'>
                    <Image src={favimg2} alt='shopping website image' className='h-auto w-[250px] lg:w-[300px] xl:w-[500px]'/>
                    <div className='flex justify-between w-[250px] lg:w-[300px] xl:w-[500px] pt-[10px]'>
                        <div>
                            <h4 className='fontHoodie font-semibold tracking-tighter text-[20px]'>All Under $40</h4>
                            <p className='text-[15px] text-gray-500'>Explore Now!</p>
                        </div>
                        <div>
                            <ArrowRight className='mt-[10px] text-slate-700'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
'use client';
import 'aos/dist/aos.css';
import Image from 'next/image';
import arrivalimg1 from '../public/images/arrivalimg1.jpg';
import arrivalimg2 from '../public/images/arrivalimg2.png';
import arrivalimg3 from '../public/images/arrivalimg3.png';
import arrivalsHeading from '../public/images/arrivalsheading.png';
import { ArrowRight } from 'lucide-react';

export default function Arrivals(){
    return(
        <div>

            {/*--=== TITLE ===--*/}
            <div className='max-[950px]:flex max-[950px]:items-center max-[950px]:justify-center max-[950px]:w-[100%]'>
                <Image data-aos='fade-right' src={arrivalsHeading} alt='new arrivals' className='h-auto w-[300px] pt-[40px] ml-[100px] max-[950px]:ml-[0] max-[320px]:w-[250px]'/>
            </div>
            
            {/*--=== NEW ARRIVALS CATEGORY ===--*/}
            <div className='mt-[20px] flex gap-[50px] items-center justify-center mainPro'>

                {/*--=== 1 ===--*/}
                <div data-aos='fade-up'>
                    <Image src={arrivalimg1} alt='shopping website image' className='h-auto w-[250px] lg:w-[300px] xl:w-[350px]'/>
                    <div className='flex justify-between w-[250px] lg:w-[300px] xl:w-[350px] pt-[10px]'>
                        <div>
                            <h4 className='fontHoodie font-semibold tracking-tighter text-[20px]'>Hoodies & Sweatshirt</h4>
                            <p className='text-[15px] text-gray-500'>Explore Now!</p>
                        </div>
                        <div>
                            <ArrowRight className='mt-[10px] text-slate-700'/>
                        </div>
                    </div>
                </div>

                {/*--=== 2 ===--*/}
                <div data-aos='fade-down'>
                    <Image src={arrivalimg2} alt='shopping website image' className='h-auto w-[250px] lg:w-[300px] xl:w-[350px]'/>
                    <div className='flex justify-between w-[250px] lg:w-[300px] xl:w-[350px] pt-[10px]'>
                        <div>
                            <h4 className='fontHoodie font-semibold tracking-tighter text-[20px]'>Coats & Parkas</h4>
                            <p className='text-[15px] text-gray-500'>Explore Now!</p>
                        </div>
                        <div>
                            <ArrowRight className='mt-[10px] text-slate-700'/>
                        </div>
                    </div>
                </div>

                {/*--=== 3 ===--*/}
                <div data-aos='fade-up'>
                    <Image src={arrivalimg3} alt='shopping website image' className='h-auto w-[250px] lg:w-[300px] xl:w-[350px]'/>
                    <div className='flex justify-between w-[250px] lg:w-[300px] xl:w-[350px] pt-[10px]'>
                        <div>
                            <h4 className='fontHoodie font-semibold tracking-tighter text-[20px]'>Tees & T-Shirt</h4>
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

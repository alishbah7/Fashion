'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Image from "next/image";
import mobile from '../public/images/mobile.png';
import Btns from '../public/images/downloadBtns.png';

export default function Download(){
    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
}, []);
    return(
        <div className="flex max-[880px]:flex-col justify-between items-center px-[20%] mt-[40px] max-[1100px]:px-[10%] max-[880px]:gap-[20px]">
            <div className="flex flex-col gap-[20px] max-[880px]:items-center max-[880px]:justify-center max-[880px]:text-center">
                <h1 className='font-black text-[30px] max-[440px]:text-[22px]' data-aos='fade-right'>DOWNLOAD APP & <br />
                GET THE VOUCHER!</h1>
                <p className="max-[440px]:text-[12px]" data-aos='fade-right'>Get 30% off for first transaction using <br />
                Rondovision mobile app for now.</p>
                <Image src={Btns} alt="buttons" className="h-auto w-[300px]" data-aos='fade-right'/>
            </div>
            <div>
                <Image data-aos='zoom-in' src={mobile} alt="mobile" className="h-auto max-[400px]:w-[250px] w-[400px]"/>
            </div>
        </div>
    )
}
'use client'; 
import 'aos/dist/aos.css';
import Image from 'next/image';
import saleimg from '../public/images/saleimg.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link'


export default function Sale(){
    return(
        <div className='w-[100%] flex justify-center items-center mt-[40px]'>

            {/*--=== SALE SECTION ===--*/}
            <div className='flex flex-row max-[1180px]:flex-col justify-between items-center px-[120px] w-[90%] h-auto rounded-3xl bgSale'>
                
                {/*--=== IMAGE ===--*/}
                <div className="w-[600px] max-[850px]:w-[250px] max-[850px]:mt-[10px] object-contain">
                    <Image src={saleimg} alt="shopping background" className="rounded-md" data-aos='fade-in' aos-delay='3000'/>
                </div>

                {/*--=== TITLE ===--*/}
                <div className='flex flex-col gap-[20px] max-[1180px]:items-center max-[1180px]:mt-[30px] max-[1180px]:text-center'>
                    <div className="flex flex-col gap-[10px] max-[1180px]:gap-[20px] max-[400px]:gap-[5px]">
                        <h1 data-aos='zoom-in' className="max-[360px]:text-[35px] max-[360px]:w-[220px] max-[500px]:text-[50px] max-[500px]:w-[260px] max-[1180px]:text-[70px] text-6xl w-[300px] px-[20px] font-black bgLets">PAYDAY</h1>
                        <h1 data-aos='zoom-in' className="font-black pl-[20px] text-[50px] max-[1180px]:text-center max-[1180px]:pl-[0] saleNow">SALE NOW</h1>
                    </div>
                    <p data-aos='fade-right' className='pl-[20px] max-[1180px]:pl-[0px] max-[1180px]:text-center max-[1180px]:w-[100%] saleP'>Spend minimal $100 get 30% off <br /> voucher code for your next purchase</p>
                    <p data-aos='fade-left' className='max-[1180px]:text-center font-sans font-semibold pl-[20px] max-[360px]:pl-[0px]'>1 June - 10 June 2021 <p className='text-[15px] font-semibold'>*Terms & Conditions apply</p></p>
                    <Link href={'/products'}><Button data-aos='fade-right' className='max-[360px]:ml-[0px]  max-[400px]:mb-[20px] ml-[20px] h-[40px] w-[100px]'>Shop Now</Button></Link>
                </div>

            </div>
            
        </div>
    )
}
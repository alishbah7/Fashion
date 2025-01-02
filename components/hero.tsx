'use client';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeroMain from '../public/images/heromain.png';
import Star from '../public/images/star.png';
import Link from 'next/link'

export default function Hero() {
    return(
        <div className='w-[100%] flex justify-center items-center overflow-hidden'>
            <div className='flex flex-row max-[1180px]:flex-col max-[1180px]:pt-[20px] max-[500px]:h-auto max-[768px]:h-[144vh] max-[1180px]:h-[158vh] max-[1180px]:px-[0] justify-between items-center pt-[130px] lg:px-[40px] xl:px-[80px] w-[90%] h-[80vh] rounded-3xl bgMain'>
                
                {/*--=== TITLE ===--*/}
                <div className='flex flex-col gap-[10px] mb-[120px] max-[1180px]:items-center'  data-aos='zoom-in'>
                    <div className="flex flex-col gap-[10px] max-[1180px]:gap-[20px] max-[360px]:gap-[5px]">
                        <h1 className="max-[360px]:text-[35px] max-[360px]:w-[220px] max-[500px]:text-[50px] max-[500px]:w-[260px] max-[1180px]:text-[70px] text-6xl w-[300px] py-[10px] px-[20px] font-black bgLets">LETS</h1>
                        <h1 className="max-[360px]:text-[35px] max-[500px]:text-[50px] max-[1180px]:text-[70px] text-6xl font-black pl-[20px]">EXPLORE</h1>
                        <h1 className="max-[360px]:text-[35px] max-[360px]:w-[240px] max-[500px]:text-[50px] max-[500px]:w-[280px] max-[1180px]:text-[70px] max-[1180px]:w-[380px] text-6xl w-[350px] py-[10px] px-[20px] font-black bgUni">UNIQUE</h1>
                        <h1 className="max-[360px]:text-[35px] max-[500px]:text-[50px] max-[1180px]:text-[70px] text-6xl font-black pl-[20px]">CLOTHES.</h1>
                    </div>
                    <p className='max-[360px]:text-[12px] max-[360px]:pl-[0px] max-[500px]:tracking-normal max-[500px]:text-[15px] pl-[20px] font-sans text-[20px] tracking-wider'>Live for Influential and Innovative fashion!</p>
                    <Link href={'/products'}><Button className='max-[360px]:ml-[0px] ml-[20px] h-[40px] w-[100px]'>Shop Now</Button></Link>
                </div>

                {/*--=== IMAGE ===--*/}
                <div className="relative mt-[90px] w-[400px] md:w-[550px] max-[350px]:h-[220px] max-[500px]:h-[260px] h-[600px] max-[1180px]:mt-[-80px] max-[500px]:ml-[100px] max-[350px]:ml-[150px]">
                    <Image
                        src={HeroMain}
                        alt="shopping background"
                        className="max-[500px]:w-[300px] max-[350px]:w-[250px] w-[500px]"
                        data-aos='fade-left'
                    />
                    <Image
                        src={Star}
                        alt="star"
                        className="absolute w-[30px] top-[2%] left-[-3%] max-[388px]:w-[20px] max-[350px]:left-[2%] max-[290px]:w-[15px]"
                        data-aos='zoom-in'
                    />
                    <Image
                        src={Star}
                        alt="star"
                        className="absolute w-[30px] top-[65%] left-[2%] max-[1180px]:top-[85%] max-[388px]:w-[20px] max-[290px]:w-[15px]" 
                        data-aos='zoom-in'
                    />
                    <Image
                        src={Star}
                        alt="star"
                        className="absolute w-[30px] top-[60%] right-[10%] max-[1180px]:top-[80%] max-[768px]:right-[2%] max-[500px]:right-[25%] max-[388px]:w-[20px] max-[350px]:left-[55%] max-[350px]:top-[75%] max-[290px]:w-[15px]"
                        data-aos='zoom-in'
                    />
                    <Image
                        src={Star}
                        alt="star"
                        className="absolute w-[30px] top-[7%] right-[15%] max-[500px]:right-[30%] max-[388px]:w-[20px] max-[350px]:left-[45%] max-[290px]:w-[15px]"
                        data-aos='zoom-in'
                    />
                </div>
                
            </div>
        </div>
    )
}
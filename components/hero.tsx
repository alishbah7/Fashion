import Image from 'next/image';
// import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroMain from '../public/images/heromain.png';
import Star from '../public/images/star.png';

export default function Hero() {
    return(
        <div className='w-[100%] flex justify-center items-center'>
            <div className='flex flex-row max-[1180px]:flex-col max-[1180px]:pt-[20px] max-[768px]:h-[138vh] max-[1180px]:h-[158vh] max-[1180px]:px-[0] justify-between items-center pt-[130px] md:px-[20px] lg:px-[40px] xl:px-[100px] w-[90%] h-[80vh] rounded-3xl bgMain'>
                <div className='flex flex-col gap-[20px] mb-[120px] max-[1180px]:items-center'>
                    <div className="flex flex-col gap-[10px] max-[1180px]:gap-[20px]">
                        <h1 className="max-[1180px]:text-[70px] text-6xl w-[300px] py-[10px] px-[20px] font-black bgLets">LETS</h1>
                        <h1 className="max-[1180px]:text-[70px] text-6xl font-black pl-[20px]">EXPLORE</h1>
                        <h1 className="max-[1180px]:text-[70px] max-[1180px]:w-[380px] text-6xl w-[350px] py-[10px] px-[20px] font-black bgUni">UNIQUE</h1>
                        <h1 className="max-[1180px]:text-[70px] text-6xl font-black pl-[20px]">CLOTHES.</h1>
                    </div>
                    <p className='pl-[20px] font-sans text-[20px] tracking-wider'>Live for Influential and Innovative fashion!</p>
                    <Button className='ml-[20px] h-[40px] w-[100px]'>Shop Now</Button>
                </div>
                <div className="relative w-[400px] md:w-[550px] h-[600px] max-[1180px]:mt-[-80px]">
                    <Image
                        src={HeroMain}
                        alt="shopping background"
                        className="h-auto w-full max-[1260px]:mt-[5px]"
                    />
                    <Image
                        src={Star}
                        alt="star"
                        className="absolute w-[30px] top-[2%] left-[-3%]"
                    />
                    <Image
                        src={Star}
                        alt="star"
                        className="absolute w-[30px] top-[75%] left-[2%] max-[1180px]:top-[85%]"
                    />
                    <Image
                        src={Star}
                        alt="star"
                        className="absolute w-[30px] top-[70%] right-[2%] max-[1180px]:top-[80%]"
                    />
                    <Image
                        src={Star}
                        alt="star"
                        className="absolute w-[30px] top-[7%] right-[15%]"
                    />
                </div>
            </div>
        </div>
  
    )
}
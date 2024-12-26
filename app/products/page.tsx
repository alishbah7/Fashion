'use client';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

async function FetchProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductsPage() {
  let products: Product[] = [];

  try {
    products = await FetchProducts();
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <div>
      <h1 className="w-[100%] flex justify-center items-center text-[25px] font-extrabold mt-[30px]" data-aos='fade-right'>ALL PRODUCTS</h1>
    </div >
    {/* flex flex-col justify-center items-center */}
    <div className='grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid-cols-4 gap-6 py-[38px] px-[20px] sm:px-[50px]'>
        {products.map((product) => (
          <Link href={''} data-aos='zoom-in'>
            <div key={product.id}>
              <Image src={product.image} alt='shopping website image' className='h-auto w-[250px] xl:w-[300px]' width={300} height={200}/>
              <div className='flex justify-between pt-[10px]'>
                <div>
                    <h4 className='fontHoodie font-semibold tracking-tighter text-[15px] sm:text-[20px]'>{product.name}</h4>
                    <p className='text-[15px] text-gray-500'>$ {product.price}</p>
                </div>
                <div>
                    <ArrowRight className='sm:mt-[10px] text-slate-700 w-[15px]'/>
                </div>
            </div>
            </div>
          </Link>
        ))}
        </div>
    </div>
  );
}

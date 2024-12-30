'use client';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

export default function ProductsPage() {

  const [products, setProducts] = useState<Product[]>([]);

  //--=== FETCHING PRODUCTS FROM API ===--//
  useEffect(() => {
    async function FetchProducts() {
      try {
        const res = await fetch('/api/products', { cache: 'no-store' });
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    FetchProducts();
  }, []);

  return (
    <div>

      {/*----===== PRODUCTS HEADING =====----*/}
      <div>
        <h1 className="w-[100%] flex justify-center items-center text-[25px] font-extrabold mt-[30px]" data-aos='fade-right'>ALL PRODUCTS</h1>
      </div>

      {/*----===== PRODUCTS DISPLAYMENT =====----*/}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-[38px] px-[20px] sm:px-[50px]'>
        {products.map((product) => (

          //--=== LINK TO DETAIL OF A PRODUCT ===--//
          <Link href={`/details/${product.id}`} data-aos='zoom-in' key={product.id}>
            <div>

              {/*----===== IMAGE =====----*/} 
              <Image src={product.image} alt='shopping website image' className='h-auto w-[250px] xl:w-[300px]' width={300} height={200} />
              
              {/*----===== DETAILS =====----*/}
              <div className='flex justify-between pt-[10px]'>

                {/*----===== NAME & PRICE =====----*/}
                <div>
                  <h4 className='fontHoodie font-semibold tracking-tighter text-[15px] sm:text-[20px]'>{product.name}</h4>
                  <p className='text-[15px] text-gray-500'>$ {product.price}</p>
                </div>

                {/*----===== ARROW ICON =====----*/}
                <div>
                  <ArrowRight className='sm:mt-[10px] text-slate-700 w-[15px]' />
                </div>

              </div>

            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}

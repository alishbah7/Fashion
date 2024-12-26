'use client';
import 'aos/dist/aos.css';
import Image from 'next/image';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

export default async function ProductDetails({ params }: { params: { id: string } }) {

  const response = await fetch(`/api/products`, { cache: 'no-store' });
  const products: Product[] = await response.json();
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-[10px] xl:justify-between items-center rounded-md overflow-hidden md:px-[100px] xl:px-[230px] h-auto lg:h-[100vh] py-[60px]">
      <div className="w-[250px] sm:w-[400px] md:w-[500px]" data-aos="zoom-in">
        <Image
          src={product.image}
          alt={product.name}
          className="h-[400px] md:h-[450px] w-[250px] sm:w-[400px] md:w-[500px]"
          width={600}
          height={400}
        />
      </div>
      <div>
        <div className="p-[10px] sm:p-6 max-[400px]:w-[280px]">
          <div className="border-b border-gray-500 pb-[30px]">
            <h2 className="text-[30px] font-bold text-gray-800 xl:mt-[-50px] px-[14px]" data-aos="fade-left">
              {product.name}
            </h2>
            <p
              data-aos="fade-left"
              className="flex items-center justify-center text-lg rounded-full font-semibold text-[11.9px] mx-[14px] text-white w-[120px] h-[30px] bg-black mt-[20px]"
            >
              ${product.price}
            </p>
          </div>
          <p className="mt-[30px] text-gray-600 w-[380px] max-[400px]:w-[270px] px-[10px]" data-aos="fade-up">
            {product.description}
          </p>
          <button
            data-aos="fade-up"
            className="flex gap-[1px] mt-4 bg-black text-white py-2 px-4 rounded-md"
          >
            <i className="bx bx-cart pr-[6px] text-[20px]"></i>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

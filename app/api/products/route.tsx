import { NextRequest, NextResponse } from 'next/server';

let myProducts = [
  { id: 1, image: '/images/hoodie1.jpg', name: 'Paradise 1970', description: 'Bluish hoodie with exotic print on it. Experience comfort and style with our premium hoodie, crafted from ultra-soft, high-quality fabric for all-day coziness. Designed with a relaxed fit, it features a spacious front pocket, adjustable drawstring hood, and ribbed cuffs for a snug feel.' , price: 200 },
  { id: 2, image: '/images/hoodie2.jpg', name: 'Perfect', description: 'Light purple "PERFECT" hoodie. Experience comfort and style with our premium hoodie, crafted from ultra-soft, high-quality fabric for all-day coziness. Designed with a relaxed fit, it features a spacious front pocket, adjustable drawstring hood, and ribbed cuffs for a snug feel.', price: 150 },
  { id: 3, image: '/images/hoodie3.jpg', name: 'Brownie', description: 'Simple but great (like your dreams) in fabric. Experience comfort and style with our premium hoodie, crafted from ultra-soft, high-quality fabric for all-day coziness. Designed with a relaxed fit, it features a spacious front pocket, adjustable drawstring hood, and ribbed cuffs for a snug feel.', price: 120 },
  { id: 4, image: '/images/hoodie4.jpg', name: 'Lilac', description: 'Lilac hoodie. Experience comfort and style with our premium hoodie, crafted from ultra-soft, high-quality fabric for all-day coziness. Designed with a relaxed fit, it features a spacious front pocket, adjustable drawstring hood, and ribbed cuffs for a snug feel.', price: 250 },
  { id: 5, image: '/images/jacket1.jpg', name: 'Midnight', description: 'Crafted from premium materials, this sleek jacket offers a perfect blend of comfort, durability, and elegance. Its tailored fit ensures a sharp silhouette, while the versatile design makes it ideal for both casual outings and formal occasions.' , price: 200 },
  { id: 6, image: '/images/jacket3.jpg', name: 'Blue Wear', description: 'Crafted from premium materials, this sleek jacket offers a perfect blend of comfort, durability, and elegance. Its tailored fit ensures a sharp silhouette, while the versatile design makes it ideal for both casual outings and formal occasions.', price: 150 },
  { id: 7, image: '/images/jacket2.jpg', name: 'Heaven', description: 'Crafted from premium materials, this sleek jacket offers a perfect blend of comfort, durability, and elegance. Its tailored fit ensures a sharp silhouette, while the versatile design makes it ideal for both casual outings and formal occasions.', price: 120 },
  { id: 8, image: '/images/jacket4.jpg', name: 'Black Fit', description: 'Crafted from premium materials, this sleek jacket offers a perfect blend of comfort, durability, and elegance. Its tailored fit ensures a sharp silhouette, while the versatile design makes it ideal for both casual outings and formal occasions.', price: 250 },
  { id: 9, image: '/images/sweatshirt1.jpg', name: 'Cozy Green', description: 'Perfect for layering on chilly days or wearing solo for a casual vibe, the CozyCore Sweatshirt pairs seamlessly with jeans, joggers, or shorts.' , price: 200 },
  { id: 10, image: '/images/sweatshirt3.jpg', name: 'Purple Wave', description: 'Perfect for layering on chilly days or wearing solo for a casual vibe, the CozyCore Sweatshirt pairs seamlessly with jeans, joggers, or shorts.', price: 150 },
  { id: 11, image: '/images/sweatshirt2.jpg', name: 'Wild Black', description: 'Perfect for layering on chilly days or wearing solo for a casual vibe, the CozyCore Sweatshirt pairs seamlessly with jeans, joggers, or shorts.', price: 120 },
  { id: 12, image: '/images/sweatshirt4.jpg', name: 'Warm', description: 'Perfect for layering on chilly days or wearing solo for a casual vibe, the CozyCore Sweatshirt pairs seamlessly with jeans, joggers, or shorts.', price: 250 },
  { id: 13, image: '/images/tshirt1.jpg', name: 'Floral', description: 'Elevate your everyday style with our tees – where comfort meets effortless fashion. Crafted from 100% premium cotton, this tee offers a soft, breathable feel for all-day comfort. The classic fit flatters every body type, while the modern design adds a touch of sophistication to your casual wardrobe.' , price: 200 },
  { id: 14, image: '/images/tshirt3.jpg', name: 'Cozy Chic', description: 'Elevate your everyday style with our tees – where comfort meets effortless fashion. Crafted from 100% premium cotton, this tee offers a soft, breathable feel for all-day comfort. The classic fit flatters every body type, while the modern design adds a touch of sophistication to your casual wardrobe.', price: 150 },
  { id: 15, image: '/images/tshirt2.jpg', name: 'Charm', description: 'Elevate your everyday style with our tees – where comfort meets effortless fashion. Crafted from 100% premium cotton, this tee offers a soft, breathable feel for all-day comfort. The classic fit flatters every body type, while the modern design adds a touch of sophistication to your casual wardrobe.', price: 120 },
  { id: 16, image: '/images/tshirt4.jpg', name: 'Glam', description: 'Elevate your everyday style with our tees – where comfort meets effortless fashion. Crafted from 100% premium cotton, this tee offers a soft, breathable feel for all-day comfort. The classic fit flatters every body type, while the modern design adds a touch of sophistication to your casual wardrobe.', price: 250 },

];

// Handle GET Request
export async function GET() {
  return NextResponse.json(myProducts);
}

// Handle POST Request
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { image, name, description, price } = body;

  if (!image || !name || !description || !price) {
    return new NextResponse(
      JSON.stringify({ message: 'Missing required fields' }),
      { status: 400 }
    );
  }

  const newProduct = {
    id: myProducts.length + 1,
    image,
    name,
    description,
    price,
  };

  myProducts.push(newProduct);

  return NextResponse.json(newProduct, { status: 201 });
}

// Handle other methods
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 405,
    headers: {
      Allow: 'GET, POST',
    },
  });
}

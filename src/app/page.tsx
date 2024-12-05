"use client";

import GET_PRODUCTS from '@/apollo/query/getProducts';
import { AvatarCustom } from '@/components/custom/avatarCustom';
import { MainBackground } from '@/components/custom/mainBackground';
import { MobileNavigation } from '@/components/custom/mobileNavigation';
import { Button } from '@/components/ui/button';
import { useQuery } from '@apollo/client';

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function Home() {
  const { loading, error, data } = useQuery<{ products: Product[] }>(GET_PRODUCTS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {/* <h1>Products 2</h1>

      <div>
        <Button>Click me</Button>
        <AvatarCustom
          photo="https://github.com/shadcn.png"
          name="Shadcn"
        />
      </div>
      <ul>
        {data?.products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul> */}
      <div className='max-h-64'>
        <MainBackground
          title={<>Sanjana Airlines, <br /> Sajana Textiles.</>}
          subTitle='Get the best advices from our experts, including expert artists,painters, marathon enthusiasts and RDX, totally free.'
        />
      </div>
    </div>
  );
}
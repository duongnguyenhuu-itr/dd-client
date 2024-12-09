"use client";

import GET_PRODUCTS from '@/apollo/query/getProducts';
import { AvatarCustom } from '@/components/custom/avatarCustom';
import { MainBackground } from '@/components/custom/mainBackground';
import { HomeCarousel } from '@/components/home/homeCarousel';
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
      {/* Banner Carousel */}
      <MainBackground
        title={<>Sanjana Airlines, <br /> Sajana Textiles.</>}
        subTitle='Get the best advices from our experts, including expert artists,painters, marathon enthusiasts and RDX, totally free.'
      />
      <section className='bg-red-50'>
        <div className='p-4'>
          <div className=''>Sell</div>
          <HomeCarousel />
        </div>
      </section>
      <section className='bg-red-50'>
        <div className='p-4'>
          <div className=''>Best seller</div>
          <HomeCarousel />
        </div>
      </section>
      <section className='bg-red-50'>
        <div className='p-4'>
          <div className=''>Coming soon</div>
          <HomeCarousel />
        </div>
      </section>
      <section className='bg-red-50'>
        <div className='p-4'>
          <div className=''>Combo</div>
          <HomeCarousel />
        </div>
      </section>
      <section className='bg-red-50'>
        Reason choose us
      </section>
      <div className='max-h-64'>
      </div>
    </div>
  );
}
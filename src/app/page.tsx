"use client";

import { AvatarCustom } from '@/components/custom/avatarCustom';
import { Button } from '@/components/ui/button';
import { gql, useQuery } from '@apollo/client';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      price
    }
  }
`;

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function Home() {
  const { loading, error, data } = useQuery<{ products: Product[] }>(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products 2</h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
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
      </ul>
    </div>
  );
}
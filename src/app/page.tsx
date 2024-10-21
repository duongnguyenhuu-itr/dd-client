"use client";

import { gql, useQuery } from '@apollo/client';

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
'use client'
import CREATE_PRODUCT from "@/apollo/mutation/createProduct";
import { useMutation } from "@apollo/client";

export default function About() {
  const [createProduct, { data, loading, error }] = useMutation(CREATE_PRODUCT);

  const handleCreateProduct = () => {
    createProduct({
      variables: {
        input: {
          name: "New Product",
          description: "This is a new product",
          price: 99.99,
        }
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={handleCreateProduct}>Create Product</button>
      {data && (
        <div>
          <h3>Product Created:</h3>
          <p>Name: {data.createProduct.name}</p>
          <p>Description: {data.createProduct.description}</p>
          <p>Price: ${data.createProduct.price}</p>
        </div>
      )}
    </div>
  );
}
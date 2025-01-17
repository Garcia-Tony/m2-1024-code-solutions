import { Link } from 'react-router-dom';
import { Product, products } from '../lib';
import { useEffect, useState } from 'react';
import { toDollars } from '../lib';

export function Catalog() {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('http://localhost:8080/api/products');
        if (!res.ok) {
          throw new Error(`Response Status: ${res.status}`);
        }

        const json = await res.json();
        setItems(json);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    }

    getData();
  }, []);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1 style={{ color: 'black', marginLeft: '100px' }}>Product Catalog</h1>
      <hr />
      <div
        className="full"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '20px',
        }}>
        {items.map((item) => (
          <div
            key={item.productId}
            style={{ margin: '10px', cursor: 'pointer' }}>
            <ItemCard product={item} />
            <Link
              to={`/products/${item.productId}`}
              style={{ display: 'block', textDecoration: 'none' }}></Link>
          </div>
        ))}
      </div>
    </div>
  );
}



type CardProps = {
  product: Product;
};

function ItemCard({ product }: CardProps) {
  return (
    <div
      className="whole"
      style={{ paddingBottom: '25px', paddingLeft: '25px' }}>
      <Link to={`/products/${product.productId}`}>
        <div
          className="image-catalog"
          style={{
            width: '300px',
            height: '575px',
            border: '0.5px solid black',
            paddingLeft: '50px',
            paddingRight: '50px',
          }}>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: '300px', height: '300px', paddingTop: '40px' }}
          />
          <h5
            style={{ color: 'black', fontSize: '20px', marginBottom: '-10px' }}>
            {product.name}
          </h5>
          <p style={{ color: 'grey', fontSize: '18px' }}>
            {toDollars(product.price)}
          </p>
          <p
            style={{
              color: 'black',
              fontSize: '16px',
              marginTop: '35px',
              width: '300px',
            }}>
            {product.shortDescription}
          </p>
        </div>
      </Link>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product, readCatalog, toDollars } from '../lib';

export function Catalog() {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItems() {
      try {
        const values = await readCatalog();
        setItems(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
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
      <h1 style={{ color: 'black', marginLeft: '100px' }}>Catalog</h1>
      <hr />
      <div
        className="full"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '20px',
        }}>
        {items?.map((item) => (
          <div key={item.productId}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  item: Product;
};

function ItemCard({ item }: CardProps) {
  return (
    <div
      className="whole"
      style={{ paddingBottom: '25px', paddingLeft: '25px' }}>
      <Link to={`/details/${item.productId}`}>
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
            src={item.imageUrl}
            alt={item.name}
            style={{ width: '300px', height: '300px', paddingTop: '40px' }}
          />
          <h5
            style={{ color: 'black', fontSize: '20px', marginBottom: '-10px' }}>
            {item.name}
          </h5>
          <p style={{ color: 'grey', fontSize: '18px' }}>
            {toDollars(item.price)}
          </p>
          <p
            style={{
              color: 'black',
              fontSize: '16px',
              marginTop: '35px',
              width: '300px',
            }}>
            {item.shortDescription}
          </p>
        </div>
      </Link>
    </div>
  );
}

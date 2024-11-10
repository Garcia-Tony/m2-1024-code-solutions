import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product, readProduct, toDollars } from '../lib';

export function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadProduct(Number(productId));
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading Product {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, imageUrl, shortDescription, longDescription, price } = product;

  const handleAdd = () => {
    alert(`Added ${product.name} to cart`);
    navigate('/');
  };

  return (
    <div className="container" style={{ paddingLeft: '15px' }}>
      <div
        className="border"
        style={{
          border: '1px solid black',
          padding: '25px',
          marginRight: '20px',
          paddingBottom: '40px',
        }}>
        <div>
          <Link to="/" style={{ color: 'grey' }}>
            &lt; Back to Catalog
          </Link>
        </div>

        <div className="flex" style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            className="image"
            style={{ width: '300px', height: 'auto', marginTop: '20px' }}>
            <img
              src={imageUrl}
              alt={name}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div
            className="details"
            style={{
              marginLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <h1
              className="name"
              style={{
                fontSize: '30px',
                color: 'black',
                fontWeight: 'bold',
              }}>
              {name}
            </h1>

            <p
              className="price"
              style={{ fontSize: '18px', color: 'grey', marginTop: '-15px' }}>
              {toDollars(price)}
            </p>
            <p
              className="short"
              style={{ fontSize: '16px', color: 'black', marginTop: '-15px' }}>
              {shortDescription}
            </p>
          </div>
        </div>

        <div>
          <p
            className="long"
            style={{
              fontSize: '18px',
              whiteSpace: 'pre-wrap',
              color: 'black',
              paddingTop: '30px',
              marginBottom: '-20px',
            }}>
            {longDescription}
          </p>
        </div>
      </div>
      <button
        onClick={handleAdd}
        style={{
          backgroundColor: '#F7F5F8ff',
          color: 'black',
          fontSize: '15px',
          marginTop: '10px',
          marginBottom: '10px',
        }}>
        Add to Cart
      </button>
    </div>
  );
}

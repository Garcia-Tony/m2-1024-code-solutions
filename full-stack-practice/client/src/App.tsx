import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { Catalog } from './pages/Catalog';

export function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Catalog />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

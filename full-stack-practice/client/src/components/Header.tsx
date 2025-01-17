import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <nav>
        <ul
          style={{
            display: 'flex',
            gap: '30px',
            fontSize: '20px',
            marginTop: '20px',
            backgroundColor: '#242424ff',
            listStyleType: 'none',
            paddingBottom: '20px',
          }}>
          <li>
            <Link
              to="/about"
              style={{
                color: 'white',
              }}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{
                color: 'white',
              }}>
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

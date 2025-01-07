import { Link, Outlet } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [open, setOpen] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const openClose = () => setOpen(!open);

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          borderRadius: '8px',
        }}>
        <button
          onClick={openClose}
          style={{
            cursor: 'pointer',
            backgroundColor: '#242424ff',
            width: '70px',
            height: '60px',
            outline: 'none',
          }}>
          <IoMdMenu size={35} />
        </button>

        {open ? (
          <div
            style={{
              padding: '10px',
              color: 'white',
              backgroundColor: '#242424ff',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <div
              style={{
                fontSize: '35px',
                whiteSpace: 'nowrap',
                marginLeft: '10px',
                fontWeight: 'bold',
              }}>
              Hylian Shopping
            </div>

            <ul>
              {menuItems.map((menu, index) => (
                <li
                  key={menu.name}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    padding: '10px',
                    display: 'flex',
                    paddingBottom: '12px',
                    fontSize: '18px',
                    alignItems: 'center',
                    backgroundColor: hoveredIndex === index ? '#333333' : '',
                  }}>
                  {menu.name === 'Catalog' && (
                    <img
                      src="/catalog.png"
                      style={{
                        marginRight: '6px',
                        width: '20px',
                        height: '20px',
                        filter: 'invert(1)',
                      }}
                    />
                  )}

                  {menu.name === 'About' && (
                    <img
                      src="/hylian-emblem.svg"
                      style={{
                        marginRight: '6px',
                        width: '21px',
                        height: '15px',
                        filter: 'invert(1)',
                      }}
                    />
                  )}
                  <Link to={menu.path} style={{ color: 'white' }}>
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <img
              src="/hylian-emblem.svg"
              style={{
                width: '21px',
                marginLeft: '4px',
                height: '15px',
                filter: 'invert(1)',
              }}
            />

            <img
              src="/catalog.png"
              style={{
                marginTop: '30px',
                marginLeft: '4px',
                width: '21px',
                height: '15px',
                filter: 'invert(1)',
              }}
            />
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
}

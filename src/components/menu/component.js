import { Product } from '../product/component';

export const Menu = ({ menu }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Menu</h2>
      {menu.length > 0 ? (
        menu.map(({ id, name, ingredients, price }) => (
          <Product
            key={id}
            name={name}
            ingredients={ingredients}
            price={price}
          />
        ))
      ) : (
        <p style={{ margin: '10px' }}>Coming soon...</p>
      )}
    </div>
  );
};

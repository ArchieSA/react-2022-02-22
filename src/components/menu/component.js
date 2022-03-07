import { Product } from '../product/component';

export const Menu = ({ menu }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Menu</h2>
      {menu.map(({ id, name, ingredients, price }) => (
        <Product key={id} name={name} ingredients={ingredients} price={price} />
      ))}
    </div>
  );
};

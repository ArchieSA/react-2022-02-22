import { Product } from "../product/component";

const Menu = ({ menu }) => {
    return (
        <div>
            {
                menu.map(({ id, name, ingredients, price }) => 
                <Product key={id} name={name} ingredients={ingredients} price={price} />)
            }
        </div>
    );
}

export default Menu;
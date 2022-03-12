import { Product } from "../product/component";
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import {Alert} from "../alert/component";

const Menu = ({ menu }) => {
    return (
        <div className={styles.menu}>
            <div>
                {menu.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

Menu.propTypes = {
    menu: PropTypes.array,
};


Menu.defaultProps = {
    menu: [],
};

export default Menu;
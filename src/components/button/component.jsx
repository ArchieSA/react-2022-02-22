import styles from './styles.module.css';

const icons = {
    plus: '+',
    minus: '-',
    clear: '⨉'
};

export const Button = ({ icon, text, ...props }) => {
    const buttonIcon = icon && <span className={styles.icon}>{icons[icon]}</span>;
    const buttonText = text && <span className={styles.text}>{text}</span>;
    return (
    <button className={styles.button} {...props}>
        {buttonIcon}
        {buttonText}
    </button>
    )
}


import styles from './styles.module.css'

export const Authorization = ({authorize, out, currentUser}) => {
    return (
        <div className={styles.root}>
            {currentUser ? (<button onClick={out}>Выйти</button>) : (<button onClick={authorize}>Войти</button>)}
        </div>
    );
}
import styles from './styles.module.css';

export const Loader = () => {
    return (
        <div className={styles.root}>
            <div className={styles.multispinnercontainer}>
                <div className={styles.multispinner}>
                    <div className={styles.multispinner}>
                        <div className={styles.multispinner}>
                            <div className={styles.multispinner}>
                                <div className={styles.multispinner}>
                                    <div className={styles.multispinner}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
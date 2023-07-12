import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1Color1}>to<span className={styles.h1Color2}>do</span></h1>
        </header>
    )
}

export default Header;
import styles from './Header.module.css';
import img from './check-fat-duotone.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1Color1}>To<span className={styles.h1Color2}>Do</span></h1>
            <img src={img} className={styles.logo} />
        </header>
    )
}

export default Header;
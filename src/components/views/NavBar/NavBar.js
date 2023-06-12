import { Nav, NavLink } from 'react-bootstrap';
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <h1 className={styles.title}>Waiter.app</h1>
            <Nav className={styles.linkList}>
                <Nav.Link className={styles.link} as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link className={styles.link} as={NavLink} to="/asd">asd</Nav.Link>
            </Nav>
        </div>
    )
}

export default NavBar;
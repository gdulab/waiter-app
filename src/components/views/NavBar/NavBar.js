import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <h1 className={styles.title}>Waiter.app</h1>
            <Nav className={styles.linkList}>
                <Nav.Link className={styles.link} as={NavLink} to="/">Home</Nav.Link>
            </Nav>
        </div>
    )
}

export default NavBar;
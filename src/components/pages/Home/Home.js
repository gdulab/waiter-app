import styles from './Home.module.scss'
import TableList from "../../views/TableList/TableList";


const Home = () => {
    return (
        <div>
            <h2 className={styles.subpageTitle}>All tables</h2>
            <TableList />
        </div>
    )
}

export default Home;
import { Link } from 'react-router-dom';
import styles from './TableListItem.module.scss'
import { Button } from "react-bootstrap"

const TableListItem = (props) => {
    return (
        <div className={styles.TableListItem}>
            <div className={styles.TableListItemHeader}>
                <h3 className={styles.TableListItemName}>Table {props.id}</h3>
                <p className={styles.TableListItemStatus}>Status: {props.status}</p>
            </div>
            <Link to={"/tables/"+props.id}><Button>Show More</Button></Link>
        </div>
    )
}

export default TableListItem;
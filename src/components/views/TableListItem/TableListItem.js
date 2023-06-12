import styles from './TableListItem.module.scss'
import { Button } from "react-bootstrap"

const TableListItem = (props) => {
    return (
        <div className={styles.TableListItem}>
            <div className={styles.TableListItemHeader}>
                <h3 className={styles.TableListItemName}>Table {props.id}</h3>
                <p className={styles.TableListItemStatus}>Status: {props.status}</p>
            </div>
            <Button>Show More</Button>
        </div>
    )
}

export default TableListItem;
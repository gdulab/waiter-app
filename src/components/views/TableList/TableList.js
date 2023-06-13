import { ListGroup } from "react-bootstrap";
import TableListItem from "../TableListItem/TableListItem";
import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";

const TableList = () => {
    const tables = useSelector(state => getAllTables(state));
    return (
        <ListGroup>
            {Object.values(tables).map(table => (
                <ListGroup.Item key={table.id}>
                    <TableListItem id={table.id} status={table.status} />
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default TableList;
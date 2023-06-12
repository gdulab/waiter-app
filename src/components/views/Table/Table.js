import { useSelector } from "react-redux"
import { getAllTables } from "../../../redux/tablesRedux"

const Table = () => {
    const tables = useSelector(state => getAllTables(state));
}
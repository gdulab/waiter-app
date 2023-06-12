import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { fetchTable } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import TableList from "./components/views/TableList/TableList";
import Table from "./components/views/Table/Table";


function App() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchTable()), [dispatch]);

    return (
        <Container>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/asd" element={<TableList />} />
                <Route path="/tables/:tableId" element={<Table />} />
            </Routes>
            <Footer />
        </Container>
    );
}

export default App;

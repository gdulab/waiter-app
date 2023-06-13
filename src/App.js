import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import { useDispatch } from "react-redux";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import Table from "./components/pages/Table/Table";
import { fetchTables } from "./redux/tablesRedux";
import { useEffect } from "react";



function App() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchTables()), [dispatch]);

    return (
        <Container>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tables/:tableId" element={<Table />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </Container>
    );
}

export default App;

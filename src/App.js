import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/views/Footer/Footer";
import Home from "./components/pages/Home/Home";
import { fetchTable } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TableList from "./components/views/TableList/TableList";




function App() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchTable()), [dispatch]);

    return (
        <Container>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <TableList />
            <Footer />
        </Container>
    );
}

export default App;

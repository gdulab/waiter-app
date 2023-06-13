import { useDispatch, useSelector } from "react-redux"
import { getTableById, tableUpdateRequest } from "../../../redux/tablesRedux"
import { useParams } from "react-router-dom";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";


const Table = () => {
    const { tableId } = useParams();
    const table = useSelector(state => getTableById(state, tableId));
    const dispatch = useDispatch();
    const id = tableId;
    const [status, setStatus] = useState(table.status);
    const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
    const [bill, setBill] = useState(table.bill);

    const handleUpdate = e => {
        e.preventDefault();
        dispatch(tableUpdateRequest({ id, status, peopleAmount, maxPeopleAmount, bill }));
    }

    return (
        <div>
            <h3>Table {tableId}</h3>
            <Form onSubmit={handleUpdate}>
                <Form.Group as={Row} controlId="formStatus">
                    <Form.Label column sm={2}><h4>Status: </h4></Form.Label>
                    <Col sm={4}>
                        <Form.Select value={status} onChange={e => setStatus(e.target.value)}>
                            <option value={'Busy'}>Busy</option>
                            <option value={'Free'}>Free</option>
                            <option value={'Cleaning'}>Cleaning</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPeopleAmount">
                    <Form.Label column sm={2}><h4>People: </h4></Form.Label>
                    <Col sm={4}>
                        <InputGroup>
                            <Form.Control type="number" min="0" max={`${table.maxPeopleAmount}`} value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)}></Form.Control>
                            <InputGroup.Text>of</InputGroup.Text>
                            <Form.Control type="number" min="0" max="9" value={maxPeopleAmount} onChange={e => setMaxPeopleAmount(e.target.value)}></Form.Control>
                        </InputGroup>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBill">
                    <Form.Label column sm={2}><h4>Bill: </h4></Form.Label>
                    <Col sm={2}>
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control type="number" min="0" value={bill} onChange={e => setBill(e.target.value)}></Form.Control>
                        </InputGroup>
                    </Col>
                </Form.Group>
                <Button type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default Table;
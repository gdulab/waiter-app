import { API_URL } from "../config";
//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId)

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });

export const fetchTables = () => {
    return (dispatch) => {
        fetch(`${API_URL}/tables`)
            .then(res => res.json())
            .then(tables => dispatch(updateTables(tables)));
    }
};

export const tableUpdateRequest = (props) => {
    console.log(props);
    if (props.status === "Free" || props.status ==="Cleaning") {
        props.peopleAmount = 0;
    }

    if (props.status !== "Busy") {
        props.bill = 0;
    }

    if (props.maxPeopleAmount < props.peopleAmount) {
        props.peopleAmount = props.maxPeopleAmount;
    }

    return (dispatch) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props),
        };

        fetch(`${API_URL}/tables/${props.id}`, options)
            .then(res => res.json())
            .then((res) => dispatch(updateTable(res)))
    }
}

const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TABLES:
            return action.payload
        case UPDATE_TABLE:
            return statePart.map(table => {
                if (table.id === action.payload.id) {
                    return { ...table, ...action.payload };
                }
                return table;
            });
        default:
            return statePart
    };
};
export default tablesReducer;
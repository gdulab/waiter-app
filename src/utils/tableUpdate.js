const tableUpdate = (props) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: props.tableId,
            status: props.status,
            peopleAmount: props.peopleAmount,
            maxPeopleAmount: props.maxPeopleAmount,
            bill: props.bill
        }),
    };

    fetch(`http://localhost:3131/tables/${props.tableId}`, options)
}

export default tableUpdate;
import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import facade from "../../apiFacade.js";

const Bookings = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        facade.fetchAllBookingsData().then((res) => {
            if (res) {
                setTableData(res);
                console.log(res);
            }
        });
    }, []);


    return (
        <div>
            <br/>
            <h1>Booking in database</h1>
            {tableData.map((item) => (
                <Table className="table table-info" bordered hover key={item.id}>
                    <thead>
                    <tr>
                        <th style={{width: "20%"}}>Id</th>
                        <th style={{width: "20%"}}>Date and Time</th>
                        <th style={{width: "20%"}}>Duration</th>
                        <th style={{width: "20%"}}>Actions</th>
                        {/* Ny kolonne for handlinger */}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.date_and_time}</td>
                        <td>{item.duration}</td>
                        <td>
                            <Button
                                className={"btn btn-danger"}
                                onClick={() => {
                                    facade.deleteBooking(item.id).then(r => console.log(r));
                                }
                            }
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            ))}
        </div>
    );
};

export default Bookings;
import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import facade from "../../apiFacade.js";

const Bookings = () => {
    const [dataFromServer, setDataFromServer] = useState("Loading...");
    // Bog data gemmes på en liste med useState
    const [booking, setbookingList] = useState([]);

    useEffect(() => {
        facade.fetchBookingsData(facade.readJwtToken(facade.getToken()).username).then((res) => {
            //Hvis fetch respsonse har data, tilføjes det til booking med setbooking

            if (res) {
                setbookingList(res);
                console.log(res)
            }
            setDataFromServer(res.msg);
            // console.log(res.items)
        });
    }, []);

    return (
        <div>
            <br></br>
            <h1>Your bookings</h1>
            <h3>{dataFromServer}</h3>

            {/*Vi mapper hvert item vi har fetchet */}

            {booking.map((item) => {
                //console.log("hello hello", items);
                //console.log("Nummer 2", item.id);
                //console.log("Nummer 3", item.etag);

                return (
                    <>
                        <br/>

                        <Table className="table table-info" bordered hover>
                            <thead>
                            <tr>
                                <th style={{width: "20%"}}>Id</th>
                                <th style={{width: "20%"}}>Date and Time</th>
                                <th style={{width: "20%"}}>Duration</th>
                                <th style={{width: "20%"}}>User</th>
                                <th style={{width: "20%"}}>Car</th>
                                <th style={{width: "20%"}}>Hire assistant</th>
                            </tr>
                            </thead>
                            <tbody key={item.id}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.dateAndTime}</td>
                                <td>{item.duration}</td>
                                <td>{item.name}</td>
                                <td>{item.pricePrHour}</td>
                                <td>
                                    {/* der skal nok tilføjes en user hertil */}
                                    <Button
                                        //TODO Method to send to hire page
                                        //onClick={() => addReview(review_text, )}
                                        className="btn btn-primary">
                                        Hire
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </>
                );
            })}
        </div>
    );

}

export default Bookings;
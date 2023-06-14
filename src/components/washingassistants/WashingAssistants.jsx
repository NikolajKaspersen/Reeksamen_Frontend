import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import facade from "../../apiFacade.js";

const WashingAssistants = () => {
    const [dataFromServer, setDataFromServer] = useState("Loading...");
    // Bog data gemmes på en liste med useState
    const [washingAssistant, setwashingAssistantList] = useState([]);

    useEffect(() => {
        //facade.fetchBookshelfData(facade.readJwtToken(facade.getToken()).username).then((res) => {
        facade.fetchData("/api/washing_assistant/all").then((res) => {
            //Hvis fetch respsonse har data, tilføjes det til washingAssistant med setwashingAssistant

            if (res) {
                setwashingAssistantList(res);
                console.log(res)
            }
            setDataFromServer(res.msg);
            // console.log(res.items)
        });
    }, []);

    return (
        <div>
            <br></br>
            <h1>List of Washing Assistants</h1>
            <h3>{dataFromServer}</h3>

            {/*Vi mapper hvert item vi har fetchet */}

            {washingAssistant.map((item) => {
                //console.log("hello hello", items);
                //console.log("Nummer 2", item.id);
                //console.log("Nummer 3", item.etag);

                return (
                    <>
                        <br/>

                        <Table className="table table-info" bordered hover>
                            <thead>
                            <tr>
                                <th style={{width: "20%"}}>Assistant Id</th>
                                <th style={{width: "20%"}}>Name</th>
                                <th style={{width: "20%"}}>Primary Language</th>
                                <th style={{width: "20%"}}>Years of Experience</th>
                                <th style={{width: "20%"}}>Price Per Hour</th>
                                <th style={{width: "20%"}}>Hire assistant</th>
                            </tr>
                            </thead>
                            <tbody key={item.id}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.primaryLanguage}</td>
                                <td>{item.yearsOfExperience}</td>
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

export default WashingAssistants;
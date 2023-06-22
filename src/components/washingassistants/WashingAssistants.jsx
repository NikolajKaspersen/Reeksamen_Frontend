import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import facade from "../../apiFacade.js";

//US-1 See all Washing Assistants
const WashingAssistants = () => {
    const [dataFromServer, setDataFromServer] = useState([]);
    // Bog data gemmes på en liste med useState

    useEffect(() => {
        facade.fetchAllWashingAssistants().then((res) => {
            if (res) {
                setDataFromServer(res);
                console.log(res)
            }
        });
    }, []);

    return (
        <div>
            <br/>
            <h1>List of Washing Assistants</h1>
            {dataFromServer.map((item) => (
                <Table className="table table-info" bordered hover={item.id}>
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
                    <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.Primary_language}</td>
                        <td>{item.years_of_experience}</td>
                        <td>{item.price_per_hour}</td>
                        <td>
                            {/* der skal nok tilføjes en user hertil */}
                            <Button
                                className={"btn btn-primary"}
                                onClick={() => {
                                    facade.hireAssistant(item.id).then(r => console.log(r));
                                }
                                }
                            >
                                Hire
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            ))}
        </div>
    )
};

export default WashingAssistants;
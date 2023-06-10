import React, {useEffect, useState} from "react";
// import "./bookshelf.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import facade from "../../apiFacade.js";

const Table_Example = () => {
    const [dataFromServer, setDataFromServer] = useState("Loading...");
    // Bog data gemmes på en liste med useState
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        //TODO sæt eget fetch kald her
        facade.fetchDataGoogle().then((res) => {
        // facade.fetchBookshelfData(facade.readJwtToken(facade.getToken()).username).then((res) => {
            //Hvis fetch respsonse har data, tilføjes det til tableData med setBookList

            if (res) {
                setTableData(res.items);
                // console.log(res)
            }
            setDataFromServer(res.msg);
            // console.log(res.items)
        });
    }, []);

    return (
        <div>
            <br></br>
            <h1>Items in your table</h1>
            <h3>{dataFromServer}</h3>

            {/*Vi mapper hvert item vi har fetchet */}

            {tableData.map((item) => {
                //console.log("hello hello", items);
                //console.log("Nummer 2", item.id);
                //console.log("Nummer 3", item.etag);
                return (
                    <>
                        <br/>
                        <Table className="table table-info" bordered hover>
                            <thead>
                            <tr>
                                {/*TODO Forskellige kolonner, der står i toppen af tabellen*/}
                                <th style={{width: "20%"}}>Title</th>
                                <th style={{width: "12%"}}>Author</th>
                                {/*<th style={{width: "9%"}}>Category</th>*/}
                                <th style={{width: "44%"}}>Description</th>
                                <th style={{width: "6%"}}>Delete Book</th>
                                <th style={{width: "9%"}}>Review Book</th>
                            </tr>
                            </thead>
                            <tbody key={item.id}>
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                {/*<td>{item.category}</td>*/}
                                <td>{item.description}</td>
                                <td>
                                    {/*TODO tilføj action til knap*/}
                                    {/* der skal nok tilføjes en user hertil */}
                                    <Button
                                        //onClick={() => addBook(item.volumeInfo.title, item.volumeInfo.authors, item.volumeInfo.description)}
                                        className="btn btn-danger">
                                        Delete Book
                                    </Button>
                                </td>
                                <td>
                                    {/* der skal nok tilføjes en user hertil */}
                                    <Button
                                        //onClick={() => addReview(review_text, )}
                                        className="btn btn-primary">
                                        Review Book
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

export default Table_Example;
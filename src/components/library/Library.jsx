import React, {useState, useEffect} from "react";
import facade from "../../apiFacade.js";
import Table from "react-bootstrap/Table";

import "./library.css";
import Button from "react-bootstrap/Button";

// import addToShelf from "../../actions/AddToShelf.js";

function Library() {
    const [dataFromServer, setDataFromServer] = useState("Loading...");

    // Bog data gemmes på en liste med useState
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        facade.fetchDataGoogle().then((res) => {
            //Hvis fetch respsonse har data, tilføjes det til bookList med setBookList
            if (res.items) {
                setBookList(res.items);
            }
            //console.log("I useEffect ", bookList);
            setDataFromServer(res.msg);
        });
    }, []);

    // bruges ikke mere så må gerne slettes
    // const addToShelf = async (evt) => {
    //     evt.preventDefault();
    //     const object = {
    //         bookId: evt.target.name,
    //         userId: facade.readJwtToken(facade.getToken()).username
    //     }
    //     await fetch("http://localhost:8080/api/bookshelf/add", facade.makeOptions("POST", facade.getToken(), object))
    // }

    const book = {};

    //TODO Merge addToShelf and addBook functions together

    const addBook = (title, author, description, id) => {
      const username = facade.readJwtToken(facade.getToken()).username
        
      // const url =
        //   "https://chriswihudat.dk/tomcat/dat3_semesterProjek/api/bookshelf";
        const url = "http://localhost:8080/api/bookshelf";
        book.user_name = username;
        book.title = title;
        book.author = author.toString();
        book.description = description;
        book.google_id = id;
        console.log("her" + id);
        console.log("herher" + book);
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        };

        fetch(url, options).then((res) => {
            //console.log(res);
            return res.json();
        });
    };


    return (
        <div>
            <br></br>
            <h1>Books fetched from google</h1>
            <h3>{dataFromServer}</h3>

            {/*Vi mapper hvert item vi har fetchet */}

            {bookList.map((item) => {
                //console.log("hello hello", item);
                //console.log("Nummer 2", item.id);
                //console.log("Nummer 3", item.etag);

                return (
                    <>
                        <br/>

                        <Table className="table table-info" bordered hover>
                            <thead>
                            <tr>
                                <th style={{width: "20%"}}>Title</th>
                                <th style={{width: "12%"}}>Author</th>
                                <th style={{width: "9%"}}>Category</th>
                                <th style={{width: "44%"}}>Description</th>
                                <th style={{width: "6%"}}>Rating</th>
                                <th style={{width: "9%"}}>Add to Shelf</th>
                            </tr>
                            </thead>
                            <tbody key={item.id}>
                            <tr>
                                <td>{item.volumeInfo.title}</td>
                                <td>{item.volumeInfo.authors}</td>
                                <td>{item.volumeInfo.categories}</td>
                                <td>{item.volumeInfo.description}</td>
                                <td>{item.volumeInfo.averageRating}</td>


                                <td><Button
                                    onClick={() => addBook(item.volumeInfo.title, item.volumeInfo.authors, item.volumeInfo.description, item.id)}
                                    className="btn btn-primary">
                                    Add to Bookshelf
                                </Button>

                                    {/*<Button className="btn btn-primary" formAction="addToShelf" name={item.id}>Add to*/}
                                    {/*    Bookshelf</Button>*/}
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

export default Library;
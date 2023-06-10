import {useEffect, useState} from "react";
import facade from "../apiFacade.js";

import React from "react";

//forsøgte at bruge en samlet fil til all de actions der bliver udført i applikationen, men det lykkedes ikke

//fetch af data fra google
const fetchData = () => {
    return fetch("https://www.googleapis.com/books/v1/volumes?q=")
        .then((res) => res.json())
        .then((data) => {
            return data;
        }
        );
}

//forsøg på at lave add to shelf, men kom ikke videre end at lave en funktion der skal bruger username og bookid,
//der bruges til at knytte dem sammen, så man kan vise dem i bookshelf

const addToShelf = ({username, bookid}) => {
    const bookshelf = fetchData("bookshelf") ?? [];

    const existingBookshelf = fetchData("bookshelf") ?? [];


}


//
// const addToShelf = () => {
//
//
//
//
//     // Bog data gemmes på en liste med useState
//     const [bookshelf, setBookshelf] = useState([]);
//
//     useEffect(() => {
//         facade.fetchDataGoogle().then((res) => {
//             //Hvis fetch respsonse har data, tilføjes det til bookList med setBookList
//             if (res.items) {
//                 setBookshelf(res.items);
//             }
//             //console.log("I useEffect ", bookList);
//             setDataFromServer(res.msg);
//         });
//     }, []);


// export default class addToShelf {
// }
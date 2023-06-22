import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import facade from "../../apiFacade.js";
import {Container} from "react-bootstrap";
// import CreateFestival from "../createPages/CreateFestival.jsx";
import "./admin.css"
import CreateWashingAssistant from "../create/CreateWashingAssistant.jsx";

function Admin() {

    return (
        <div>
            <div className="create_container">
                <CreateWashingAssistant/>
            </div>
        </div>
    )

}

export default Admin;
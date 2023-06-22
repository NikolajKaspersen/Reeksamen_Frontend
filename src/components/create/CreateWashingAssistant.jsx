import {useEffect, useState} from "react";
import facade from "../../apiFacade.js";
import "./create.css";

function createWashingAssistant() {

    // const [washingAssistant, setWashingAssistant] = useState({
    //     name: "Joakim",
    //     Primary_language: "French",
    //     years_of_experience: "5",
    //     price_per_hour: "5"
    // });
    //
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(washingAssistant);
        facade.createWashingAssistant(washingAssistant).then(res => console.log(res));

    };

    const [washingAssistant, setWashingAssistant] = useState([]);

    const [name, setName] = useState([]);
    const handleName = (event) => {
        setName(event.target.value);
    }

    const [Primary_language, setPrimary_language] = useState([]);
    const handlePrimary_language = (event) => {
        setPrimary_language(event.target.value);
    }

    const [years_of_experience, setYears_of_experience] = useState([]);
    const handleYears_of_experience = (event) => {
        setYears_of_experience(event.target.value);
    }

    const [price_per_hour, setPrice_per_hour] = useState([]);
    const handlePrice_per_hour = (event) => {
        setPrice_per_hour(event.target.value);
    }




    useEffect(() => {
        setWashingAssistant({
            name: name,
            Primary_language: Primary_language,
            years_of_experience: years_of_experience,
            price_per_hour: price_per_hour
        })
    }, [name, Primary_language, years_of_experience, price_per_hour]);




return (
    <div className="createForm">

        <h1>Create Washing Assistant</h1>
        <div className="form-body">
            <form className="form__lable" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        className="form__input"
                        name="name"
                        type="text"
                        value={washingAssistant.name}
                        onChange={handleName}
                        placeholder="Washing Assistant Name"
                    />
                </label>
                <br/>
                <label>
                    Primary Language:
                    <input
                        className="form__input"
                        name="Primary_language"
                        type="text"
                        value={washingAssistant.Primary_language}
                        onChange={handlePrimary_language}
                        placeholder="Washing Assistant Primary Language"
                    />
                </label>
                <br/>
                <label>
                    Years of Experience:
                    <input
                        className="form__input"
                        name="years_of_experience"
                        type="text"
                        value={washingAssistant.years_of_experience}
                        onChange={handleYears_of_experience}
                        placeholder="Washing Assistant Years of Experience"
                    />
                </label>
                <br/>
                <label>
                    price pr hour:
                    <input
                        className="form__input"
                        name="price_per_hour"
                        type="text"
                        value={washingAssistant.price_per_hour}
                        onChange={handlePrice_per_hour}
                        placeholder="Washing Assistant price pr hour"
                    />
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>
);
}

export default createWashingAssistant;
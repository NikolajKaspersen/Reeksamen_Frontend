import {useState} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Stars from "./Stars.js";
import facade from "../apiFacade.js";


export default function ReviewForm() {
    const [bookshelf, setBookshelf] = useState(0);
    const [bookId , setBookId] = useState(0);
    const [star, setStar] = useState();
    const [reviewText, setReviewText] = useState("");
    const onChange = (e) => {
        setReviewText(e.target.value);

    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Review submitted");
        facade.review(bookshelf, star, reviewText);
    };

    return (
        <div className="form-container">
            <Stars setStar={setStar} />
            <Form onSubmit={onSubmit}>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter you review"
                    value={reviewText}
                    onChange={onChange}
                />
                <br></br>
                <Button type="submit" className="btn btn-primary">
                    Submit
                </Button>
                <div>{star}</div>
            </Form>
        </div>
    );
}
import React from "react";
import "./home.css";

const Home = () => {
    return (
        <div>
            <div className="jumbotron bg-primary text-left">
                <h1 className="display-4 text-white">Hello!</h1>
                <p className="lead text-white">
                    Welcome to our Single Page Application
                </p>
                <hr className="my-4 text-white"/>
                <div className="text-dark">
                    <blockquote class="blockquote ">
                        <p class="mb-0">“Wisdom…. comes not from age, but from education and learning.”</p>
                        <br/>
                        <footer class="blockquote-footer text-warning">Anton Chekhov <cite title="Source Title"></cite>
                        </footer>
                    </blockquote>
                </div>

                <p className="text-white">
                    This single page application (SPA) allows you to select create and select your booking times for
                    washing your car.</p>
                <p className="text-white">
                This project is an exam project made by Abdullah.
                </p>
                <p className="text-white">
                The project is set up with JPA & we retrieve/create data from our endpoints in the deployed backend.
                Enjoy.
                </p>

                <a className="btn btn-warning btn-lg" href="#" role="button">Learn more</a>
            </div>
        </div>
    );
}

export default Home;
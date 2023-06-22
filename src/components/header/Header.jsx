import React from "react";
import "./header.css";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import LoggedIn from "../loggedin/LoggedIn.jsx";
import facade from "../../apiFacade.js";
import LogIn from "../loginform/LoginForm.jsx";
// import {Badge} from "react-bootstrap";


const Header = ({loggedIn, setLoggedIn, user, setUser}) => {

    const login = (user, pass) => {
        facade.login(user, pass).then(() => {
            const token = facade.readJwtToken(facade.getToken());
            setUser({username: token.username, roles: token.roles});
            setLoggedIn(true);
        });
    }

    const logout = () => {
        facade.logout();
        setLoggedIn(false);
        setUser({name: "", roles: ""})
    }

//forsøg på at optimere Navbar, ikke indholdet i den, men selve dens flow og opbygning af forskellige klasser og sider,
// som den skal navigere imellem
    return (
        <div className="container-fluid flex-fill">
            <nav className="Nav">
                {/*Ikon i venstre hjørne, som fører til forsiden*/}
                <a className="nav-icon active" href="/"><img src="/img.png" height="77px" alt=""></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <a className="nav-item nav-link" href="/about">About</a>
                <a className="nav-item nav-link" href="/contact">Contact</a>

                {/*Navbar links, der kun vises når man er logget ind i Applikationen*/}

                {facade.loggedIn()
                    && <a className="nav-item nav-link" href="/washing_assistants">Washing Assistants</a>
                }

                {/*Navbar link, der kun vises når man ikke er logget ind, som føre til Registration*/}
                {!facade.loggedIn()
                    && <a className="nav-item nav-link" href="/registration">Sign-up</a>}


                {/*Navbar link, der kun bliver vist for login, med rollen User*/}
                {facade.loggedIn() && facade.readJwtToken(facade.getToken()).roles.includes("admin") &&
                    <a className="nav-item nav-link" href="/bookings">Bookings</a>
                }
                {/*Navbar link, der kun bliver vist for login, med rollen Admin*/}
                {facade.loggedIn() && facade.readJwtToken(facade.getToken()).roles.includes("admin") &&
                    <a className="nav-item nav-link" href="/admin">Admin</a>
                }
                {/*Navbar element, der opdeler Navbaren mellem normale links og login formularen*/}
                <div className="Nav-right">
                    {/*check om brugeren er logget ind eller ej*/}
                    {!loggedIn ? (<LogIn login={login}/>) :
                        (<div className="login-container">
                            <button type="button" className="btn btn-primary">
                                <LoggedIn user={user}/>
                            </button>
                            {/*<Badge bg="primary" >*/}
                            {/*    <LoggedIn user={user}/>*/}
                            {/*</Badge>*/}
                            <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
                        </div>)}
                </div>

            </nav>
        </div>

        //Gammel Navbar, ikke slettet, just in case!!!

        // <div className="Nav" >
        //     <Navbar className="active">
        //         <Container className="Nav" color="#003d76">
        //             <a className="active" href="/"><img src="/vite.svg" height="78px" className="img-fill" alt=""></img>
        //             </a>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className="Nav" fill="fill">
        //
        //                     <a className="nav-item" href="/about">About</a>
        //                     <a className="nav-item" href="/contact">Contact</a>
        //                     <a className="nav-item" href="/library">Library</a>
        //                     <a className="nav-item" href="/bookshelf">Bookshelf</a>
        //                     <a className="nav-item" href="/registration">Sign-up</a>
        //                 </Nav>
        //                 <Nav className="ms-auto">
        //
        //                     {!loggedIn ? (<LogIn login={login}/>) :
        //                         (<div className="login-container">
        //                             <Badge bg="primary">
        //                                 <LoggedIn user={user}/>
        //                             </Badge>
        //                             <button onClick={logout}>Logout</button>
        //                         </div>)}
        //
        //                     {/*{!loggedIn ? (<LogIn login={login} />) :*/}
        //                     {/*    (<div>*/}
        //                     {/*        <LoggedIn user={user} />*/}
        //                     {/*        <button onClick={logout}>Logout</button>*/}
        //                     {/*    </div>)}*/}
        //
        //                     {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
        //                     {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
        //                     {/*    <NavDropdown.Item href="#action/3.2">*/}
        //                     {/*        Another action*/}
        //                     {/*    </NavDropdown.Item>*/}
        //                     {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
        //                     {/*    <NavDropdown.Divider/>*/}
        //                     {/*    <NavDropdown.Item href="#action/3.4">*/}
        //                     {/*        Separated link*/}
        //                     {/*    </NavDropdown.Item>*/}
        //                     {/*</NavDropdown>*/}
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        //
        // </div>
    );
}

export default Header;
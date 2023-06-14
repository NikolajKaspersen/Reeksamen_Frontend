//Localhost IP
const URL = "http://localhost:8080/exam_test";

//TODO Update this with new
const URLWashingAssistants = "http://localhost:8080/exam_test/api/washing_assistant";
const URLBooking = "http://localhost:8080/exam_test/api/booking/";

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

function apiFacade() {
    /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/

    const login = (user, password) => {
        // console.log("login");
        const options = makeOptions("POST", true, {username: user, password: password});
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token)
            })
    }

    const fetchData = (resource) => {
        const options = makeOptions("GET", true); //True add's the token
        return fetch(URL + resource, options).then(handleHttpErrors);
    }

    const fetchAllBookingsData = () => {
        const options = makeOptions("GET", true); //True add's the token
        return fetch(URLBooking + "all", options).then(handleHttpErrors);
    }

    const fetchBookingsData = (user_name) => {
        const options = makeOptions("GET"); //True add's the token
        console.log("URL: " + URLBooking + user_name);
        return fetch(URLBooking + user_name, options).then(handleHttpErrors);
    }

    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }
    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    const loggedIn = () => {
        const loggedIn = getToken() != null;
        return loggedIn;
    }
    const logout = () => {
        localStorage.removeItem("jwtToken");
    }

    function readJwtToken(token) {
        console.log('TOKEN: ', token);
        // console.log('TOKEN opened with atob: ',window.atob(token));
        var base64Url = token.split('.')[1];
        // console.log(base64Url);
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        // console.log(base64);
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        console.log(jsonPayload);
        return JSON.parse(jsonPayload);
    }

    function review(bookshelfId, bookId, reviewScore, reviewText) {
        const options = makeOptions("POST", true, {bookshelfId, reviewScore, reviewText});
        return fetch(URL + "/api/review", options)
            .then(handleHttpErrors)
            .then(res => {
                console.log(res);
            })
    }

    function isAdmin(){
        return facade.loggedIn() && facade.readJwtToken(facade.getToken()).roles.includes("admin")
    }

    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        fetchData,
        readJwtToken,
        fetchBookingsData,
        fetchAllBookingsData,
        isAdmin,

        review(bookshelfId, bookId, reviewScore, reviewText) {

        }
    }
}

const facade = apiFacade();
export default facade;

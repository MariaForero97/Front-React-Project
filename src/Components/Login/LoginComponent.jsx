import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginComponent.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { USER_CONNECTED } from "../../Util/Constants";
import { getUserMain } from "../../Services/UserService";

export default function LoginComponent(props) {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    /*const {
        signin,
        setUserLogged,
    } = React.useContext();*/

    function validateForm() {
        return usuario.length > 0 && password.length > 0;
    }

    /* function Submit() {
         getUserMain({
             "username": usuario,
             "password": password,
 
         }).then((response) => {
             return response.data;
         }).then((res) => {
             setUserLogged(USER_CONNECTED ? JSON.parse(USER_CONNECTED) : {});
             signin(res);
         }).catch((error) => {
 
         });
     }*/

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                        positronX
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                    Login
                            </li>
                            <li className="nav-item">
                                    Sign up
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    
                </div>
            </div>
        </div>
    )
}

export { LoginComponent };
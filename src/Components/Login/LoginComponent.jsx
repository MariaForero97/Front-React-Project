import React, { useState } from "react";
import "./LoginComponent.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../Providers/AppProvider";
import { getUserMain } from "../../Services/UserService";
import { USER_CONNECTED } from "../../Util/Constants";
import { UseLocalStorage } from "../../Util/UseLocalStorage";
import SolaRiseLogosTransparent from '../../Files/SolaRise-logos_transparent.png';
import Panel from '../../Files/Panel.jpg';

export default function LoginComponent() {

    const [userLogin, setUserLogin] = useState("");
    const [password, setPassword] = useState("");

    const {
        setUserLogged,
        setOpenModalTitle,
        setModalInfo,
        setOpenModalInfo,
    } = React.useContext(AppContext);


    function validateForm() {
        return userLogin.length > 0 && password.length > 0;
    }

    const {
        item: user,
        saveItem: saveUser,
        loading,
        error,
    } = UseLocalStorage('user', "");

    function handleSubmit(event) {

        event.preventDefault();
        getUserMain({
            "username": userLogin,
            "password": password,
        }).then((response) => {
            return response.data;
        }).then((res) => {
            if (JSON.parse(USER_CONNECTED) === JSON.parse(res)) {
                setUserLogged(USER_CONNECTED ? JSON.parse(USER_CONNECTED) : {});
            }
            saveUser(res);

            window.location.href = "/inicio";
        }).catch((error) => {

            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    }

    return (
        <Form.Group class="container-main">
        <Form.Group className="container-login">
            <div className="Login">
                <div className="post-preview" style={{ textAlign: "center", marginTop: "40px" }}>
                    <h2 className="post-title">Login</h2>
                </div>
            <br />
            <Form onSubmit={handleSubmit}>
                <div className="form-floating">
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                
                    <input className="form-control" id="name" type="text"
                        value={userLogin}
                        onChange={(e) => setUserLogin(e.target.value)}
                        />
                </Form.Group>
                </div>
                <div className="form-floating">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                
                    <input className="form-control" id="password" type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </Form.Group>
                <br />
                <div style={{
                    display:"flex",
                    justifyContent: "right",
                    alignItems: "center",
                    marginInline: -1,
                    marginTop: -20,
                }}>
                    <Form.Group className="btn">
                    <Button style={{
                        backgroundColor: "#4B8D97",
                        borderColor:"#4B8D97",
                        alignItems:"center"

                    }} 
                    className="btn btn-primary" 
                    variant="lg"
                    type="submit" 
                    disabled={!validateForm()}>
                        Login
                    </Button>
                    </Form.Group>
                </div>
                </div>
                
                </Form >
            </div >
    </Form.Group>
    <div className="Container-imgPrincipal">
        <div className="container-img2">
        <img
            className="img-PanelPrincipal"
            src={Panel}
        />
    </div>
    <div className="container-img">
        <img
            className="img-Solarise-logo"
            src={SolaRiseLogosTransparent}
        />
    </div>
    
    </div>
    </Form.Group>
    )
}

export { LoginComponent };
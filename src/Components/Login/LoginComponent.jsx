import React, { useState } from "react";
import "./LoginComponent.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../Providers/AppProvider";
import { getUserMain } from "../../Services/UserService";
import { USER_CONNECTED } from "../../Util/Constants";
import { UseLocalStorage } from "../../Util/UseLocalStorage";

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
        <div className="Login">
            <div className="post-preview" style={{ textAlign: "center", marginTop: "-30px" }}>
                <h2 className="post-title">Bienvenidos a Smile</h2>
                <p className="post-meta">
                    “Puedes conseguir lo que quieras si vistes para ello”
                </p>
            </div>
            <br />
            <Form onSubmit={handleSubmit}>
                <div className="form-floating">
                    <input className="form-control" id="name" type="text"
                        value={userLogin}
                        onChange={(e) => setUserLogin(e.target.value)}
                        placeholder="Ingresa tu nombre..." />
                    <label htmlFor="name">Usuario</label>
                </div>
                <div className="form-floating">
                    <input className="form-control" id="password" type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingresa tu contraseña..." />
                    <label htmlFor="password">Contraseña</label>
                </div>
                <br />
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Button className="btn btn-primary text-uppercase" block size="lg" type="submit" disabled={!validateForm()}>
                        Ingresar
                    </Button>
                </div>
            </Form >
        </div >
    )
}

export { LoginComponent };
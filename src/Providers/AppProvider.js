import React, { useEffect } from "react";
import { USER_CONNECTED } from "../Util/Constants";
import history from '../history';

const AppContext = React.createContext();

function AppProvider(props) {

    const [openModal, setOpenModal] = React.useState(false);
    const [openModalInfo, setOpenModalInfo] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState("");
    const [userLogged, setUserLogged] = React.useState({});
    const [openModalTitle, setOpenModalTitle] = React.useState("");
    const [role, setRole] = React.useState("");

    useEffect(() => {
        if (USER_CONNECTED && Object.entries(USER_CONNECTED).length > 2) {
            setUserLogged(JSON.parse(USER_CONNECTED));
            if (JSON.parse(USER_CONNECTED).roles[0].split("_")[1].startsWith("A")) {
                setRole("admin");
            } else if (JSON.parse(USER_CONNECTED).roles[0].split("_")[1].startsWith("M")) {
                setRole("mod");
            } else if (JSON.parse(USER_CONNECTED).roles[0].split("_")[1].startsWith("U")) {
                setRole("user");
            } else {
                setRole("");
            }
        } else {
            history.push = "/login";
        }
    }, []);

    return (<AppContext.Provider value={{
        userLogged,
        setUserLogged,
        openModal,
        setOpenModal,
        openModalInfo,
        setOpenModalInfo,
        modalInfo,
        setModalInfo,
        openModalTitle,
        setOpenModalTitle,
        role,
        setRole,
    }}>
        {props.children}
    </AppContext.Provider>);
}
export { AppProvider, AppContext }
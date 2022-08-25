import React,{ useState } from "react";
import {saveSupplier, updateSupplier, deleteSupplier, getSupplier} from '../Services/SupplierService';
import { AppContext } from "./AppProvider";

const SupplierContext = React.createContext();

function SupplierProvider(props){
    const[nitSupplier, setNitSupplier] = useState("");
    const[nameSupplier, setNameSupplier] = useState("");
    const[addressSupplier, setAddressSupplier] = useState("");
    const[contactSupplier, setContactSupplier] = useState("");

    const{
        setOpenModalInfo,
        setModalInfo,
        setOpenModalTitle
    } =React.useContext(AppContext);

    const validateSearch = () => {
        return nitSupplier.length > 7;
    }

    const validateCreate = () => {
        return nitSupplier.length > 7 && contactSupplier.length > 0 && nameSupplier.length > 0 && addressSupplier.length > 0;
    }

    const validateDelete = () => {
        return nitSupplier.length > 7;
    }

    const validateUpdate = () =>{
        return nitSupplier.length > 7 && contactSupplier.length > 0 && nameSupplier.length > 0 && addressSupplier.length > 0;
    } 

    const searchNewSupplier = () =>{
        getSupplier(nitSupplier).then((response) => {
            return response.data;
        }).then((res)=> {
            setNitSupplier(res.nitSupplier);
            setNameSupplier(res.nameSupplier);
            setAddressSupplier(res.addressSupplier);
            setContactSupplier(res.contactSupplier);
        }).catch((error) =>{

            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const deleteNewSupplier = () =>{
        deleteSupplier(nitSupplier).then((response)=>{
            return response.data;
        }).then((res)=>{
            setNitSupplier("");
            setNameSupplier("");
            setAddressSupplier("");
            setContactSupplier("");

            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Provedor eliminado con exito");

        }).catch((error)=>{

            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message : "Error desconocido.");
        });
    };

    const saveNewSupplier =() =>{
        saveSupplier({
            "nitSupplier": nitSupplier,
            "nameSupplier": nameSupplier,
            "addressSupplier": addressSupplier,
            "contactSupplier": contactSupplier
        }).then((response)=>{
            return response.data;
        }).then((res)=>{
            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Provedor creado con exito");

        }).catch((error)=>{

            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response.data[0] !== undefined ? error.response.data[0].message : error.response.data.message);
        });
    };

    const updateNewSupplier =() =>{
        updateSupplier({
            "nitSupplier": nitSupplier,
            "nameSupplier": nameSupplier,
            "addressSupplier": addressSupplier,
            "contactSupplier": contactSupplier
        }).then((response)=>{
            return response.data;
        }).then((res)=>{
            setOpenModalTitle("Exito");
            setOpenModalInfo(true);
            setModalInfo("Provedor modificado con exito");

        }).catch((error)=>{

            setOpenModalTitle("Error");
            setOpenModalInfo(true);
            setModalInfo(error.response ? error.response.data.message :"Error desconocido.");
        });
    };

    return (<SupplierContext.Provider value={{
        nitSupplier,
        setNitSupplier,
        nameSupplier,
        setNameSupplier,
        addressSupplier,
        setAddressSupplier,
        contactSupplier,
        setContactSupplier,
        validateCreate,
        validateDelete,
        validateSearch,
        validateUpdate,
        searchNewSupplier,
        updateNewSupplier,
        deleteNewSupplier,
        saveNewSupplier
    }}>
        {props.children}
        </SupplierContext.Provider>);

}
export{SupplierProvider, SupplierContext}
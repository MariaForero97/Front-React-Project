import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../../Providers/AppProvider";
import {SupplierContext} from "../../../Providers/SupplierProvider";
//import React, { useEffect } from 'react'


function ProvidersComponent(props){

    /*useEffect(() => {
        if (!(role === "admin" || role === "mod")) {
            window.location.href = "/inicio";
        }
    }, []);*/
    

    const{
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
    }=React.useContext(SupplierContext);

    const{
        role
    } =React.useContext(AppContext);

    return(
        <React.Fragment>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="my-5">
                                <Form>
                                    <div className="form-floating">
                                        <input className="form-control" id="nitSupplier" value={nitSupplier}
                                            onChange={(e) => setNitSupplier(e.target.value)} type="text"
                                            placeholder="Ingrese nit del proveedor" />
                                        <label htmlFor="nitSupplier">Nit</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="address" value={addressSupplier}
                                            onChange={(e) => setAddressSupplier(e.target.value)} type="text"
                                            placeholder="Ingrese la direccion" />
                                        <label htmlFor="address">Direccion</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="contact" value={contactSupplier}
                                            onChange={(e) => setContactSupplier(e.target.value)} type="text"
                                            placeholder="Ingrese el telefono" />
                                        <label htmlFor="contact">Telefono</label>
                                    </div>
                                    <div className="form-floating">
                                        <input className="form-control" id="nameSupplier" value={nameSupplier}
                                            onChange={(e) => setNameSupplier(e.target.value)} type="text"
                                            placeholder="Ingrese nombre del proveedor" />
                                        <label htmlFor="nameSupplier">Nombre Empresa</label>
                                    </div>
                                </Form >
                                <br />
                                <div className="ctext-wrap" style={{ display: "flex", justifyContent: "space-evenly" }}>
                                    {(role === "admin" || role === "mod") && <Button id="searchSupplier" className="first-btn btn btn-primary text-uppercase" block size="lg" onClick={searchNewSupplier} disabled={!validateSearch()}>
                                        Consultar
                                    </Button>}
                                    {(role === "admin" || role === "mod") && <Button id="createSupplier" className="btn btn-primary text-uppercase" block size="lg" onClick={saveNewSupplier} disabled={!validateCreate()}>
                                        Crear
                                    </Button>}
                                    {(role === "admin" || role === "mod") && <Button id="updateSupplier" className="btn btn-primary text-uppercase" block size="lg" onClick={updateNewSupplier} disabled={!validateUpdate()}>
                                        Actualizar
                                    </Button>}
                                    {(role === "admin" || role === "mod") && <Button id="deleteSupplier" className="last-btn btn btn-primary text-uppercase" block size="lg" onClick={deleteNewSupplier} disabled={!validateDelete()}>
                                        Borrar
                                    </Button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment >
    );

}

export{ProvidersComponent}
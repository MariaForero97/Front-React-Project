import axios from 'axios';
import{
    USER_API_BASE_URL,
    CONFIG_TOKEN
}from '../Util/Constants';

function saveSupplier(supplier){
    try{
        return axios.post(
            USER_API_BASE_URL + '/supplier/',
            supplier,
            CONFIG_TOKEN
        );
    }catch(error){
        throw error
    }
}

function updateSupplier(supplier){
    try{
        return axios.put(
            USER_API_BASE_URL + '/supplier/',
            supplier,
            CONFIG_TOKEN
        );
    } catch(error){
        throw error
    }
}

function getSupplier(supplierId){
    try{
        return axios.get(
            USER_API_BASE_URL + `/supplier/${supplierId}`,
            CONFIG_TOKEN
        );
    } catch(error){
        throw error
    }
}

function deleteSupplier(supplierId){
    try{
        return axios.delete(
            USER_API_BASE_URL + `/supplier/${supplierId}`,
            CONFIG_TOKEN
        );
    } catch(error){
        throw error
    }
}

export{saveSupplier,getSupplier,deleteSupplier,updateSupplier}
import axios from 'axios';
import {
    USER_API_BASE_URL,
    CONFIG_TOKEN
} from '../Util/Constants';

function getUserMain(user) {
    try {
        return axios.post(USER_API_BASE_URL + "/auth/signin", user);
    } catch (error) {
        throw error
    }
}

function saveUser(user) {
    try {
        return axios.post(
            USER_API_BASE_URL + "/user/",
            user,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function updateUser(user) {
    try {
        return axios.put(
            USER_API_BASE_URL + "/user/",
            user,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function getUser(userId) {
    try {
        return axios.get(
            USER_API_BASE_URL + `/user/${userId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function getAllUsers() {
    try {
        return axios.get(
            USER_API_BASE_URL + `/user/`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

function deleteUser(userId) {
    try {
        return axios.delete(
            USER_API_BASE_URL + `/user/${userId}`,
            CONFIG_TOKEN
        );
    } catch (error) {
        throw error
    }
}

export { getUserMain, saveUser, getUser, getAllUsers, deleteUser, updateUser };

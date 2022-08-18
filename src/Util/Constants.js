
export const USER_API_BASE_URL = "http://localhost:8081/api/v1/";
export const USER_CONNECTED = localStorage.getItem("user");

export const CONFIG_TOKEN = {
    'mode': 'cors',
    'cache': 'no-cache',
    'credentials': 'true',
    'redirect': 'follow',
    'referrerPolicy': 'no-referrer',
    headers: {
        'Authorization': `Bearer ${USER_CONNECTED ? JSON.parse(USER_CONNECTED).accessToken : null}`,
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': 'http://localhost:8081',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json',
    }
};
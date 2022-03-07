import clientApi from "./client";

const endpoint = 'users?pagesize=20&order=desc&sort=reputation&site=stackoverflow';
const getUsers = () => {
    console.log(clientApi);
    return clientApi.get(endpoint);
}
export default {
    getUsers
}
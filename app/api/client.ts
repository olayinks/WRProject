import { create } from "apisauce";

const clientApi = create({
    baseURL: 'https://api.stackexchange.com/2.2/',
    headers: { Accept: 'application/json' },
})
export default clientApi;
import axios from "axios";
import { API_URL } from "../pages/config";


export const registerOrg = async (form) => {
    try {
        const data = await axios.post("/api/register", form);
        console.log(data);
        return data;
    } catch (error) {
        throw error;
    }
}

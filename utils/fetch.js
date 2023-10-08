import { API_KEY } from "@env"
const URL = "https://api.nasa.gov/planetary/apod?api_key=";


export default async (urlParams) => {
    try {
        const response = await fetch(`${URL}${API_KEY}${urlParams?.length > 0 ? urlParams : ''}`);
        const data = await response.json();
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
}
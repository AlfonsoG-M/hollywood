import axios from "axios"

let productsConfig = {
    baseURL: "http://localhost:5000/entries" ,
    Headers: {
        'Content-Type': 'application/json', 
    }
}

const productsInstance = axios.create(productsConfig)
export default productsInstance
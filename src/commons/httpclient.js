import axios from "axios";

export default axios.create({
    baseURL: 'https://ignacio-myfirstreact.herokuapp.com/api/v1',
    headers:{
        'Content-Type':'application/json'
    }
})
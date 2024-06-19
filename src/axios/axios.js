import axios from 'axios'

const axiosIns = axios.create({
    baseURL:'https://ecommerce-sa-1.onrender.com/',
    // baseURL:'http://localhost:4000/',
})

export  default  axiosIns
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchDataCall = async() => {
    const res = await axios.get(`${BASE_URL}/products`)
    return res.data
}

export const fetchDataByCategoryCall = async (category)=>{
    const res = await axios.get(`${BASE_URL}/products/category/${category}`)
    return res
}

export const fetchDataByIdCall = async (id) => {
    const res = await axios.get(`${BASE_URL}/products/${id}`)
    return res
}

export const fetchDataCartCall = async (id) => {
    const res = await axios.get(`${BASE_URL}/carts/${id}`)
    return res
}
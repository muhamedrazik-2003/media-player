import base_url from "./base_url";
import axios from "axios";

export const registerUser = async (data) => {
    return await axios.post(`${base_url}/user`,data)
}
export const getAllusers = async() => {
    return await axios.get(`${base_url}/user`)
}

export const loginUsers = async(email,password) => {
    return await axios.get(`${base_url}/user?email=${email}&password=${password}`)
}
export const videoUpload = async(data) => {
    return await axios.post(`${base_url}/videos`,data)
}
export const getAllVideos = async() => {
    return await axios.get(`${base_url}/videos`)
}
export const deleteVideo = async(videoId) => {
    return await axios.delete(`${base_url}/videos/${videoId}`)
}
export const addCategory = async (data) => {
    return await axios.post(`${base_url}/category`,data)
}
export const getAllCategory = async() => {
    return await axios.get(`${base_url}/category`)
}
export const deleteCategory = async(categoryId) => {
    return await axios.delete(`${base_url}/category/${categoryId}`)
}
export const addHistory = async (data) => {
    return await axios.post(`${base_url}/history`,data)
}
export const getHistory = async() => {
    return await axios.get(`${base_url}/history`)
}
export const deleteHistory = async(deleteId) => {
    return await axios.delete(`${base_url}/history/${deleteId}`)
}
export const addVideoToCategory = async(categoryId, data) => {
    return await axios.put(`${base_url}/category/${categoryId}`,data)
}

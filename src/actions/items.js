import { FETCH_ALL,CREATE_ITEM } from "../actionTypes/actionTypes";
export const  getPosts = ()=>{
    return {type:FETCH_ALL,payload:[]};
}
export const addPost =(data)=>{
    return {type:CREATE_ITEM,payload:data};
}
import axios from "axios";

const url = "http://localhost:8080/";

function axiosGetReuqest(param){
        return axios.get(url+param)      
}

function axiosPostRequest(param,data){
    return axios.post(url+param,data)        
}

function axiosDeleteRequest(param,id){
    return axios.delete(url+param+"/"+id)
}

function axiosPutReuqest(param,data){
    return axios.put(url+param,data)
}

export {axiosGetReuqest,axiosPostRequest,axiosDeleteRequest,axiosPutReuqest};
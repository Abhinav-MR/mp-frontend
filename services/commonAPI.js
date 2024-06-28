import axios from "axios";

export const commonAPI = async (httpMethods,url,reqBody)=>{
    let reqConfig ={
        method:httpMethods,
        url,
        headers:{
            "Content-Type":"application/json"
        },
        data:reqBody
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })
}

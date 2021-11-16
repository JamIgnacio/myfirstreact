import { useEffect, useState } from "react";
import helloServices from "../services/helloServices";

const Hello = () =>{

    //react hooks usestate
    const[hello, setHello] = useState("")

    //react hooks useeffect
    //axios - tool for http request promises
    useEffect( () =>{
        helloServices.getHello()
        .then(response =>{
            setHello(response.data)
        })
        .catch(err => {
            console.log("something went wrong!")
        })
    }
    ) 

    return hello;
}

export default Hello
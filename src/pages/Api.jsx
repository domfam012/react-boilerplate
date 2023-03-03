import React, {useEffect, useState} from "react";
import {exampleApi} from "../api/adaptor.api";

function Api() {
    const [apiData, setApiData] = useState([]);

    useEffect(()=>{
        exampleApi({}, (err, res) => setApiData(res))
    },[]);

    return (
        <>
            <div style={{marginBottom : 50}}>
                <h1>API</h1>
            </div>
            <div style={{display : "flex"}}>
                {
                    apiData?.map((item, index) =>(
                        <div style={{fontSize : 10, marginRight : 20}} key={index}>
                            <p>ID : {item.id}</p>
                            <p>Name : {item.name}</p>
                            <p>Year : {item.year}</p>
                            <p>Color : {item.color}</p>
                            <p>Pantone Value : {item.pantone_value}</p>
                        </div>
                    ))
                }
            </div>
       </>
    );
}

export default Api;

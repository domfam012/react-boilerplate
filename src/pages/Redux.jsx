import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectList, setList} from "../app/slice";
import {exampleApi} from "../api/adaptor.api";

function Redux() {
    const dispatch = useDispatch()
    const list = useSelector(selectList);

    useEffect(()=>{
        exampleApi({}, (err, res) => {
            dispatch(setList(res))
        })
    },[dispatch]);

    return (
        <>
            <div style={{marginBottom : 50}}>
                <h1>Redux</h1>
            </div>
            <div style={{display : "flex"}}>
                {
                    list?.map((item, index) =>(
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

export default Redux;

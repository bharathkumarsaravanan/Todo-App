import React from "react";
import { useEffect,useState } from "react";
import axios from 'axios'


function Get(url){

      useEffect(() => {
                    fetch(url)
                    .then((response) => response.json())
                    .then((datas) => datas)
                },[])
               
}

function Post(url,bodyitems){
    return fetch(url,{
        method: 'POST',
        body: JSON.stringify({bodyitems}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((datas) => datas);
}


export default Get;
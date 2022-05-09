import React from 'react';
import { ReactFragment } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Main = () => {

useEffect(()=>{
    let a = async ()=>{
        let methodclosed = await axios.get('https://api.github.com/repos/pallets/click/issues?state=closed');
        let methodopen = await axios.get('https://api.github.com/repos/pallets/click/issues?state=open');
        console.log('response',methodclosed);
        let data1 = methodclosed['data'];
        console.log("data",data1);
        let state1 = data1.map((data1,i)=>{
         return data1['state'];
        })
        console.log('state',state1);
    }
    a();
},[]);

    
  return (
    <>
    <h1>hi</h1>
    </>
  )
}

export default Main;
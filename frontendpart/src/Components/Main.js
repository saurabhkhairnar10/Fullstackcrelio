import React from 'react';
import { ReactFragment } from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Card, Button, Dropdown,ListGroup} from 'react-bootstrap';
import lodash from 'lodash';
import '../App.css';

const Main = () => {
const [state,setState] = useState([]);
const [assignee,setAssignee] = useState([]);
const [title,setTitle] = useState([]);
const [labelurl,setLabelurl] = useState([]);
const [issue,setIssues] = useState([]);


useEffect(()=>{
    let a = async ()=>{
        let methodclosed = await axios.get('https://api.github.com/repos/pallets/click/issues?state=closed');
        let methodopen = await axios.get('https://api.github.com/repos/pallets/click/issues?state=open');
        let methodall = await axios.get('https://api.github.com/repos/pallets/click/issues?state=all');

        let objassignee = Object.entries(methodall.data).map((data,idx)=>{return data[1]['assignee']});
        let objstate = Object.entries(methodall.data).map((data,idx)=>{return data[1]['state']});
        let objtitle = Object.entries(methodall.data).map((data,idx)=>{return data[1]['title']});
        let objlabelurl = Object.entries(methodall.data).map((data,idx)=>{return data[1]['labels_url']});
        
         console.log('response closed method',methodclosed);
         // let data1 = methodclosed['data'];
         // console.log("data",data1);
         // let state1 = data1.map((data1,i)=>{
         //  return data1['state'];
         // })
         console.log('objassignee',objassignee);
         // console.log("title",objtitle);
         // console.log("labels_url",objlabelurl);
        
         // let methodopen = fetch('https://api.github.com/repos/pallets/click/issues?state=open').then((data)=>{
         //   return data.json()}).then((res)=>{console.log("res....",res); return res});
         let objass = objassignee.filter((d)=>{if(d != null)return d});
         console.log("assignee",objass);
         let login = objass.map((login)=>{return login['login']});
         // let v = Object.values(objass).forEach((d)=>{return d['login']});
         // console.log("v",v);
         console.log('login',login);  
     }
     a();
 },[]);

// let allState = async ()=>{
//   let methodall =await axios.get('https://api.github.com/repos/pallets/click/issues?state=all&per_page=100&   page=1');
//   let objstate = Object.entries(methodopen.data).map((data,idx)=>{return data[1]['state']});
//   setState(objstate);
//   let objassignee = Object.entries(methodopen.data).map((data,idx)=>{return data[1]['assignee']});
//   let objass = objassignee.filter((d)=>{if(d != null)return d});
//   let login = objass.map((login)=>{return login['login']});
//   setAssignee(login);
//   let objtitle = Object.entries(methodopen.data).map((data,idx)=>{return data[1]['title']});  
//   setTitle(objtitle);
//   let objlabelurl = Object.entries(methodopen.data).map((data,idx)=>{return data[1]['labels_url']}); 
  //  setLabelurl(objlabelurl);
//  }

 let openState = async ()=>{
    let methodopen =await axios.get('https://api.github.com/repos/pallets/click/issues?state=open&per_page=100&   page=1');
    let objstate = Object.entries(methodopen.data).map((data,idx)=>{return data[1]['state']});
    setState(objstate);
    let objassignee = Object.entries(methodopen.data).map((data,idx)=>{return data[1]['assignee']});
    let objass = objassignee.filter((d)=>{if(d != null)return d});
    let login = objass.map((login)=>{return login['login']});
    setAssignee(login);
    let objtitle = Object.entries(methodopen.data).map((data,idx)=>{return data[1]['title']});  
    setTitle(objtitle);
    let objlabelurl = Object.entries(methodopen.data).map((data,idx)=>{return data[1]['labels_url']}); 
    setLabelurl(objlabelurl);
 }

  let closedState = async () => {
      let methodclosed =await axios.get('https://api.github.com/repos/pallets/click/issues?state=closed&&per_page=100&page=1');
      let objstate = Object.entries(methodclosed.data).map((data,idx)=>{return data[1]['state']});
      setState(objstate);
      let objassignee = Object.entries(methodclosed.data).map((data,idx)=>{return data[1]['assignee']});
      let objass = objassignee.filter((d)=>{if(d != null)return d});
      let login = objass.map((login)=>{return login['login']});
      setAssignee(login);
      let objtitle = Object.entries(methodclosed.data).map((data,idx)=>{return data[1]['title']});  
      setTitle(objtitle);
      let objlabelurl = Object.entries(methodclosed.data).map((data,idx)=>{return data[1]['labels_url']}); 
      setLabelurl(objlabelurl);
  }
  
  return (
    <>
     <Dropdown>
   <Dropdown.Toggle variant="success" id="dropdown-basic">
     Dropdown Button
   </Dropdown.Toggle>

   <Dropdown.Menu>
     <Dropdown.Item onClick={openState}>Open State</Dropdown.Item>
     <Dropdown.Item onClick={closedState}>Closed State</Dropdown.Item>
     {/* <Dropdown.Item onClick={allState}>All State</Dropdown.Item> */}
   </Dropdown.Menu>
 </Dropdown>
  <div>{state.map((d)=>{return <p>{d}</p>})}</div> 
  <div>{assignee.map((assignee)=>{return <p>{assignee}</p>})}</div>
 <div>{title.map((title)=>{return <p>{title}</p>})}</div>
 <div>{labelurl.map((labelurl)=>{return <p>{labelurl}</p>})}</div>
 <div>{ state.map((state)=>{ return(
   <Card className='marginClass'>
   <Card.Header>title</Card.Header>
   <ListGroup variant="flush">
     <ListGroup.Item>assignee name</ListGroup.Item>
     <ListGroup.Item>label url</ListGroup.Item>
    <ListGroup.Item>State is {state}</ListGroup.Item>
  </ListGroup>
 </Card>)})
 }
 </div> 
     </>
   );
};

 export default Main;
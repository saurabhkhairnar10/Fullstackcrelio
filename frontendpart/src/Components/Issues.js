import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Dropdown, ListGroup } from "react-bootstrap";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [filteredIssues,setFilteredIssues]=useState([]);
 
  useEffect(() => {
    fetchissues();
    // console.log(issues);
  }, []);

  const changeStateclosed=()=>{
    console.log("state changed closed",issues)
    // setFilteredIssues(filteredIssues.map((state)=>{if(state['state'] === 'open') return state['state']}));
    let filterdIssues = issues?.filter((ins) => ins.state == "closed" );
    console.log("filtered issues closed",filterdIssues);
    setFilteredIssues(filterdIssues);
  }
  const changeStateopen=()=>{
    console.log("state changed open",issues)
    // setFilteredIssues(filteredIssues.map((state)=>{if(state['state'] === 'open') return state['state']}));
    let filterdIssues = issues?.filter((ins) => ins.state == "open" );
    console.log("filtered issues open",filterdIssues);
    setFilteredIssues(filterdIssues);
  }
  const changeStateall=()=>{
    console.log("state changed",issues);
    let filterdIssues = issues;
    setFilteredIssues(filterdIssues);
    console.log("filtered issues",filterdIssues);
    
  }

  const fetchissues = async () => {
    const response = await axios.get(
      "https://api.github.com/repos/pallets/click/issues?state=all&per_page=100"
    );
    const data = response.data;
    // console.log("data", typeof data);
    let obj = Object.entries(data);
    let assigneenamearr = obj.map((arr) => {
      return arr[1]["assignee"];
    });
    let assigneenamefilter = assigneenamearr.filter((data) => {
      if (data != null) return data;
    });
    let assigneename = assigneenamefilter.map((login) => {
      return login["login"];
    });
    
    //in issues state variable keep all the data fetched by api
    setIssues(data);
    //in filteredIssues state variable keep the filtered data
    setFilteredIssues(data);
  };

  return (
    <div>
      <h1>Issues Page</h1>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" >
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={changeStateopen}>Open State</Dropdown.Item>
          <Dropdown.Item onClick={changeStateclosed}>Closed State</Dropdown.Item>
          <Dropdown.Item onClick={changeStateall}>All State</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="cssClass">
      {(filteredIssues.length > 0 )? (
        filteredIssues.map((issue) => {
              console.log("issues",issue);
          return (
           
            <Card className="marginClass">
              <Card.Header>Title is {issue.title}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  aasignee name {(issue.assignees.length>0)?issue.assignees[0]["login"]:"is not assigned"}
                  </ListGroup.Item>
                <ListGroup.Item>  
                  Node_id is {issue.node_id}
                </ListGroup.Item>
                <ListGroup.Item>labels name is {(issue.labels.length > 0)?<span className="bgColor">issue.labels[0]['name']</span>:"not assigned"}</ListGroup.Item>
                <ListGroup.Item>
                  State is {issue.state} and id is {issue.id}
                </ListGroup.Item>
              </ListGroup>
            </Card>
           
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
      </div>


    </div>
  );
};

export default Issues;

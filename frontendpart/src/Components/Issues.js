import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Dropdown, ListGroup } from "react-bootstrap";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  //   const [assignee,setAssignee] =useState([]);
  let openState = ()=>{
      
    issues.length > 0 ? (
        issues.map((issue) => {
         if(issue.state === 'open')
          return (
            <Card className="marginClass">
              <Card.Header>{issue.title}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  aasignee name
                  {/* {issue.assignee != null?(login):null} */}
                </ListGroup.Item>
                <ListGroup.Item>{issue.labels_url}</ListGroup.Item>
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
  
  let closedState = ()=>{
        issues.length > 0 ? (
            issues.map((issue) => {
             if(issue.state === 'closed')
              return (
                <Card className="marginClass">
                  <Card.Header>{issue.title}</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      aasignee name
                      {/* {issue.assignee != null?(login):null} */}
                    </ListGroup.Item>
                    <ListGroup.Item>{issue.labels_url}</ListGroup.Item>
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

   let allState = ()=>{
            issues.length > 0 ? (
                issues.map((issue) => {
                 
                  return (
                    <Card className="marginClass">
                      <Card.Header>{issue.title}</Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          aasignee name
                          {/* {issue.assignee != null?(login):null} */}
                        </ListGroup.Item>
                        <ListGroup.Item>{issue.labels_url}</ListGroup.Item>
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
         

  useEffect(() => {
    fetchissues();
    console.log(issues);
  }, []);

  const fetchissues = async () => {
    const response = await axios.get(
      "https://api.github.com/repos/pallets/click/issues?state=all&per_page=100"
    );
    const data = response.data;
    console.log("data", typeof data);
    let obj = Object.entries(data);
    let arr = obj.map((arr) => {
      return arr[1]["assignee"];
    });
    let logfil = arr.filter((data) => {
      if (data != null) return data;
    });
    let login = logfil.map((login) => {
      return login["login"];
    });
    console.log("obj", obj);
    console.log("arr", arr);
    console.log("filter asigne", logfil);
    console.log("login", login);
    setIssues(data);
  };

  return (
    <div>
      <h1>Issues Page</h1>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={openState}>Open State</Dropdown.Item>
          <Dropdown.Item onClick={closedState}>Closed State</Dropdown.Item>
          <Dropdown.Item onClick={allState}>All State</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {issues.length > 0 ? (
        issues.map((issue) => {
         
          return (
            <Card className="marginClass">
              <Card.Header>{issue.title}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  aasignee name
                  {/* {issue.assignee != null?(login):null} */}
                </ListGroup.Item>
                <ListGroup.Item>{issue.labels_url}</ListGroup.Item>
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
  );
};

export default Issues;

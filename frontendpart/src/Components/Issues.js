import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoIssueClosed,GoIssueOpened,GoCheck } from "react-icons/go";
import {
  Card,
  Button,
  Dropdown,
  ListGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);

  useEffect(() => {
    fetchissues();
    // console.log(issues);
  }, []);

  const changeStateclosed = () => {
    console.log("state changed closed", issues);
    // setFilteredIssues(filteredIssues.map((state)=>{if(state['state'] === 'open') return state['state']}));
    let filterdIssues = issues?.filter((ins) => ins.state == "closed");
    console.log("filtered issues closed", filterdIssues);
    setFilteredIssues(filterdIssues);
  };
  const changeStateopen = () => {
    console.log("state changed open", issues);
    // setFilteredIssues(filteredIssues.map((state)=>{if(state['state'] === 'open') return state['state']}));
    let filterdIssues = issues?.filter((ins) => ins.state == "open");
    console.log("filtered issues open", filterdIssues);
    setFilteredIssues(filterdIssues);
  };
  const changeStateall = () => {
    console.log("state changed", issues);
    let filterdIssues = issues;
    setFilteredIssues(filterdIssues);
    console.log("filtered issues", filterdIssues);
  };

  const fetchissues = async () => {
    const response = await axios.get(
      "https://api.github.com/repos/pallets/click/issues?state=all&per_page=200"
    );
    const data = response.data;
    // console.log("data", typeof data);
    // let obj = Object.entries(data);
    // let assigneenamearr = obj.map((arr) => {
    //   return arr[1]["assignee"];
    // });
    // let assigneenamefilter = assigneenamearr.filter((data) => {
    //   if (data != null) return data;
    // });
    // let assigneename = assigneenamefilter.map((login) => {
    //   return login["login"];
    // });

    //in issues state variable keep all the data fetched by api
    setIssues(data);
    //in filteredIssues state variable keep the filtered data
    setFilteredIssues(data);
  };

  return (
    // <div>
    //   <div className="position">
    //     <h4 className="issueheader">ISSUES</h4>
    //     <Dropdown className="dropdown">
    //       <Dropdown.Toggle variant="success" id="dropdown-basic">
    //         Select State
    //       </Dropdown.Toggle>
    //       <Dropdown.Menu>
    //         <Dropdown.Item onClick={changeStateopen}>Open State</Dropdown.Item>
    //         <Dropdown.Item onClick={changeStateclosed}>
    //           Closed State
    //         </Dropdown.Item>
    //         <Dropdown.Item onClick={changeStateall}>All State</Dropdown.Item>
    //       </Dropdown.Menu>
    //     </Dropdown>
    //   </div>

    //   <div className="cssClass">
    //     {filteredIssues.length > 0 ? (
    //       filteredIssues.map((issue) => {
    //         console.log("issues", issue);
    //         return (
    //           // <div className="box">
    //           //   <div className="left">
    //           //     <div className="style1">
    //           //       <a href={issue.html_url} className="title" target="_blank">
    //           //         {issue.title}
    //           //       </a>
    //           //     </div>
    //           //     <div className="style2">
    //           //       # {issue.number} is {issue.state} and id is {issue.id}
    //           //      </div>
    //           //    </div>
    //           //    <div className="right">
    //           //      <div>
    //           //        <a
    //           //         href={
    //           //           issue.assignees.length > 0
    //           //             ? issue.assignees.map((assignee) => {
    //           //                 return assignee.html_url;
    //           //               })
    //           //             : null
    //           //         }
    //           //         target="_blank"
    //           //       >
    //           //         {issue.assignees.length > 0
    //           //           ? issue.assignees[0]["login"]
    //           //           : null}
    //           //       </a>
    //           //     </div>
    //           //     <div>
    //           //       {issue.labels.length > 0 ? (
    //           //         <span>
    //           //           {issue.labels.map((label) => {
    //           //             return (
    //           //               <span style={{backgroundColor:`${'#'}${label['color']}`,margin:'2px'}}>`{label["name"]}` </span>
    //           //             );
    //           //           })}
    //           //         </span>
    //           //       ) : null}
    //           //     </div>
    //           //    </div>
    //           //  </div>

              

    //           <div className="box">
    //           <div className="container">
    //             <div className="row justify-content-start">
    //               <div className="col-1">
    //                 <div style={{float: 'left',margin: '10px'}}>{(issue.state === 'open')?(<GoIssueOpened/>):(<GoCheck/>)}</div>
    //               </div>
    //               <div className="col-9">
    //                 <div className="style1"> 
    //                    <a href={issue.html_url} className="title" target="_blank">   {issue.title}</a>
    //                 </div>
    //                 <div className="style2"># {issue.number} is {issue.state} and id is {issue.id} </div>
    //               </div>
    //               <div className="col-2">
    //                 <div>
    //                 <a
    //                   href={
    //                      issue.assignees.length > 0
    //                        ? issue.assignees.map((assignee) => {
    //                            return assignee.html_url;
    //                          })
    //                        : null
    //                    }
    //                    target="_blank"
    //                  >
    //                    {issue.assignees.length > 0
    //                      ? issue.assignees[0]["login"]
    //                      : null}
    //                  </a>
    //                 </div>
    //                 <div>
    //                 {issue.labels.length > 0 ? (
    //                    <span>
    //                      {issue.labels.map((label) => {
    //                        console.log("label",label);
    //                        return (
    //                          <span style={{backgroundColor:`${'#'}${label['color']}`,margin:'2px'}}>`{label["name"]}` </span>
    //                        );
    //                      })}
    //                    </span>
    //                  ) : null}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           </div>

    //         );
    //       })
    //     ) : (
    //       <h1>Loading...</h1>
    //     )}
    //   </div>
    // </div>





  
<>
    {/* <input type="text" name="q" id="js-issues-search" value="is:issue is:open " className="form-control form-control subnav-search-input input-contrast width-full" placeholder="Search all issues" aria-label="Search all issues"/> */}
    <div className="position">
         <h4 className="issueheader">ISSUES</h4>
         <Dropdown className="dropdown dropdownmr">
           <Dropdown.Toggle variant="success" id="dropdown-basic">
             Select State
           </Dropdown.Toggle>
           <Dropdown.Menu>
             <Dropdown.Item onClick={changeStateopen}>Open State</Dropdown.Item>
             <Dropdown.Item onClick={changeStateclosed}>
               Closed State
             </Dropdown.Item>
             <Dropdown.Item onClick={changeStateall}>All State</Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown>
       </div>

  <div className="container border rounded-3">
       <div className="row border-bottom" style={{background: "#eee"}}>
           <div className="col-2 d-flex justify-content-around my-2">
            <div className="d-flex col">
              <div className="col plcol1"><GoIssueOpened></GoIssueOpened></div>
              <div className="col hovercol1 mlopen">Open</div>
            </div>  
            <div className="d-flex col">
              <div className="col"><GoCheck/></div>
              <div className="col hovercol1 mlclosed">Closed</div>
            </div>  
           </div>
           <div className="col-9">

           </div>
       </div>
       
       {filteredIssues.length > 0 ? (filteredIssues.map((issue) => {
            console.log("issues", issue);
            return (
          <div className="row border-bottom" style={{background: "#eee"}}>
              <div className="col-1 marginlcol1">{(issue.state === 'open')?(<GoIssueOpened className="text-success"/>):(<GoCheck/>)}</div>

              <div className="col-9 marginlcol9">
                 <div className="style1"> 
                      <a href={issue.html_url} className="title" target="_blank">   {issue.title}</a>
                 </div>
                  <div className="style2"># {issue.number} is {issue.state} and id is {issue.id} </div>
              </div>

              <div className="col-2 marginlcol2">
                     <div>
                     <a
                      href={
                         issue.assignees.length > 0
                           ? issue.assignees.map((assignee) => {
                               return assignee.html_url;
                             })
                           : null
                       }
                       target="_blank"
                     >
                        {issue.assignees.length > 0
                         ? issue.assignees[0]["login"]
                         : null}
                      </a>
                     </div>
                     <div>
                     {issue.labels.length > 0 ? (
                        <span>
                          {issue.labels.map((label) => {
                           console.log("label",label);
                           return (
                             <span style={{backgroundColor:`${'#'}${label['color']}`,margin:'2px'}}>`{label["name"]}` </span>
                           );
                         })}
                        </span>
                     ) : null}
                     </div>
                   </div>

              </div>
            )
}
)
):(<h1>Loading...</h1>)}
        
       
       
  </div>

</>

  );
};

export default Issues;




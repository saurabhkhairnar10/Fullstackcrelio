import React from "react";
import { Link } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import './forgetpassword.css';

import './Pages.css';

function ForgetPasswordPage() {
  return (
    <div className="container">
      <div className="text-center marginpage">
        {/* <h2>Reset your password</h2>
        <h5>Enter your email address and we will send you a new password</h5> */}
        <form action="/">
          <p>
            <label id="reset_pass_lbl">Email address</label>
            <br />
            <input type="email" name="email" required />
          </p>
          <p>
            <button id="sub_btn" type="submit">
              Send password reset email
            </button>
          </p>
        </form>
        <footer>
          <p>
            First time? <Link to="/register">Create an account</Link>.
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
       </div>
     </div>

    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-4 col-md-offset-4">
    //       <div className="panel panel-default">
    //         <div className="panel-body">
    //           <div className="text-center">
    //             <h3>
    //               <i className="fa fa-lock fa-4x"></i>
    //             </h3>
    //             <h2 className="text-center">Forgot Password?</h2>
    //             <p>You can reset your password here.</p>
    //             <div className="panel-body">
    //               <form
    //                 id="register-form"
    //                 role="form"
    //                 autocomplete="off"
    //                 className="form"
    //                 method="post"
    //               >
    //                 <div className="form-group">
    //                   <div className="input-group">
    //                     <span className="input-group-addon">
    //                       <i className="glyphicon glyphicon-envelope color-blue"></i>
    //                     </span>
    //                     <input
    //                       id="email"
    //                       name="email"
    //                       placeholder="email address"
    //                       className="form-control"
    //                       type="email"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="form-group">
    //                   <input
    //                     name="recover-submit"
    //                     className="btn btn-lg btn-primary btn-block"
    //                     value="Reset Password"
    //                     type="submit"
    //                   />
    //                 </div>

    //                 <input
    //                   type="hidden"
    //                   className="hide"
    //                   name="token"
    //                   id="token"
    //                   value=""
    //                 />
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    

    // <div className="card card-outline-secondary">
    //     <div className="card-header">
    //         <h3 className="mb-0">Password Reset</h3>
    //     </div>
    //     <div className="card-body">
    //         <form className="form" role="form" autocomplete="off">
    //             <div className="form-group">
    //                 <label for="inputResetPasswordEmail">Email</label>
    //                 <input type="email" className="form-control" id="inputResetPasswordEmail" required/>
    //                 <span id="helpResetPasswordEmail" className="form-text small text-muted">
    //                         Password reset instructions will be sent to this email address.
    //                     </span>
    //             </div>
    //             <div className="form-group">
    //                 <button type="submit" className="btn btn-success btn-lg float-right">Reset</button>
    //             </div>
    //         </form>
    //     </div>
    // </div>

  );
}

export default ForgetPasswordPage;

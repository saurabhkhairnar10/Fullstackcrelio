import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import Issues from "../../Components/Issues";
import ForgetPasswordPage from "./ForgetPasswordPage";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import "./Pages.css";
import "./login.css";

function LoginPage() {
  // const [email, setEmail] = useState("");
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data['Email']);
    console.log("email", data['password']);
    if(data['Email'] && data['password']){
      history.push('Issues');
    }
  };
  return (
    <div className="text-center m-5-auto">
      <a href="https://github.com/" target="_blank">
        <svg
          height="48"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="48"
          data-view-component="true"
          className="octicon octicon-mark-github"
        >
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </a>
      <h2>Sign in to GitHub</h2>
      <form action="/Issues" onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>Username or email address</label>
          <br />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            {...register("Email", {
              required: true,
              // pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            })}
            required
          />
        
        {/* <p className="err-msg">
          {" "}
          {errors.Email?.type === "required" && 
          // toast.error("Error Notification !")
        //   <p className="text-danger" role='alert'>
        //    "Email id is required"
        //  </p>
          // }
        </p> */}
        <p className="err-msg">
          {" "}
          {errors.Email?.type === "pattern" && 
          <p className="text-white bg-warning mt-1" role='alert'>
          "Email pattern is not matched"
         </p>
          }
        </p>
        </p>
        <p>
          <label>Password</label>
          {/* <Route path='/forgetpassword' component={ForgetPasswordPage}></Route> */}
          <Link to="/forgetpassword">
            <label className="right-label">Forget password?</label>
          </Link>

          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 3,
              maxLength: 10,
            })}
            required
          />
          {/* <p className="err-msg">
            {" "}
            {errors.password?.type === "required" && 
             <p className="text-danger" role='alert'>
             "Password is required"
           </p>
            }
          </p> */}
          <p className="err-msg">
            {" "}
            {errors.password?.type === "minLength" && 
            <p className="text-white bg-warning mt-1" role='alert'>
            "Required Minimum Length is 3"
           </p>
            }
          </p>
          <p className="err-msg">
            {" "}
            {errors.password?.type === "maxLength" && 
            <p className="text-white bg-warning mt-1" role='alert'>
            "Required Maximum Length is 10"
           </p>
            }
          </p>
        </p>
        <p>
          <button id="sub_btn" type="submit" className="btn btn-success">
            Login
          </button>
        </p>
      </form>
      <footer className="border rounded-1 footermargin">
        <p>
          New to GitHub?
          <span>        
          {/* <Link to="/register">Create new account</Link> */}
          <a href="https://github.com/signup?source=login">
            Create new account
          </a>
          </span>
        </p>
        {/* <p><Link to="/">Go To Back Page</Link>.</p> */}
      </footer>
    </div>
  );
}

export default LoginPage;

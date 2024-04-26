
import React, { useState } from "react";
import img from "../assets/artisched-orange-logo.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FormikControl from "./formAuth/FormikControl";
import { Link } from "react-router-dom";

function LoginPage() {

    const radioOptions = [
      { key: " Client", value: "roption1" },
      { key: " Artisan", value: "roption2" },
    ];

    const initialValues = {
        email: "",
        password: "",
        radioOption: "roption1"
      };
    
      const navigate = useNavigate();
    
      const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().required("Required"),
      });
    
      const [visible, setVisible] = useState(false);
    
      async function onSubmit(values) {
        let body = {
          email: values.email,
          password: values.password,
          type: values.radioOption === 'roption1' ? 'client' : 'artisan'
        };
    
        console.log("login body: ", body);
    
        try {
          const response = await fetch(`${process.env.REACT_APP_ARTISCHED_API}/login`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            
            },
          });
          let responseData = await response.json();
          console.log(responseData);
          const token = responseData.accessToken;
          console.log(token);
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('user', JSON.stringify(responseData));
          if (token)
          {
            sessionStorage.setItem('user_email', values.email);
            if(body.type === "client"){
              navigate("/user-dashboard");
            }
            else{
              navigate("/artisan-dashboard");
            }
            
          }
          else{
            console.log("user not found")
          }
         
        } catch (error) {
          console.log(error);
        }
      }
      

    return (
        <div className="bg-cover bg-[url('./assets/newbg.jpg')]">
            <div className="min-h-screen bg-black bg-opacity-30 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto w-20 h-20 w-auto bg-black rounded-full" src={img} alt="Artisched logo" />
          <h2 className="mt-2 text-center text-2xl leading-9 font-bold text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
          <div className="bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10 bg-blur bg-black-200 bg-opacity-60 p-6 rounded-lg shadow-lg">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="flex justify-center" >
                      <div className="flex mt-1 rounded-md text-white ">
                        <FormikControl
                          control="input"
                          type="email"
                          name="email"
                          placeholder="user@example.com"
                          className="appearance-none block w-80 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />

                        <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <div className="flex ml-6 inline-block rounded-lg text-black">
                        <FormikControl
                          control="input"
                          name="password"
                          placeholder="Password"
                          type={visible ? "text" : "password"}
                          className="appearance-none block w-80  px-4 py-2 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                        <div
                          className="flex items-center text-center justify-center p-2 "
                          onClick={() => setVisible(!visible)}
                        >
                          {visible ? (
                            <i className="fas fa-eye text-gray-300"></i>
                          ) : (
                            <i className="fas fa-eye-slash text-gray-300"></i>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="w-50">
                        <FormikControl
                          control="radio"
                          name="radioOption"
                          // label="Login as:"
                          options={radioOptions}
                          className=" ml-6 px-8 my-8 text-white inline-block"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <span className=" flex justify-center w-full rounded-md ">
                        <button
                          type="submit"
                          disabled={!formik.isValid}
                          className="w-80 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                          Sign in
                        </button>
                      </span>

                      <p className="mt-2 text-center text-sm leading-5 text-gray-300 max-w">
                        Or
                        <br />
                        <Link
                          to="/register"
                          className="text-sm text-yellow-500 hover:text-orange-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                        >
                          create a new account
                        </Link>
                      </p>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
        </div>
    );
}

export default LoginPage;
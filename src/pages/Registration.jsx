import React from "react";
import img from "../assets/artisched-orange-logo.png";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./formAuth/FormikControl";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Registration() {
  const radioOptions = [
    { key: "Client", value: "roption1" },
    { key: "Artisan", value: "roption2" },
  ];

  const [initialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    radioOption: "",
  });

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().label("Enter first name").required("Required"),
    lastName: Yup.string().label(" Enter last name ").required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    radioOption: Yup.string().required("Required"),
  });

  const [visible, setVisible] = useState(false);

  async function onSubmit(values) {
    let body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };

    console.log("register body: ", body);

    try {
      let endpoint = "";
      if (values.radioOption === "roption1") {
        endpoint = `${process.env.REACT_APP_ARTISCHED_API}/add-user`;
      } else if (values.radioOption === "roption2") {
        endpoint = `${process.env.REACT_APP_ARTISCHED_API}/add-artisan`;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      let responseData = await response.json();
      console.log(responseData);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-cover bg-[url('./assets/newbg.webp')]">
      <div className="min-h-screen  bg-black bg-opacity-30 flex flex-col justify-center py-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto w-20 h-20 w-auto bg-black rounded-full"
            src={img}
            alt="Workflow"
          />
          <h2 className=" text-center text-xl leading-9 font-bold text-white">
            Create a new account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-auto">
          <div className=" w-auto bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10 bg-blur bg-black-200 bg-opacity-60 p-6 rounded-lg shadow-lg">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>

                    {/* name */}
                    <div className="flex mx-6 gap-x-12">
                      <div className="mt-4 relative rounded-md">
                        <FormikControl
                          control="input"
                          type="text"
                          name="firstName"
                          placeholder="first name"
                          className="appearance-none block w-60 justify-center px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                        
                      </div>

                      <div className=" mt-4 relative rounded-md ">
                        <FormikControl
                          control="input"
                          type="text"
                          name="lastName"
                          placeholder="last name"
                          className="appearance-none block w-60 justify-center px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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

                    {/* email */}
                    <div className="flex mx-6 mt-6">
                      <div className="flex relative rounded-md mt-2 w-full">
                        <FormikControl
                          control="input"
                          type="email"
                          name="email"
                          placeholder="user@example.com"
                          className="w-full appearance-none w-80 justify-center px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                      </div>
                    </div>

                    {/* passwords */}
                    <div className="flex mx-6 gap-x-12 mt-4">
                      <div className="mt-4 relative rounded-md">
                        <FormikControl
                          control="input"
                          type={visible ? "text" : "password"}
                          name="password"
                          placeholder="password"
                          className="appearance-none block w-60 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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

                      <div className="mt-4 relative rounded-md">
                        <FormikControl
                          control="input"
                          type={visible ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="confirm Password"
                          className="appearance-none block w-60 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                        
                    {/* others */}
                    <div className="flex justify-between mx-6 mt-6">
                      <div className="w-50">
                        <FormikControl
                          control="radio"
                          name="radioOption"
                          label="Register as:"
                          options={radioOptions}
                          className=" ml-6 px-8 my-8 text-white inline-block"
                        />
                      </div>

                      {formik.values.radioOption === "roption2" && (
                        <div className="w-50">
                          <h3 className="text-white">Payment Details</h3>
                          <label className="text-white">
                            Pay Registration Fee:
                          </label>
                          
                          <select className="mx-2 bg-white text-orange-800 focus:outline-none">
                            <option>Pay Pal</option>
                            <option>Card</option>
                            <option>Mobile Money</option>
                          </select>

                          <FormikControl
                            control="input"
                            type="text"
                            name="paymentMethod"
                            placeholder="Pay ₵200.00"
                            className="mt-2 appearance-none block w-60 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      )}
                    </div>
                    
                    <br />
                    <div className=" mt-2 ">
                      <span className=" mx-auto block w-80 rounded-md ">
                        <button
                          type="submit"
                          disabled={!formik.isValid}
                          className=" ml-4 w-80 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                          Register
                        </button>
                      </span>
                      <p className="mt-2 text-center text-sm leading-5 text-gray-300 max-w">
                        Or
                        <br />
                        <Link
                          to="/login"
                          className="text-sm text-yellow-500 hover:text-orange-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                        >
                          login to your account
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

export default Registration;

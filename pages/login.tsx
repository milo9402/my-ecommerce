/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import type { NextPage } from 'next'
import axios from "axios";
import { useForm } from "react-hook-form";
import Router from "next/router";

const Login: NextPage = () => {
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState:{errors},
  } = useForm();

  const submitHandler = ({ username, password}) => {
    setLoading(true)
      console.log({ username, password})
      //   // aqui se haria la consulta para login
      axios
        .post('https://fakestoreapi.com/auth/login', {
          username,
          password
        })
        .then(response => {
          console.log(response);
          Router.push('/')
        })
        .catch(e => {
          console.error(e)
          setLoginError(e.response.data)
          setLoading(false)
        })
  }
  
    return (
      <section className="h-full flex justify-center gradient-form bg-gray-200 md:h-screen">
        
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://media.licdn.cn/dms/image/C4E0BAQH3jHBkVooGaw/company-logo_200_200/0/1519750995447?e=2159024400&v=beta&t=FNbfxWqLTKMcI6j3fT1eh7ha_fbviTtPIpDrFIAx1Jo"
                          alt="logo"
                        />
                      </div>
                      <form className="mt-4" onSubmit={handleSubmit(submitHandler)}>
                          {
                            loginError && (
                              <div className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                                </svg>
                                {loginError}
                              </div>)
                          }
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                            id="username"
                            placeholder="Username"
                            name="username"
                            autoComplete="current-username"
                            {...register('username', {required:'Please enter your username'})}
                          />
                          {errors.username && <div className="text-red-500" > Error </div> }
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                            id="password"
                            placeholder="Password"
                            name="password"
                            autoComplete="current-password"
                            {...register('password', 
                              {
                                required:'Please enter your password',
                                minLength:{value: 5, message:'password is more than 5 chars'}
                              }
                            )}
                          />
                            {errors.password && (<div className="text-red-500" > Error </div> )}
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-green-500 hover:bg-green-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            { loading ? 'Loading...' : 'Log in' }
                          </button>
                          <a className="text-gray-500" href="#!">Forgot password?</a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{
                      backgroundImage: "radial-gradient(circle at -20.71% 50%, #c0e360 0, #abe466 12.5%, #8edf67 25%, #67d564 37.5%, #21c55e 50%, #00b55b 62.5%, #00aa5f 75%, #00a369 87.5%, #00a179 100%)"
                    }}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}


export default Login;

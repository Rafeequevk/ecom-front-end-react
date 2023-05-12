import React from "react";


const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-SkyBlue'>
      <div className=' p-6 rounded-lg bg-white w-1/4 '>
        <h1 className=' my-4 text-center text-3xl font-bold '>Login</h1>
        <form className='flex flex-col ' action=''>
          <label className=' text-base mb-1 mt-4' for='email'>
            Enter Your Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            className='rounded-md m-0 mb-2 p-2 text-sm w-full focus:shadow-lg  outline outline-1  text-metal '
            placeholder='Enter Email'
          />
          <label className=' text-base mb-1 mt-4' for='password'>
            Enter Your Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Your Password'
            className='rounded-md m-0 mb-2 p-2 text-base w-full focus:shadow-lg outline outline-1 text-metal'
          />
          <button
            className='rounded-md m-0 mb-2 mt-4 text-base w-full h-10   bg-SkyBlue text-white'
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => {
        const console = err.messge;
      });
    e.preventDefault();
  };

  return (
    <div className='flex items-center justify-center h-screen bg-SkyBlue'>
      <div className=' p-6 rounded-lg bg-white w-1/4 '>
        <h1 className=' my-4 text-center text-3xl font-bold '>Signup</h1>
        <form className='flex flex-col ' action=''>
          <label className=' text-base mb-1 mt-4' htmlFor='email'>
            Enter Your Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            name='email'
            id='email'
            className='rounded-md m-0 mb-2 p-2 text-sm w-full focus:shadow-lg  outline outline-1  text-metal '
            placeholder='Enter Email'
          />
          <label className=' text-base mb-1 mt-4' htmlFor='password'>
            Enter Your Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            id='password'
            placeholder='Your Password'
            className='rounded-md m-0 mb-2 p-2 text-base w-full focus:shadow-lg outline outline-1 text-metal'
          />
          <label className=' text-base mb-1 mt-4' htmlFor='email'>
            Confim Your Password
          </label>
          <input
            type='text'
            name='cpass'
            id='cpass'
            placeholder='Confirm Password'
            className='rounded-md m-0 mb-2 p-2 text-base w-full focus:shadow-lg outline outline-1 text-metal'
          />
          <button
            className='rounded-md m-0 mb-2 mt-4 text-base w-full h-10   bg-SkyBlue text-white'
            type='submit'
            onClick={SignUp}
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthStore } from '../store/AuthContext';

const SignUpPage = () => {

  const { checkAuth, signup} = useAuthStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);   // Only call your store method
      toast.success('Signed up!');
      navigate('/');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || 'Signup failed');
    }
  };


  return (
    <>
<div className="flex justify-center items-center min-h-screen">

    <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-3">
        <legend className="fieldset-legend text-3xl">SignUp</legend>

        <label className="label">Username</label>
        <input name='username' type="text" className="input" placeholder="Name" onChange={handleChange}/>

        <label className="label">Email</label>
        <input name="email" type="email" className="input" placeholder="Email" onChange={handleChange}/>

        <label className="label">Password</label>
        <input name="password" type="password" className="input" placeholder="Password" onChange={handleChange}/>

        <button className="btn btn-neutral mt-4" type='submit'>Sign-Up</button>
    </form>
    </div>
</>
  )
}

export default SignUpPage
import React, { use, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/AuthContext'; // or your actual file path


const LoginPage = () => {


  const { login, authUser } = useAuthStore();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', formData, {
        withCredentials: true
      });

      if (!res || !res.data) {
        throw new Error('No response data received');
      }

      const { data } = res; // destructuring
      await login(formData); // login function takes the data object
      
        toast.success('Logged in!');
        navigate('/');
      
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Login failed');
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input name="email" type="email" className="input" placeholder="Email" onChange={handleChange} />

        <label className="label">Password</label>
        <input name="password" type="password" className="input" placeholder="Password" onChange={handleChange} />

        <button type="submit" className="btn btn-neutral w-full">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

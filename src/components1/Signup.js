import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import { useSnackbar } from "notistack";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    profession: "",
    load: false,
    success: false,
  });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/login");
    enqueueSnackbar("Signed In successfully", { variant: "success" });

  };

  return (
    <form onSubmit={handleSubmit} class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 w-48 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font md:text-7xl font-medium mt-[-90px]  text-gray-900">
            Geeksynergy Technologies Pvt Ltd
          </h1>
          <p class="leading-relaxed md:mt-14 md:text-2xl">Sanjayanagar, Bengaluru-56.</p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="password" class="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={formData.password}
              name="password"
              onChange={handleChange}
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div class="relative mb-4">
            <label for="phone" class="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              name="phone"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <select
            class="relative mb-4 "
            name="profession"
            onChange={handleChange}
          >
            <option class="" value="">
              Select Profession
            </option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="tester">Tester</option>
          </select>
          <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Sign Up
          </button>
          <button class="text-black  border-0 py-4 px-8 focus:outline-none rounded text-md">
          Already have an account ? <Link to='/login' className="text-indigo-500"> Login here</Link>
          </button>
          <p class="text-xs text-gray-500 mt-3 px-10 ">
            Geeksynergy Technologies Pvt Ltd.
          </p>
        </div>
      </div>
    </form>
  );
};
export default Signup;

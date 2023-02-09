import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("clicked", e);
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (
      userData.name === formData.name &&
      userData.password === formData.password
    ) {
    
      navigate("/movielist");
      enqueueSnackbar("Log In successfully", { variant: "success" });

    } else {
      enqueueSnackbar("Credential not matched", { variant: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 w-48 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium md:text-7xl text-gray-900">
           We help your <br /> business grow by <br /> multifolds
          </h1>
          <p class="leading-relaxed md:mt-20 md:text-2xl">We're most prefered compony for <span className="text-green-600">Software <br /> Development & Services </span> . We help enterprises  <br /> and fast growing startups scale by automating the  <br /> business processes..</p>
        </div>
          <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg md:text-2xl font-medium title-font mb-5">
              Log In
            </h2>
            <div class="relative mb-4 ">
              <label for="name" class="leading-7 text-sm text-gray-600 md:text-xl">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>

            <div class="relative mb-4">
              <label for="password" class="md:text-xl leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Log In
            </button>
            <p class="text-xs md:text-lg text-gray-500 mt-3">
              Geeksynergy Technologies Pvt Ltd.
            </p>
          </div>
        </div>
        
      </section>
    </form>
  );
};

export default Login;

{
}

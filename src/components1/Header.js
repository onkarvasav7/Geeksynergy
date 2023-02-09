import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/companyinfo");
  };
  return (
    <nav
      aria-label="Site Nav"
      class="mx-auto flex items-center justify-between p-2"
    >
      <ul class="flex items-center gap-2 text-sm font-medium text-gray-500">
        <button class="md:mx-96 md:text-2xl md:mt-3   text-black bg-indigo-200 border-0  px-1  focus:outline-none hover:bg-indigo-600 rounded text-md" onClick={handleChange}>
          {" "}
          Compony Info{" "}
        </button>
        
      </ul>
    </nav>
  );
};

export default Header;

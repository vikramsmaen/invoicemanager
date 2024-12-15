import React from "react";

const Navbar = () => {
  return (
    <>
      <div className=" sticky top-0 w-full backdrop-blur-md bg-gray-100/50 dark:bg-gray-800/50">
        <div className="flex items-center justify-center py-3 border-b-[1px]">
          <div className="flex items-center justify-between w-[90%]">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="/icon.png"
            ></img>
            <h1 className="text-l font-bold">Home</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

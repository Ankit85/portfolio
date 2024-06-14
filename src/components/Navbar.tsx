import React from "react";

const Navbar = () => {
  return (
    <div className="bg-green-500 mt-[3.75rem]">
      <div className="flex justify-between items-center">
        <div>
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M33.6001 80V8H41.6001V80H33.6001Z" fill="white" />
            <path d="M0 64V0H8V64H0Z" fill="white" />
            <path d="M67.2 8L8 8L8 0L67.2 0V8Z" fill="white" />
            <path d="M67.2 35.2L8 35.2L8 27.2L67.2 27.2V35.2Z" fill="white" />
            <path d="M72 64V40H80V64H72Z" fill="white" />
            <path d="M72 22.4V12.8H80V22.4H72Z" fill="white" />
            <path
              d="M72 40C72 37.6 69.6 35.2 67.2 35.2V27.2C73.6 27.2 80 32.8 80 40H72Z"
              fill="white"
            />
            <path
              d="M72 12.8C72 10.4 69.6 8 67.2 8V0C73.6 0 80 5.6 80 12.8H72Z"
              fill="white"
            />
            <path
              d="M67.2 27.2C69.6 27.2 72 24.8 72 22.4H80C80 28.8 74.4 35.2 67.2 35.2V27.2Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <svg
            width="36"
            height="26"
            viewBox="0 0 36 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.5"
              y1="1.5"
              x2="34.4375"
              y2="1.5"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              x1="8.6875"
              y1="13"
              x2="34.4375"
              y2="13"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              x1="15.875"
              y1="24.5"
              x2="34.4375"
              y2="24.5"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

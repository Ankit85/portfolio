import React from "react";

const Footer = () => {
  return (
    <div className="mt-[16.5rem] h-[25rem] bg-black text-white flex justify-between">
      <div className="mx-[7.5rem] mt-[10rem]  gap-7 flex w-fit h-fit">
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>{" "}
      <div className="mx-[7.5rem] mt-[10rem] gap-7  flex flex-col h-fit">
        <a href="mailto:ankit69385@gmail.com">ankit69385@gmail.com</a>

        <a href="tel:+91999999999">+91999999999</a>
      </div>
      <div className="mx-[7.5rem] flex mt-[10rem]">
        <a href="#">
          {" "}
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
        </a>
      </div>
    </div>
  );
};

export default Footer;

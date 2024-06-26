import React from "react";

const Skills = () => {
  return (
    <div className="mt-[3.75rem]">
      <div>
        <h1 className="text-[2em] leading-[1.84em] font-bold">Skills</h1>
        {/* Logo */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <SKILLSLOGO />
          <SKILLSLOGO />
          <SKILLSLOGO />
          <SKILLSLOGO />
          <SKILLSLOGO />
          <SKILLSLOGO />
          <SKILLSLOGO />
          <SKILLSLOGO />
          <SKILLSLOGO />
          <SKILLSLOGO />
        </div>
      </div>
    </div>
  );
};

const SKILLSLOGO = () => {
  return (
    <div className="flex gap-1 items-center ">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_0_273)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.94374 12.6005L0.820312 0H13.1648L12.0402 12.5985L6.985 14L1.94374 12.6005Z"
            fill="#E44D26"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.99268 12.9288L11.0775 11.7963L12.0386 1.03027H6.99268V12.9288Z"
            fill="#F16529"
          />
          <path
            d="M4.94759 5.70361H6.99256V7.249H3.53425L3.11743 2.57568H6.99256V4.1211H4.80636L4.94759 5.70361Z"
            fill="#EBEBEB"
          />
          <path
            d="M6.98579 9.71899L6.99256 9.71719V11.3251L6.98545 11.327L3.81981 10.4482L3.6033 8.02172H5.15464L5.26467 9.25425L6.98579 9.71899Z"
            fill="#EBEBEB"
          />
          <path
            d="M6.9873 2.57568H10.8586L10.7202 4.1211H6.9873V2.57568Z"
            fill="white"
          />
          <path
            d="M6.9873 7.249V5.70361H10.5796L10.5419 6.1186L10.1555 10.4482L6.9873 11.3263V9.71848L8.71091 9.25327L8.89029 7.249H6.9873Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_273">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p className="text-[1.2em]">HTML</p>
    </div>
  );
};

export default Skills;

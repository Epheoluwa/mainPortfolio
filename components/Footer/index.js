import React from "react";
import Socials from "../Socials";
// import Link from "next/link";
import Button from "../Button";

const Footer = ({ }) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0 grid place-items-center h-screen">
        <div>
          <h1 className="text-5xl text-center text-bold">Contact</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK TOGETHER
            </h1>
            <div className="grid place-items-center">
              <Button type="primary" key={'mail'} onClick={() => window.open('mailto:sunmolasolomon@gmail.com')}>Schedule a call</Button>
            </div>

            
          </div>
        </div>
      </div>
      <div className="mt-10 ml-5">
              <Socials />
      </div>

    </>
  );
};

export default Footer;

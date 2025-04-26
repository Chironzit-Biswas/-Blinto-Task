import React from "react";
import RightSideImg from "../images/ctaRightpic.png";
import Footer from "./Footer";

const Cta = () => {
  return (
    <div>
      <div className={"max-w-[1216px] mx-auto pt-[100px]"}>
        <div className={"md:flex justify-center items-center"}>
          <div>
            <h1
              className={
                "text-[36px] font-extrabold   mb-[12px] leading-[44px]"
              }
            >
              Let’s Download The App.
            </h1>
            <p className={"text-[18px]  font-normal text-[#475569] "}>
              Velit scelerisque in dictum non consectetur. Felis eget velit
              aliquet sagittis. Ultricies integer quis auctor elit sed vulputate
              mi. Massa id neque aliquam vestibulum morbi blandit cursus.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
              <button className="w-full sm:w-auto py-3 px-6 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition">
                Learn More
              </button>
              <button className="w-full sm:w-auto py-3 px-6 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition">
                Get Started
              </button>
            </div>
          </div>

          <div className={"md:h-full md:w-full p-5 "}>
            <img src={RightSideImg} alt="" />
          </div>
        </div>

        <div className=" pt-[100px]">
          <Footer />
          
        </div>
      </div>
    </div>
  );
};

export default Cta;

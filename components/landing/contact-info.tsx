import React from "react";
import { Envelope, PhoneWhite } from "../icons";

const ContactInfo = () => {
  return (
    <section className="w-full px-5 md:px-10 md:py-20 py-10">
      <div className="container mx-auto">
        <div className="bg-white shadow-[6px_6px_30px_5px_rgba(0,0,0,0.25)] rounded-[30px] max-w-[831px] flex flex-col lg:flex-row items-center p-[1.25rem] md:p-[2rem] gap-6 lg:justify-between mx-auto">
          <div className="flex items-center gap-[14px]">
            <div className="bg-primary-blue p-2 md:p-4 rounded-full w-[40px] h-[40px]  md:w-[80px] md:h-[80px] flex items-center justify-center">
              <Envelope />
            </div>
            <p className="text-[16px]/[26px] md:text-[24px]/[36px] font-semibold">
              scoutlyapp@gmail.com
            </p>
          </div>
          <div className="lg:h-[100px] w-full h-1 lg:w-px bg-[#F0F0F0]" />
          <div className="flex items-center gap-[14px]">
            <div className="bg-primary-blue p-2 md:p-4 rounded-full w-[40px] h-[40px]  md:w-[80px] md:h-[80px] flex items-center justify-center">
              <PhoneWhite />
            </div>
            <p className="text-[16px]/[26px] md:text-[24px]/[36px] font-semibold">
              +46 (70) 320 0713
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

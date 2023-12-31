import React from "react";
import { ContentsTypeCard, MyInfoCard } from "@/components/index";
import Image from "next/legacy/image";
import HeroPic from "./photo.jpg";


const HeroSection = () => {
  return (
    <>
     
      <section className="w-full h-full dark:bg-[#e95e65] bg-[#e95e65]">
        
        <div className="h-100 flex flex-nowrap items-center py-10 px-5 mt-10 lg:mt-0 md:mt-0">
          <div className="bg-[#e95e65]">
            <div className="flex md:flex-nowrap items-center">
              <div className="flex flex-col md:items-center justify-start h-full shadow-sm bg-white dark:bg-slate-900 dark:text-white text-black rounded-lg">
                Reconnect - A wellbeing workshop// LATEST WORKSHOP HERE
                
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-end hidden lg:block md:block">
            <div className="flex flex-col md:items-center justify-end bg-[#e95e65] dark:text-white text-black">
            <Image
                height={600}
                width={800}
                quality={100}
                src={HeroPic}
                alt='Reconnect'
              />
            </div>
          </div>
          {/* <div className="justify-end">
              

            </div> */}
        </div>

      </section>

    </>
  );
};

export default HeroSection;

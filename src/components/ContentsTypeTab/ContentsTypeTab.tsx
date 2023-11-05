"use client"
import React from "react";
import { allTypesContent } from "@/data";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { getRandomGradientColor } from "@/utils/utils";

const ContentsTypeTab = () => {
  const pathname = usePathname();
  const bgcolor = "px-4 py-2 shadow-lg rounded-full text-slate-50 from-blue-300 to-purple-300 bg-gradient-to-r hover:text-slate-800 shadow-lg whitespace-nowrap hover:shadow-none transition-all mb-3 md:mx-5 mx-2 transform hover:scale-105 w-auto text-2xl font-bold cursor-pointer"
  return (
    <>
        <div className="mt-5 mb-5 shadow-lg dark:bg-black bg-white py-3 rounded-full px-5">
          <ul className="flex flex-row flex-nowrap whitespace-nowrap content-center justify-start items-center overflow-x-scroll md:flex-wrap md:justify-around md:overflow-x-hidden rounded-full">

            {allTypesContent.map((content, index) => {
              const isActive = pathname === content.url;

              const linkClass = isActive
                ? "px-10 py-2 text-slate-800"
                : "";

              return (
                <li className={`${linkClass}`} key={index}>
                  <Link href={content.url}>
                  <span
                            className={bgcolor}
                            style={{
                                background: `${getRandomGradientColor()}`,
                            }}
                        >
                            {content.name}
                        </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
    </>
  );
};

export default ContentsTypeTab;

"use client";
import { useEffect, useState } from "react";
import {
  addBodyNoScroll,
  combineClasses,
  removeBodyNoScroll,
} from "@/utils/utils";
// import Search from "../Search";
import classes from "./Navbar.module.scss";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ContentsTypeCard, MyInfoCard } from "@/components/index";
// import { AiOutlineSearch } from "react-icons/ai";

import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    showSearch
      ? addBodyNoScroll()
      : () => {
          return;
        };
    return () => {
      removeBodyNoScroll();
    };
  }, [showSearch]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  return (
    <>
      <nav
        className={combineClasses(
          classes.navbar,
          "bg-white  dark:bg-slate-900 dark:text-white text-black"
        )}
      >
        <div
          className={combineClasses(
            classes.navbar__container,
            "container flex items-center justify-between",
            "px-2"
          )}
        >
          <Link href="/">
            <div className="md:items-center justify-start bg-white dark:bg-slate-900 dark:text-white text-black">
              <MyInfoCard />
              <div className="flex flex-wrap justify-start mt-2 md:flex-row md:items-center">
                <ContentsTypeCard />
              </div>

            </div>
          </Link>
          
          <div className="flex items-center">

            

            <button
              name="theme-switch"
              aria-label="theme button"
              className={combineClasses(
                classes.theme_switch,
                "pl-3 dark:text-white text-black"
              )}
              onClick={changeTheme}
            >
              {theme && theme === "dark" ? (
                <BsFillSunFill className="text-3xl" />
              ) : (
                <BsFillMoonFill className="text-2xl " />
              )}
            </button>
          </div>
        </div>{" "}
      </nav>

      {/* {showSearch && <Search closeSearch={() => setShowSearch(false)} />} */}
    </>
  );
};

export default Navbar;

import { useEffect } from "react";
import dateFormat from "dateformat";
import { store } from "/redux/store.js";
import { useSelector, useDispatch } from "react-redux";

import { setSideNavOpen } from "/redux/reducers/pageSlice";

export default function Header() {
  const now = new Date();
  const dispatch = useDispatch();
  let algoName = useSelector((state) => state.page.algoName);

  useEffect(() => {
    dispatch(setSideNavOpen(false));
    document.getElementById("side-nav").style.left = "-100%";
  }, []);

  function toggleSideNav() {
    if (store.getState().page.sideNavOpen) {
      document.getElementById("side-nav").style.left = "-100%";
      store.dispatch(setSideNavOpen(false));
    } else {
      document.getElementById("side-nav").style.left = "0";
      store.dispatch(setSideNavOpen(true));
    }
  }

  return (
    <div className="bg-bg-1 sticky top-0 border-b-[2px] border-border-1 max-h-[70px] z-10 flex justify-between ease-in duration-100">
      <div className="left-side relative">
        <div className="h-full w-4 bg-bg-1 absolute t-0 l-0 ml-[-2px]"></div>
        <div className="px-[1.5rem] py-[1.1rem] flex items-center relative ">
          <div className="font-space text-sm text-green">
            {dateFormat(now, "mm/dd")}
          </div>
          <div className="w-[16px] h-[38px] bg-cyan ml-[1.5rem]"></div>
          <div className="text-text-1 font-space uppercase ml-[10px] flex items-center leading-[105%] text-[1.3rem]">
            {algoName}
          </div>
        </div>
      </div>
      <div className="relative max-h-[70px] flex items-center right-side px-gap gap-[1rem]">
        <a>
        </a>
        <span
          className="w-[28px] md:hidden hover:cursor-pointer"
          onClick={toggleSideNav}
        >
          {!useSelector((state) => state.page.sideNavOpen) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 38 24"
            >
              <path
                fill="#aaa"
                d="M37.333 10.333H.667v3.334h36.666v-3.334ZM37.333.333H.667v3.334h36.666V.333ZM37.333 20.333H.667v3.334h36.666v-3.334Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 30 30"
            >
              <path
                fill="#aaa"
                d="M26.785.858.858 26.785l2.357 2.357L29.142 3.215 26.785.858Z"
              />
              <path
                fill="#aaa"
                d="M29.476 26.452 3.548.525 1.191 2.882 27.12 28.809l2.357-2.357Z"
              />
            </svg>
          )}
        </span>
      </div>
      <div className="w-[10px] h-full absolute left-[-5px] top-[1.1px] bg-bg-1 border-b-[2px] border-bg-1"></div>
    </div>
  );
}

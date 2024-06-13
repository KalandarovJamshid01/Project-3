'use client'
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import React from "react";

export default function NavbarComponent() {
  const [menuBarOpen, setMenuBarOpen] = React.useState(false);
  return (
    <div className="header w-full h-[98px] lg:px-10 md:px-5 px-7 absolute top-0 flex items-center justify-between z-50">
      <div className="headerLogo w-[64px] h-[64px] rounded-[4px] shrink-0	cursor-pointer bg-[#6eb7b1]" />

      <div className={``}>
        <ul className={`hidden md:flex items-center justify-center gap-4`}>
          <Link href={"/"} className="navbarItem">
            Home
          </Link>
          <Link href={"/company"} className="navbarItem">
            업체소개
          </Link>
          <Link href={"/after-construction"} className="navbarItem">
            시공사례
          </Link>
          <li className="navbarItem">견적신청</li>
          <Link href={"/contact"} className="navbarItem">
            문의하기
          </Link>
        </ul>

        {/*  */}

        <ul
          className={`${
            menuBarOpen ? "flex" : "hidden"
          } md:hidden transition-all items-center justify-center gap-6 absolute right-0 top-[90px] p-[70px] bg-[#212121] flex-col w-[375px] `}
        >
          <Link href={"/"} className="navbarItem">
            Home
          </Link>
          <Link href={"/company"} className="navbarItem">
            업체소개
          </Link>
          <Link href={"/after-construction"} className="navbarItem">
            시공사례
          </Link>
          <li className="navbarItem">견적신청</li>
          <Link href={"/contact"} className="navbarItem">
            문의하기
          </Link>
          <div className="header-right-media flex sm:hidden flex-row gap-2 text-[16px] items-center">
            <li>전체보기 로그인</li>
            <li>
              <IoIosArrowForward />
            </li>
          </div>
        </ul>
      </div>
      <div className="headerRight flex gap-5 items-center">
        <ul className="headerRightItems hidden sm:flex items-center gap-[10px] text-[#fff] font-noto font-semibold cursor-pointer leading-normal">
          <li>전체보기 로그인</li>
          <li>
            <IoIosArrowForward />
          </li>
        </ul>

        <button className="headerRightBtn text-white text-center font-gmarket text-[16px] font-medium leading-normal flex px-[16px] py-[8px] justify-center gap-2 rounded-[4px] bg-[#0d9488]">
          견적문의전화
        </button>
        {!menuBarOpen ? (
          <FiMenu
            className="md:hidden flex  w-7 h-7"
            onClick={() => setMenuBarOpen(true)}
          />
        ) : (
          <IoClose
            className="md:hidden flex w-8 h-8"
            onClick={() => setMenuBarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

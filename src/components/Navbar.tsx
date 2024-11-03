"use client";

import React, { Children, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import todoImage from "@/assets/images/icon-todo.svg";
import calendarImage from "@/assets/images/icon-calendar.svg";
import remindersImage from "@/assets/images/icon-reminders.svg";
import planningImage from "@/assets/images/icon-planning.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Features",
    link: "#",
    children: [
      {
        label: "Todo List",
        link: "#",
        iconImage: todoImage,
      },
      {
        label: "Calendar",
        link: "#",
        iconImage: calendarImage,
      },
      {
        label: "Reminders",
        link: "#",
        iconImage: remindersImage,
      },
      {
        label: "Planning",
        link: "#",
        iconImage: planningImage,
      },
    ],
  },
  {
    label: "Compnay",
    link: "#",
    children: [
      {
        label: "History",
        link: "#",
      },
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    label: "Careers",
    link: "#",
  },
  {
    label: "About",
    link: "#",
  },
];

const Navbar = () => {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }
  return (
    <div className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm">
      {/* Left Section */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* Logo */}
        <Image src={logo} alt="logo" />

        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group px-2 py-3 transition-all"
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* NAV-Dropdown */}
              {d.children && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                    >
                      {/* Image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage ?? ""} alt="image item" />
                      )}
                      {/* Item */}
                      <span className="whitespace-nowrap pl-3">{ch.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Right Section */}
      <section className="hidden md:flex items-center gap-8">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Register
        </button>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
};

export default Navbar;

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SinglNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SinglNavItem>
          ))}
        </div>

        <section className="flex flex-col items-center gap-8 mt-4">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>
          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SinglNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative px-2 py-3 transition-all"
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{d.label}</span>
        {d.children && (
          <IoIosArrowDown
            className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
          />
        )}
      </p>

      {/* NAV-Dropdown */}
      {isItemOpen && d.children && (
        <div className=" w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
            >
              {/* Image */}
              {ch.iconImage && (
                <Image src={ch.iconImage ?? ""} alt="image item" />
              )}
              {/* Item */}
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}

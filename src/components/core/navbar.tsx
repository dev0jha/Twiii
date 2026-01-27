import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Container } from "./Container";
// import { NewELafda } from "./new-e-lafda";
 import { ThemeToggle } from "./theme-toggle";

const navItems = [
  {
    label: "E-lafda",
    href: "/e-lafda",
  },
  {
    label: "Engagement Farmers",
    href: "/engagement-farmers",
  },
  {
    label: "List's",
    href: "/lists",
  },
  {
    label: "Polls",
    href: "/polls",
  },
];

function Navbar() {
  return (
    <Container className="font-poppins px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and nav items */}
        <div className="flex items-baseline gap-4">
          <Image
            className="size-10"
            src="/twiii.png"
            alt="Twiii"
            width={100}
            height={100}
          />
          {navItems.map((item) => {
            return (
              <Link key={item.href} href={item.href}>
                <span className="hidden cursor-pointer text-sm font-medium text-gray-500 transition-all duration-300 hover:text-gray-700 hover:underline md:block">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* User actions */}
        <div className="flex items-center gap-4">
          {/* <NewELafda /> */}
          <ThemeToggle />
        </div>
      </div>
    </Container>
  );
}

export { Navbar };
"use client";
import { Search } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

const Appbar = () => {
  const topRoutes = [
    { label: "Instructor", path: "/instructor/courses" },
    {
      label: "Learning",
      path: "/learning",
    },
  ];
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-3xl font-bold">Udemy</div>
      <div className="max-md:hidden md:w-[400px] md:rounded-full flex">
        <input
          className="flex-grow bg-[#FFF8EB] rounded-l-full border-none outline-none text-sm pl-4 py-3"
          placeholder="Search for courses"
        />
        <button className="bg-[#FDAB04] rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-[#FDAB04]/80">
          <Search className="w-4 h-4" />
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <div className="max-sm:hidden flex gap-6">
          {topRoutes.map((route) => (
            <Link
              href={route.path}
              key={route.path}
              className="text-sm font-medium hover:text-[#FDAB04]"
            >
              {route.label}
            </Link>
          ))}
        </div>
        <Button
          onClick={() => {
            signIn();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Appbar;

import Appbar from "@/components/layout/Appbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Appbar />
      {children}
    </>
  );
};

export default HomeLayout;

import Appbar from "@/components/layout/Appbar";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";

const InstructorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <Appbar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default InstructorLayout;

import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex flex-col min-h-screen overflow-x-clip`}>
      {children}
    </div>
  );
};

export default Wrapper;

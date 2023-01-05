import React from "react";

const Container = ({ height, bgColor, className, children, width }) => {
  return (
    <main className={`w-full ${bgColor} ${height}`}>
      <div className={`${width ? width : "container mx-auto px-4 py-12"} `}>
        {children}
      </div>
    </main>
  );
};

export default Container;

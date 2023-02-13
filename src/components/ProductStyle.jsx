import React from "react";

const ProductStyle = ({ children }) => {
  return (
    <div>
      <h2 className="text-center m-20 font-extrabold text-7xl sm:text-center sm:text-4xl">
        Assorted Items
      </h2>
      <div className="mx-auto px-16 sm:px-8">
        <div className="grid grid-cols-3 gap-y-20 gap-x-10 sm:grid-cols-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductStyle;

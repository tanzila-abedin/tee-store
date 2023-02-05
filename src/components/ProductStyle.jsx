import React from "react";

const ProductStyle = ({ children }) => {
  return (
    <div>
      <h2 className="text-center m-20 font-extrabold text-7xl text-">
        Assorted Items
      </h2>
      <div className="mx-auto px-16">
        <div className="grid grid-cols-1 gap-y-20 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProductStyle;

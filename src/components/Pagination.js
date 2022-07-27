import React from "react";

const Pagination = ({ clickPage }) => {
  return (
    <div
      className="
   inline-flex
   border border-[#e4e4e4]
   bg-white
   p-4
   rounded-xl
   "
      style={{ justifyContent: "center" }}
    >
      <ul className="flex items-center -mx-[6px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number, idx) => {
          return (
            <li
              className="px-[6px]"
              key={idx}
              onClick={() => {
                clickPage(number);
              }}
            >
              <a
                href="javascript:void(0)"
                className="
              w-9
              h-9
              flex
              items-center
              justify-center
              rounded-md
              border border-[#EDEFF1]
              text-[#838995] text-base
              hover:bg-primary hover:border-primary hover:text-white
              "
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;

import React, { useState } from "react";

const Pagination = ({ clickPage, page }) => {
  const [pagePlused, setPagePlused] = useState(0);
  const goPrevious = () => {
    if (page > 5) {
      clickPage(page - 5);
      setPagePlused(pagePlused - 5);
    }
  };

  const goNext = () => {
    if (page < 6) {
      clickPage(page + 5);
      setPagePlused(pagePlused + 5);
    }
  };
  console.log("page : ", page, "pagePlused : ", pagePlused);
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
        <li className="px-[6px]" onClick={goPrevious}>
          <a
            onClick={(e) => e.preventDefault}
            className="
              w-9
              h-9
              flex
              items-center
              justify-center
              rounded-md
              border border-[#EDEFF1]
              text-[#838995] text-base
              cursor-pointer
              hover:bg-primary hover:border-primary hover:text-white hover:bg-gray-200
              "
          >
            &#60;
          </a>
        </li>
        {[1, 2, 3, 4, 5].map((number, idx) => {
          return (
            <li
              className="px-[6px]"
              key={idx}
              onClick={() => {
                clickPage(number + pagePlused);
              }}
            >
              <a
                style={
                  number + pagePlused === page
                    ? { color: "white", background: "black" }
                    : null
                }
                onClick={(e) => e.preventDefault}
                className="
              w-9
              h-9
              flex
              items-center
              justify-center
              rounded-md
              border border-[#EDEFF1]
              text-[#838995] text-base
              cursor-pointer
              hover:bg-primary hover:border-primary hover:text-white hover:bg-gray-200
              "
              >
                {number + pagePlused}
              </a>
            </li>
          );
        })}
        <li className="px-[6px]" onClick={goNext}>
          <a
            onClick={(e) => e.preventDefault}
            className="
              w-9
              h-9
              flex
              items-center
              justify-center
              rounded-md
              border border-[#EDEFF1]
              text-[#838995] text-base
              cursor-pointer
              hover:bg-primary hover:border-primary hover:text-white hover:bg-gray-200
              "
          >
            &#62;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

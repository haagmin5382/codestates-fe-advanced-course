import React, { useState } from "react";

const Pagination = ({ clickPage, page }) => {
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);

  const goNext = () => {
    if (page < 6) {
      setPages(pages.map((el) => el + 5)); // 다음에 보여줄 페이지 리스트
      clickPage(pages[4] + 1);
    }
  };
  const goPrevious = () => {
    if (page > 5) {
      setPages(pages.map((el) => el - 5)); // 이전에 보여줄 페이지 리스트
      clickPage(pages[0] - 1);
    }
  };

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
        {pages.map((number, idx) => {
          return (
            <li
              className="px-[6px]"
              key={idx}
              onClick={() => {
                clickPage(number);
              }}
            >
              <a
                style={
                  number === page
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
                {number}
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

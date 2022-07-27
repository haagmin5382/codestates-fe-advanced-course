import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Comments = ({ setCommentNumber }) => {
  const [commentData, setCommentData] = useState([
    { postId: 0, id: 0, name: "", body: "" },
  ]);
  const params = useParams();
  useEffect(() => {
    // console.log(typeof params.id); // string
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(({ data }) => {
        // console.log(typeof data[0].postId); // number
        // console.log(data.filter((obj) => obj.postId === Number(params.id)));
        setCommentData(data.filter((obj) => obj.postId === Number(params.id)));
        setCommentNumber(
          data.filter((obj) => obj.postId === Number(params.id)).length
        );
      });
  }, []);
  return (
    <>
      {commentData.map((obj, idx) => {
        return (
          <div
            className="flex items-center  shadow-lg  mx-8 mb-4 mt-10  "
            key={idx}
          >
            <div className="bg-white rounded-lg px-4 pt-2">
              <div className="flex flex-wrap -mx-3 mb-6">
                <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                  {obj.name}
                </h2>
                <div className="w-full md:w-full px-3 mb-2 mt-2">
                  <div className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white">
                    {obj.body}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comments;

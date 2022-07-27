import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Post = () => {
  const [content, setContent] = useState({
    userId: 0,
    id: 0,
    title: null,
    body: null,
  });
  const params = useParams();
  useEffect(() => {
    console.log(params.id);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(({ data }) => setContent(data));
  }, []);

  console.log(content);
  return (
    <div className="flex items-center justify-center min-h-screen">
      {" "}
      <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div className="text-lg font-bold text-slate-700">
              {content.userId}
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
              ID
            </button>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 text-xl font-bold">{content.title}</div>
          <div className="text-sm text-neutral-600">{content.body}</div>
        </div>

        <div>
          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 md:space-x-8">
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1.5 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const [post, setPost] = useState([
    { userId: 0, id: 0, title: null, body: null },
  ]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      setPost(data.slice(0, 10));
    });
  }, []);

  const clickPage = (n) => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      setPost(data.slice((n - 1) * 10, (n - 1) * 10 + 10));
    });
    setPage(n);
  };

  const clickPost = (n) => {
    navigate(`/${n}`);
  };

  return (
    <main className="flex flex-col pb-10">
      <div>
        <div className="">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900  py-4 "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 py-4 "
                  >
                    Title
                  </th>
                </tr>
              </thead>
              <tbody>
                {post.map((obj, idx) => {
                  return (
                    <tr
                      className="border-b hover:bg-gray-200 cursor-pointer "
                      key={idx}
                      onClick={() => clickPost(obj.id)}
                    >
                      <td className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap ">
                        {obj.userId}
                      </td>
                      <td className="text-sm text-gray-900 font-light py-4 whitespace-nowrap ">
                        {obj.title}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination clickPage={clickPage} page={page} />
    </main>
  );
};

export default PostList;

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
      console.log(data.slice(0, 10));
      setPost(data.slice(0, 10));
    });
  }, []);

  const clickPage = (n) => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({ data }) => {
      //   console.log((n - 1) * 10, (n - 1) * 10 + 10);
      setPost(data.slice((n - 1) * 10, (n - 1) * 10 + 10));
    });
    setPage(n);
  };

  const clickPost = (n) => {
    navigate(`/${n}`);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Title
                  </th>
                </tr>
              </thead>
              <tbody>
                {post.map((obj, idx) => {
                  return (
                    <tr
                      className="border-b hover:bg-gray-200 cursor-pointer"
                      key={idx}
                      onClick={() => clickPost(obj.id)}
                    >
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        {obj.userId}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {obj.title}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination clickPage={clickPage} page={page} />
    </div>
  );
};

export default PostList;

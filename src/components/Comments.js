import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const Comments = ({ id }) => {
  const [commentData, setCommentData] = useState();

  const fetchCommentData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    const data = await response.json();
    setCommentData(data);
  };

  useEffect(() => {
    fetchCommentData();
  }, [id]);

  return (
    <div className="comments_container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {commentData ? (
            commentData.map((val) => (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.body}</td>
              </tr>
            ))
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
      <div className="button">
        <button>Prev.</button>
        <button>Next.</button>
      </div>
    </div>
  );
};

export default Comments;

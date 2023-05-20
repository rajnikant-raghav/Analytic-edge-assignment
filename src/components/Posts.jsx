import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export const Posts = ({ setId, userId }) => {
  const [query, setQuery] = useState()
  const [postData, setPostData] = useState();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const fetchPostData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?${query==undefined?`userId=${userId}`:`q=${query}`}`
    );
    const data = await res.json();
    setPostData(data);
  };
  

  useEffect(() => {
    fetchPostData();
  }, [userId,query]);
  
  const handleNext = () => {
    if (end < 100) {
      setStart((preVal) => preVal + 10);
      setEnd((preVal) => preVal + 10);
    }
  };

  const handlePrev = () => {
    if (start > 0) {
      setStart((preVal) => preVal - 10);
      setEnd((preVal) => preVal - 10);
    }
  };
  const handleSearchQuery = (e)=>{
    setQuery(e.target.value)
  }
  return (
    <div className="post_container">
      <div className='search_container'>
          <input type="text" placeholder="Search query" onChange={(e)=>handleSearchQuery(e)}/>
       </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {postData ? (
            postData.map((val, idx) => (
              <tr>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.body}</td>
                <td>
                  <Link to="/comments">
                    <button id={val.id} onClick={(e) => setId(e.target.id)}>
                      View Comments
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
      <div className="button">
        <button onClick={handlePrev}>Prev.</button>
        <button disabled={!end > 100} onClick={handleNext}>
          Next.
        </button>
      </div>
    </div>
  );
};
export default Posts;

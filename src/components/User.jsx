import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import {Link} from 'react-router-dom'

const User = ({setUserId}) => {
    const [query, setQuery] = useState()
  const [userData, setUserData] = useState();

  const fetchUserData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?q=${query==undefined?"":query}`);
    const data = await res.json();
    setUserData(data);
  };

  useEffect(() => {
    fetchUserData();
  }, [query]);

  const handleSearchQuery = (e)=>{
    setQuery(e.target.value)
  }
  return (
    <div className="user_component">
        <div className='search_container'>
          <input type="text" placeholder="Search query" onChange={(e)=>handleSearchQuery(e)}/>
       </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
            <th>City</th>
            <th>website</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {userData ? (
            userData.map((val) => (
              <tr>
                <td>{val.id}</td>
                <td>{val.username}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.address.city}</td>
                <td><a href={val.website} target="_blank">{val.website}</a></td>
                <td><Link to='/posts'><button id={val.id} onClick={(e)=>setUserId(e.target.id)}>View Posts</button></Link></td>
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

export default User;

import React,{useState} from "react";
import Posts from "./components/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from "./components/Comments";
import User from "./components/User";


export const App = () => {
  const [id, setId] = useState(1)
  const [userId, setUserId] = useState(1)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User setUserId={setUserId}/>} />
          <Route path="/posts" element={<Posts userId={userId} setId={setId} />} />
          <Route path="/comments" element={<Comments id={id} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

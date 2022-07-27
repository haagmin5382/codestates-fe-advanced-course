import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Post from "./pages/Post";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PostList />} path="/" />
          <Route element={<Post />} path="/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

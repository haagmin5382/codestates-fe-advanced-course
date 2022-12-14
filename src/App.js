import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./pages/Post";
import PostList from "./pages/PostList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PostList />} path="/" />
          <Route element={<Post />} path="/:id" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

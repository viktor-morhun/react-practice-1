import "./App.css";
import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import Blog from "./Blog.jsx";
import News from "./News.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="container">
        <Blog />
        <News />
      </div>
    </>
  );
}

export default App;

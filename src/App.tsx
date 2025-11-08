import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function Detail() {
  return <h1>Anime Detail</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="/">Home</a> | <a href="/detail">Detail</a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./features/counter/Counter";

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
        <a href="/">Home</a> | <a href="/detail">Detail</a> |{" "}
        <a href="/counter">Counter</a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

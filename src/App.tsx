import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./features/counter/Counter";
import Layout from "./components/sections/layout";
import Home from "./features/home/Home";
import NotFound from "./NotFound";
import Detail from "./features/detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/counter" element={<Counter />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewProduct from "./pages/ViewProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewProduct" element={<ViewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

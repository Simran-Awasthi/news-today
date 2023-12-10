import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col justify-start items-center bg-neutral-900 text-white font-robots">
      <Routes>
        <Route path="/" index element={<HomePage />}></Route>
        <Route path="/article" element={<ArticlePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

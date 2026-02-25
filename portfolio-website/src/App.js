// src/App.js
import { Routes, Route } from "react-router-dom";
import { ScrollProvider } from "./context/ScrollContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ScrollProvider>
      <MainLayout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/works" element={<Work />} />
        <Route path="/work/:name" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </ScrollProvider>
  );
}

export default App;
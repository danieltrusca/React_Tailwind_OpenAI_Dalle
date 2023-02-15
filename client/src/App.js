import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import { Home, CreatePost } from "./pages";

// import components
import { Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import First from "./components/First";
import Header from "./components/Header";
import Second from "./components/Second";

export default function app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/First" element={<First />}></Route>
          <Route path="/Second" element={<Second />}></Route>
          <Route path="/" element={<p>hello this is fdsfsdfsd</p>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

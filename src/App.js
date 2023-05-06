import { Routes, Route } from "react-router-dom";
import './App.css';
import Stikhi from './pages/stikhi';
import Proza from './pages/proza';
import NoPage from "./pages/NoPage";
import Layout from "./components/Layout";
import Bio from "./pages/Bio";
import Home from "./pages/Home";
import Stikh from "./pages/stikh-interface";

export default function App() {
  return (
    <>
      <Layout />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stikhi" element={<Stikhi />}>
        <Route path="predskazanie" element={<Stikh />} />
        </Route>
        <Route path="proza" element={<Proza />} />
        <Route path="bio" element={<Bio />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
};
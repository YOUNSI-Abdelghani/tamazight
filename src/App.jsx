import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Lecons from "./pages/Lecons";
import Vocabulaire from "./pages/Vocabulaire";
import Alphabet from "./pages/Alphabet";
import Carte from "./pages/Carte";
import Pratique from "./pages/Pratique";
import APropos from "./pages/APropos";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-amber-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lecons" element={<Lecons />} />
            <Route path="/vocabulaire" element={<Vocabulaire />} />
            <Route path="/alphabet" element={<Alphabet />} />
            <Route path="/carte" element={<Carte />} />
            <Route path="/pratique" element={<Pratique />} />
            <Route path="/apropos" element={<APropos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
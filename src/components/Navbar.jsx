// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/", label: "Accueil" },
  { path: "/lecons", label: "Leçons" },
  { path: "/vocabulaire", label: "Vocabulaire" },
  { path: "/alphabet", label: "Alphabet" },
  { path: "/carte", label: "Carte" },
  { path: "/pratique", label: "Pratique" },
  { path: "/apropos", label: "À propos" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-primary/10 border-b-2 border-primary px-20 py-5 flex items-center gap-80">
      <div className="flex items-center gap-2 font-bold text-primary text-lg">
        <div className="w-10 h-10 bg-primary rounded-lg"></div>
        <div className="flex flex-col gap-1">
          <p className="text-2xl leading-tight">Tamazight Learning</p>
          <p className="text-xs text-gray-400 leading-none">ⵜⵉⴼⵉⵏⴰⵖ</p>
        </div>
      </div>
      <div className="flex gap-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              pathname === link.path
                ? "bg-primary text-white"
                : "text-primary hover:bg-primary/50 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
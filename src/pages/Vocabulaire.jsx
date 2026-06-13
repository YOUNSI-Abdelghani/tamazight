import { useState } from "react";

const categories = ["Toutes", "Nourriture", "Nature", "Corps", "Animaux", "Couleurs", "Temps", "Nombres"];

const mots = [
  { mot: "Aghrum", trad: "Pain", prono: "ah-rhoom", cat: "Nourriture" },
  { mot: "Aman", trad: "Eau", prono: "ah-man", cat: "Nourriture" },
  { mot: "Itri", trad: "Étoile", prono: "ee-tree", cat: "Nature" },
  { mot: "Tament", trad: "Miel", prono: "tah-ment", cat: "Nourriture" },
  { mot: "Afus", trad: "Main", prono: "ah-foos", cat: "Corps" },
  { mot: "Adrar", trad: "Montagne", prono: "ad-rar", cat: "Nature" },
  { mot: "Aserdun", trad: "Mulet", prono: "a-ser-dun", cat: "Animaux" },
  { mot: "Azegzaw", trad: "Vert", prono: "a-zeg-zaw", cat: "Couleurs" },
  { mot: "Ass", trad: "Jour", prono: "ass", cat: "Temps" },
  { mot: "Iger", trad: "Champ", prono: "ee-ger", cat: "Nature" },
  { mot: "Yiwen", trad: "Un", prono: "yee-wen", cat: "Nombres" },
  { mot: "Tafukt", trad: "Soleil", prono: "ta-foukt", cat: "Nature" },
];

export default function Vocabulaire() {
  const [cat, setCat] = useState("Toutes");
  const [search, setSearch] = useState("");

  const filtered = mots.filter(m =>
    (cat === "Toutes" || m.cat === cat) &&
    (m.mot.toLowerCase().includes(search.toLowerCase()) ||
     m.trad.toLowerCase().includes(search.toLowerCase()))
  );

  const speak = (text) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "fr-FR";
    speechSynthesis.speak(u);
  };

  const badgeColor = (cat) => {
    const colors = {
      Nourriture: "bg-blue-100 text-secondary",
      Nature:     "bg-green-100 text-primary",
      Corps:      "bg-purple-100 text-purple-700",
      Animaux:    "bg-orange-100 text-orange-700",
      Couleurs:   "bg-pink-100 text-pink-700",
      Temps:      "bg-yellow-100 text-yellow-700",
      Nombres:    "bg-gray-100 text-gray-700",
    };
    return colors[cat] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-primary mb-5">Vocabulaire Tamazight</h1>

      <input
        type="text"
        placeholder="Rechercher un mot..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="bg-primary/10 w-full border-2 border-primary rounded-xl px-4 py-3 mb-4 text-sm focus:outline-none focus:border-secondary transition"
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition
              ${cat === c
                ? "bg-primary text-white"
                : "bg-primary/10 border-2 border-primary text-primary hover:bg-green-50"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filtered.map(m => (
          <div key={m.mot} className="bg-primary/10 border-2 border-primary rounded-xl p-4 hover:border-secondary transition">
            <div className="flex justify-between items-start mb-1">
              <p className="font-semibold text-primary">{m.mot}</p>
              <button onClick={() => speak(m.mot)} className="text-secondary hover:text-primary transition">🔊</button>
            </div>
            <p className="text-sm text-gray-600">{m.trad}</p>
            <p className="text-xs text-gray-400 mb-2">{m.prono}</p>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${badgeColor(m.cat)}`}>
              {m.cat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
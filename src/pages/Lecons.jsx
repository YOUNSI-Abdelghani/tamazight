import { useState } from "react";

const lecons = [
  {
    id: 1, titre: "Les salutations", desc: "Apprendre à saluer en Tamazight",
    vocab: [
      { tif: "ⴰⵣⵓⵍ", mot: "Azul", trad: "Bonjour / Salut", prono: "ah-zool" },
      { tif: "ⵜⵉⴼⴰⵡⵜ", mot: "Tifawt", trad: "Bonne journée", prono: "tee-fawt" },
      { tif: "ⴰⵔ ⵜⵉⵎⵍⵉⵍⵉⵜ", mot: "Ar timillit", trad: "Au revoir", prono: "ar teem-lee-leet" },
      { tif: "ⵎⴰⵎⵉⴽ", mot: "Mamik?", trad: "Comment vas-tu ?", prono: "ma-mik" },
    ]
  },
  {
    id: 2, titre: "Les nombres (1-10)", desc: "Compter de 1 à 10",
    vocab: [
      { tif: "ⵢⵉⵡⵏ", mot: "Yiwen", trad: "Un", prono: "yee-wen" },
      { tif: "ⵙⵉⵏ", mot: "Sin", trad: "Deux", prono: "seen" },
      { tif: "ⴽⵕⴰⴹ", mot: "Krad", trad: "Trois", prono: "krad" },
      { tif: "ⴽⵓⵥ", mot: "Kuẓ", trad: "Quatre", prono: "kouz" },
    ]
  },
  {
    id: 3, titre: "La famille", desc: "Les membres de la famille",
    vocab: [
      { tif: "ⴱⴰⴱⴰ", mot: "Baba", trad: "Père", prono: "ba-ba" },
      { tif: "ⵢⴻⵎⵎⴰ", mot: "Yemma", trad: "Mère", prono: "yem-ma" },
      { tif: "ⴳⵎⴰ", mot: "Gma", trad: "Frère", prono: "gma" },
      { tif: "ⵓⵍⵜⵎⴰ", mot: "Ultma", trad: "Sœur", prono: "ult-ma" },
    ]
  },
  {
    id: 4, titre: "Les couleurs", desc: "Nommer les couleurs",
    vocab: [
      { tif: "ⴰⵣⴻⴳⵣⴰⵡ", mot: "Azegzaw", trad: "Vert", prono: "a-zeg-zaw" },
      { tif: "ⴰⵣⵓⴳⴳⴰⵖ", mot: "Azuggagh", trad: "Rouge", prono: "a-zug-gagh" },
      { tif: "ⴰⵎⴻⵍⵍⴰⵍ", mot: "Amellal", trad: "Blanc", prono: "a-mel-lal" },
    ]
  },
  {
    id: 5, titre: "Les jours de la semaine", desc: "Apprendre les jours",
    vocab: [
      { tif: "ⴰⵙⴰⵎⴰⵙ", mot: "Asamas", trad: "Dimanche", prono: "a-sa-mas" },
      { tif: "ⴰⵢⵏⴰⵙ", mot: "Aynas", trad: "Lundi", prono: "ay-nas" },
      { tif: "ⴰⵙⵉⵏⴰⵙ", mot: "Asinas", trad: "Mardi", prono: "a-see-nas" },
    ]
  },
  {
    id: 6, titre: "Les expressions courantes", desc: "Phrases du quotidien",
    vocab: [
      { tif: "ⵜⴰⵏⵎⵉⵔⵜ", mot: "Tanemmirt", trad: "Merci", prono: "ta-nem-mirt" },
      { tif: "ⵙⵓⵔⴼ ⵉⵢⵉ", mot: "Surf iyi", trad: "Excuse-moi", prono: "sourf-ee-yee" },
      { tif: "ⵢⴻⵀ", mot: "Yeh", trad: "Oui", prono: "yeh" },
    ]
  },
  {
    id: 7, titre: "La maison", desc: "Objets et pièces de la maison",
    vocab: [
      { tif: "ⵜⴰⴷⴷⴰⵔⵜ", mot: "Taddart", trad: "Maison", prono: "tad-dart" },
      { tif: "ⵜⴰⴼⵍⵡⵉⵜ", mot: "Taflwit", trad: "Fenêtre", prono: "ta-flweet" },
      { tif: "ⵜⴰⴱⴱⵓⵔⵜ", mot: "Tabburt", trad: "Porte", prono: "tab-bourt" },
    ]
  },
  {
    id: 8, titre: "Les vêtements", desc: "Nommer les vêtements",
    vocab: [
      { tif: "ⴰⵇⵏⴷⵓⵔ", mot: "Aqendur", trad: "Robe", prono: "a-qen-dour" },
      { tif: "ⵉⴷⵓⴽⴰⵏ", mot: "Idukan", trad: "Chaussures", prono: "ee-dou-kan" },
      { tif: "ⴰⵙⵍⵀⴰⵎ", mot: "Aslham", trad: "Burnous", prono: "as-lham" },
    ]
  },
];

export default function Lecons() {
  const [selected, setSelected] = useState(lecons[0]);
  const [completedIds, setCompletedIds] = useState([]);

  const done = completedIds.length;
  const percent = Math.round((done / lecons.length) * 100);

  const isDone = (id) => completedIds.includes(id);

  const toggleComplete = (id) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-primary mb-6">Leçon de Tamazight</h1>

      <div className="grid grid-cols-3 gap-6">

        {/* Progression */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
            🏆 Votre progression
          </h2>

          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Leçons complétées</span>
            <span className="font-semibold text-gray-700">{done}/{lecons.length}</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 mb-1 overflow-hidden">
            <div
              className="bg-primary h-2.5 rounded-full transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mb-5">{percent}% complété</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-yellow-50 rounded-xl p-3">
              <p className="text-xs text-gray-500 flex items-center gap-1">⭐ Série</p>
              <p className="font-bold text-gray-800 text-lg">7 jours</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-3">
              <p className="text-xs text-gray-500 flex items-center gap-1">🎯 Mots appris</p>
              <p className="font-bold text-gray-800 text-lg">53</p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-3 mb-5">
            <p className="text-xs text-gray-500 flex items-center gap-1">📈 Quiz complétés</p>
            <p className="font-bold text-gray-800 text-lg">5 quiz</p>
          </div>

          <hr className="border-gray-100 mb-4" />

          <h3 className="font-bold text-gray-800 text-sm mb-3">Succès récents</h3>
          <div className="space-y-2">
            <div className="bg-yellow-50 rounded-xl p-3 flex gap-3 items-start">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Premier pas</p>
                <p className="text-gray-400 text-xs">Complétez votre première leçon</p>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-3 flex gap-3 items-start">
              <span className="text-2xl">🔥</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Série de 7 jours</p>
                <p className="text-gray-400 text-xs">Apprenez 7 jours de suite</p>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des leçons */}
        <div className="space-y-3">
          {lecons.map((l) => (
            <button
              key={l.id}
              onClick={() => setSelected(l)}
              className={`w-full text-left border-2 rounded-2xl p-4 transition shadow-sm
                ${selected?.id === l.id
                  ? "border-primary bg-green-50"
                  : "border-gray-100 bg-white hover:border-primary/40"
                }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">{isDone(l.id) ? "✅" : "⭕"}</span>
                <div>
                  <p className="font-semibold text-gray-800">Leçon {l.id}: {l.titre}</p>
                  <p className="text-sm text-gray-400">{l.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Contenu de la leçon */}
        {selected && (
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm h-fit">
            <h3 className="text-gray-800 font-bold mb-1 flex items-center gap-2">
              {isDone(selected.id) && "✅"} Leçon {selected.id}: {selected.titre}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{selected.desc}</p>

            <h4 className="font-bold text-gray-800 mb-3">Vocabulaire et expressions</h4>

            <div className="space-y-3 mb-4">
              {selected.vocab.length > 0 ? selected.vocab.map((v) => (
                <div key={v.mot} className="bg-yellow-50/60 rounded-xl p-4 border border-accent/30">
                  <p className="text-primary font-semibold">
                    <span className="text-lg">{v.tif}</span> / {v.mot}
                  </p>
                  <p className="text-gray-700 text-sm">{v.trad}</p>
                  <p className="text-gray-400 text-xs italic">Prononciation : {v.prono}</p>
                </div>
              )) : (
                <p className="text-sm text-gray-400 italic">Vocabulaire à venir...</p>
              )}
            </div>

            <button
              onClick={() => toggleComplete(selected.id)}
              className={`w-full py-2.5 rounded-xl text-sm font-medium transition
                ${isDone(selected.id)
                  ? "bg-primary text-white hover:opacity-90"
                  : "bg-secondary text-white hover:opacity-90"
                }`}
            >
              {isDone(selected.id) ? "Complétée ✓ (cliquer pour annuler)" : "Marquer comme complétée ✓"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
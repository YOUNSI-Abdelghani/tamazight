import { useState } from "react";

const lecons = [
  {
    id: 1, titre: "Les salutations", desc: "Apprendre à saluer en Tamazight", done: true,
    vocab: [
      { mot: "Azul", trad: "Bonjour / Salut", prono: "ah-zool" },
      { mot: "Tifawt", trad: "Bonne journée", prono: "tee-fawt" },
      { mot: "Ar timillit", trad: "Au revoir", prono: "ar teem-lee-leet" },
      { mot: "Labas", trad: "Ça va ?", prono: "la-bass" },
    ]
  },
  {
    id: 2, titre: "Les nombres (1-10)", desc: "Compter de 1 à 10", done: true,
    vocab: [
      { mot: "Yiwen", trad: "Un", prono: "yee-wen" },
      { mot: "Sin", trad: "Deux", prono: "seen" },
      { mot: "Krad", trad: "Trois", prono: "krad" },
      { mot: "Kuẓ", trad: "Quatre", prono: "kouz" },
    ]
  },
  {
    id: 3, titre: "La famille", desc: "Les membres de la famille", done: false,
    vocab: [
      { mot: "Baba", trad: "Père", prono: "ba-ba" },
      { mot: "Yemma", trad: "Mère", prono: "yem-ma" },
      { mot: "Gma", trad: "Frère", prono: "gma" },
      { mot: "Ultma", trad: "Sœur", prono: "ult-ma" },
    ]
  },
  {
    id: 4, titre: "Les couleurs", desc: "Nommer les couleurs", done: false,
    vocab: [
      { mot: "Azegzaw", trad: "Vert", prono: "a-zeg-zaw" },
      { mot: "Azuggagh", trad: "Rouge", prono: "a-zug-gagh" },
      { mot: "Amellal", trad: "Blanc", prono: "a-mel-lal" },
    ]
  },
  { id: 5, titre: "Les jours de la semaine", desc: "Apprendre les jours", done: false, vocab: [] },
  { id: 6, titre: "Les expressions courantes", desc: "Phrases du quotidien", done: false, vocab: [] },
];

export default function Lecons() {
  const [selected, setSelected] = useState(null);
  const done = lecons.filter(l => l.done).length;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-primary mb-6">Leçon de Tamazight</h1>

      <div className="grid grid-cols-3 gap-6">

        {/* Progression */}
        <div className="bg-green-50 border-2 border-primary rounded-xl p-4">
          <h2 className="text-sm font-semibold text-primary mb-2">🏆 Votre progression</h2>
          <p className="text-xs text-gray-500 mb-1">Leçon complétées {done}/{lecons.length}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${Math.round(done / lecons.length * 100)}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mb-4">{Math.round(done / lecons.length * 100)}% complété</p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-white rounded-lg p-2 text-center">
              <p className="text-xs text-gray-400">⭐ Série</p>
              <p className="font-bold text-primary">7 jours</p>
            </div>
            <div className="bg-white rounded-lg p-2 text-center">
              <p className="text-xs text-gray-400">📚 Mots appris</p>
              <p className="font-bold text-primary">53</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-blue-50 border border-secondary rounded-lg p-2 text-xs">
              🐾 <span className="font-semibold text-secondary">Premier pas</span>
              <p className="text-gray-400">Complétez votre première leçon</p>
            </div>
            <div className="bg-red-50 border border-danger rounded-lg p-2 text-xs">
              🔥 <span className="font-semibold text-danger">Série de 7 jours</span>
              <p className="text-gray-400">Apprenez 7 jours de suite</p>
            </div>
          </div>
        </div>

        {/* Liste des leçons */}
        <div className="space-y-2">
          {lecons.map((l) => (
            <button
              key={l.id}
              onClick={() => setSelected(l)}
              className={`w-full text-left border-2 rounded-xl p-3 transition
                ${selected?.id === l.id
                  ? "border-primary bg-green-50"
                  : "border-gray-200 bg-white hover:border-secondary"
                }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{l.done ? "✅" : "⭕"}</span>
                <div>
                  <p className="text-sm font-semibold text-primary">Leçon {l.id} : {l.titre}</p>
                  <p className="text-xs text-gray-400">{l.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Contenu de la leçon */}
        {selected ? (
          <div className="border-2 border-secondary rounded-xl p-4 bg-blue-50">
            <h3 className="text-secondary font-bold mb-1">✅ Leçon {selected.id} : {selected.titre}</h3>
            <p className="text-xs text-gray-500 mb-3">Vocabulaire et expressions</p>
            <div className="space-y-2 mb-4">
              {selected.vocab.map((v) => (
                <div key={v.mot} className="bg-white rounded-lg p-3 border border-secondary">
                  <p className="font-semibold text-primary">{v.mot}</p>
                  <p className="text-sm text-gray-600">{v.trad}</p>
                  <p className="text-xs text-gray-400">Prononciation : {v.prono}</p>
                </div>
              ))}
            </div>
            <button className="w-full bg-secondary text-white py-2 rounded-lg text-sm hover:opacity-90 transition">
              Marquer comme complétée ✓
            </button>
          </div>
        ) : (
          <div className="border-2 border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <span className="text-4xl mb-3">📖</span>
            <p className="font-semibold text-gray-600">Sélectionnez une leçon</p>
            <p className="text-sm text-gray-400">Choisissez une leçon dans la liste pour commencer</p>
          </div>
        )}
      </div>
    </div>
  );
}
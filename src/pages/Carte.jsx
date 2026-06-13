import { useState } from "react";

const pays = [
  { nom: "Maroc", flag: "🇲🇦", pop: "~15 millions", langues: ["Tachelhit", "Tamazight", "Tarifit"], info: "Le Maroc a reconnu le Tamazight comme langue officielle en 2011." },
  { nom: "Algérie", flag: "🇩🇿", pop: "~10 millions", langues: ["Kabyle", "Chaoui", "Mozabite", "Chenoui"], info: "L'Algérie a reconnu le Tamazight comme langue nationale en 2002 et officielle en 2016." },
  { nom: "Tunisie", flag: "🇹🇳", pop: "~1 million", langues: ["Chleuh", "Djerbi"], info: "Le Tamazight est parlé par quelques communautés en Tunisie." },
  { nom: "Libye", flag: "🇱🇾", pop: "~500 000", langues: ["Nafusi", "Ghadamsi"], info: "Les Berbères de Libye parlent principalement le Nafusi." },
  { nom: "Mali", flag: "🇲🇱", pop: "~1 million", langues: ["Touareg"], info: "Les Touaregs du Mali parlent le Tamachek." },
  { nom: "Niger", flag: "🇳🇪", pop: "~1 million", langues: ["Tamachek"], info: "Les Touaregs du Niger maintiennent leurs traditions linguistiques." },
];

export default function Carte() {
  const [sel, setSel] = useState(pays[1]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-primary mb-2">Carte du monde amazigh</h1>
      <p className="text-gray-500 text-sm mb-6">
        Les Amazighs sont présents dans toute l'Afrique du Nord et le Sahara, avec une population estimée entre 25 et 30 millions.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { val: "25-30 millions", label: "Locuteurs amazighs dans le monde", color: "border-primary" },
          { val: "8+ pays", label: "Présence amazighe en Afrique du Nord", color: "border-secondary" },
          { val: "2500+ ans", label: "Histoire de l'écriture Tifinagh", color: "border-accent" },
        ].map(s => (
          <div key={s.val} className={`bg-green-50 border-2 ${s.color} rounded-xl p-4`}>
            <p className="text-2xl font-bold text-primary">{s.val}</p>
            <p className="text-xs text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Pays */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {pays.map(p => (
          <button
            key={p.nom}
            onClick={() => setSel(p)}
            className={`border-2 rounded-xl p-4 text-left transition
              ${sel.nom === p.nom
                ? "border-primary bg-green-50"
                : "border-gray-200 bg-white hover:border-secondary"
              }`}
          >
            <div className="text-2xl mb-1">{p.flag}</div>
            <p className="font-semibold text-primary text-sm">{p.nom}</p>
            <p className="text-xs text-gray-400">{p.pop}</p>
          </button>
        ))}
      </div>

      {/* Détail pays */}
      {sel && (
        <div className="bg-blue-50 border-2 border-secondary rounded-xl p-5">
          <h3 className="font-bold text-secondary mb-2 text-lg">{sel.flag} {sel.nom}</h3>
          <p className="text-sm text-gray-500 mb-3">👥 Population amazighe : {sel.pop}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {sel.langues.map(l => (
              <span key={l} className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                {l}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 italic">{sel.info}</p>
        </div>
      )}
    </div>
  );
}
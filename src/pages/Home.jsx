// src/pages/Home.jsx
import { Link } from "react-router-dom";

const features = [
  { icon: "📖", title: "Leçons structurées", desc: "Progressez étape par étape avec des leçons adaptées à tous les niveaux.", color: "bg-primary/10 border-primary", textColor: "text-primary" },
  { icon: "🔤", title: "Vocabulaire riche", desc: "Découvrez des milliers de mots classés par thèmes du quotidien.", color: "bg-secondary/10 border-secondary", textColor: "text-secondary" },
  { icon: "✏️", title: "Exercices pratiques", desc: "Renforcez vos connaissances avec des quiz et exercices interactifs.", color: "bg-accent/10 border-accent", textColor: "text-accent" },
  { icon: "🌍", title: "Culture amazighe", desc: "Explorez la culture et les traditions berbères à travers la langue.", color: "bg-danger/10 border-danger", textColor: "text-danger" },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
          ⵜⴰⵎⴰⵣⵉⵖⵜ - Tamazight
        </span>
        <h1 className="text-4xl font-bold text-primary mt-4 mb-3">
          Apprenez le Tamazight
        </h1>
        <p className="text-gray-500 mb-6">
          Découvrez la richesse de la langue amazighe avec des leçons interactives, du vocabulaire enrichi et des exercices pratiques pour progresser à votre rythme.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/lecons"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
            Commencer maintenant
          </Link>
          <Link to="/apropos"
            className="bg-secondary text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
            En savoir plus
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 mb-12">
        {features.map((f) => (
          <div key={f.title} className={`border-2 rounded-xl p-5 ${f.color}`}>
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className={`font-semibold mb-1 ${f.textColor}`}>{f.title}</h3>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="bg-primary/10 border-2 border-primary rounded-xl p-6">
        <h2 className="text-primary font-bold mb-3">Qu'est-ce que le Tamazight ?</h2>
        <p className="text-sm text-gray-600 mb-2">
          Le Tamazight (ⵜⴰⵎⴰⵣⵉⵖⵜ) est une langue berbère parlée par des millions de personnes en Afrique du Nord, principalement au Maroc, en Algérie et en Libye. C'est une langue ancienne avec une écriture unique appelée Tifinagh (ⵜⵉⴼⵉⵏⴰⵖ).
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Apprendre le Tamazight, c'est découvrir une culture millénaire, riche en traditions, en poésie et en histoire. Cette plateforme vous accompagne dans votre apprentissage avec des outils modernes et interactifs.
        </p>
        <Link to="/carte"
          className="bg-secondary text-white px-4 py-2 rounded-lg text-sm inline-block hover:opacity-80 transition">
          Découvrir la carte amazighe
        </Link>
      </div>
    </div>
  );
}
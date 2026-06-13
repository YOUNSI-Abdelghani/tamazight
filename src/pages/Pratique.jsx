import { useState } from "react";

const questions = [
  { q: 'Comment dit-on "Bonjour" en Tamazight ?', options: ["Labas", "Azul", "Tifawt", "Mamik"], rep: "Azul" },
  { q: 'Que signifie "Aman" ?', options: ["Soleil", "Feu", "Eau", "Terre"], rep: "Eau" },
  { q: 'Comment dit-on "Mère" en Tamazight ?', options: ["Baba", "Gma", "Yemma", "Ultma"], rep: "Yemma" },
  { q: 'Que signifie "Itri" ?', options: ["Lune", "Nuage", "Étoile", "Vent"], rep: "Étoile" },
  { q: 'Comment dit-on "Un" en Tamazight ?', options: ["Sin", "Krad", "Yiwen", "Kuẓ"], rep: "Yiwen" },
  { q: 'Que signifie "Azul" ?', options: ["Au revoir", "Merci", "Bonjour", "Oui"], rep: "Bonjour" },
  { q: 'Comment dit-on "Pain" ?', options: ["Aman", "Tament", "Aghrum", "Afus"], rep: "Aghrum" },
  { q: 'Que signifie "Adrar" ?', options: ["Mer", "Montagne", "Forêt", "Désert"], rep: "Montagne" },
  { q: 'Comment dit-on "Soleil" ?', options: ["Itri", "Agur", "Asif", "Tafukt"], rep: "Tafukt" },
  { q: 'Que signifie "Ar timillit" ?', options: ["Bonjour", "Au revoir", "Bonne nuit", "Merci"], rep: "Au revoir" },
];

export default function Pratique() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const q = questions[idx];

  const handleAnswer = (opt) => {
    if (selected) return;
    setSelected(opt);
    if (opt === q.rep) setScore(s => s + 1);
  };

  const next = () => {
    if (idx + 1 >= questions.length) { setFinished(true); return; }
    setIdx(i => i + 1);
    setSelected(null);
  };

  const restart = () => {
    setIdx(0); setScore(0); setSelected(null); setFinished(false);
  };

  if (finished) return (
    <div className="max-w-xl mx-auto px-6 py-20 text-center">
      <div className="text-6xl mb-4">{score >= 7 ? "🏆" : "📚"}</div>
      <h2 className="text-2xl font-bold text-primary mb-2">Quiz terminé !</h2>
      <p className="text-gray-500 mb-2">
        Score : <strong className="text-primary">{score} / {questions.length}</strong>
      </p>
      <p className="text-sm text-gray-400 mb-6">
        {score >= 8 ? "Excellent ! Bravo !" : score >= 5 ? "Bien ! Continuez à pratiquer." : "Révisez les leçons et réessayez !"}
      </p>
      <button onClick={restart} className="bg-primary text-white px-8 py-3 rounded-xl hover:opacity-90 transition">
        Recommencer
      </button>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-primary mb-4">Exercices pratiques</h1>

      <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
        <span>Question {idx + 1} sur {questions.length}</span>
        <span className="font-semibold text-primary">Score : {score}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-primary h-2 rounded-full transition-all"
          style={{ width: `${Math.round((idx / questions.length) * 100)}%` }}
        />
      </div>

      <div className="bg-white border-2 border-primary rounded-xl p-6">
        <p className="text-primary font-semibold text-lg mb-5">{q.q}</p>
        <div className="space-y-3 mb-5">
          {q.options.map(opt => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              className={`w-full py-3 px-4 rounded-xl border-2 text-left text-sm transition
                ${!selected
                  ? "border-secondary bg-blue-50 text-secondary hover:bg-blue-100"
                  : opt === q.rep
                    ? "border-primary bg-green-100 text-primary font-semibold"
                    : opt === selected
                      ? "border-danger bg-red-100 text-danger"
                      : "border-gray-200 bg-gray-50 text-gray-400"
                }`}
            >
              {selected && opt === q.rep && "✅ "}
              {selected && opt === selected && opt !== q.rep && "❌ "}
              {opt}
            </button>
          ))}
        </div>
        {selected && (
          <button
            onClick={next}
            className="w-full bg-secondary text-white py-3 rounded-xl hover:opacity-90 transition font-medium"
          >
            {idx + 1 >= questions.length ? "Voir les résultats →" : "Question suivante →"}
          </button>
        )}
      </div>
    </div>
  );
}
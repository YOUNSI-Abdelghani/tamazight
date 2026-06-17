import { useState } from "react";

const letters = [
  { char: "ⴰ", name: "a", sound: 'a (comme "papa")', example: "Aman (eau)" },
  { char: "ⴱ", name: "b", sound: "b", example: "Abrid (chemin)" },
  { char: "ⴳ", name: "g", sound: "g", example: "Agur (lune)" },
  { char: "ⴷ", name: "d", sound: "d", example: "Adrar (montagne)" },
  { char: "ⴹ", name: "ḍ", sound: "d emphatique", example: "Adhrar" },
  { char: "ⴻ", name: "e", sound: "e muet", example: "Tert" },
  { char: "ⴼ", name: "f", sound: "f", example: "Afus (main)" },
  { char: "ⴽ", name: "k", sound: "k", example: "Akli" },
  { char: "ⵀ", name: "h", sound: "h", example: "Ahal (soirée)" },
  { char: "ⵃ", name: "ḥ", sound: "h emphatique", example: "Ahrar" },
  { char: "ⵄ", name: "ɛ", sound: "ʕ (gorge)", example: "Aεrur (dos)" },
  { char: "ⵅ", name: "x/kh", sound: "kh", example: "Axam (tente)" },
  { char: "ⵇ", name: "q", sound: "q", example: "Aqerru (tête)" },
  { char: "ⵉ", name: "i", sound: "i", example: "Itri (étoile)" },
  { char: "ⵊ", name: "j", sound: "j", example: "Ajdir" },
  { char: "ⵍ", name: "l", sound: "l", example: "Alem (encre)" },
  { char: "ⵎ", name: "m", sound: "m", example: "Amghar (chef)" },
  { char: "ⵏ", name: "n", sound: "n", example: "Annar (cour)" },
  { char: "ⵓ", name: "u", sound: "ou", example: "Ul (coeur)" },
  { char: "ⵔ", name: "r", sound: "r", example: "Argan" },
  { char: "ⵕ", name: "ṛ", sound: "r emphatique", example: "Arrif" },
  { char: "ⵙ", name: "s", sound: "s", example: "Asif (rivière)" },
  { char: "ⵚ", name: "ṣ", sound: "s emphatique", example: "Asaru" },
  { char: "ⵛ", name: "c/ch", sound: "ch", example: "Achur (couscous)" },
  { char: "ⵜ", name: "t", sound: "t", example: "Tafukt (soleil)" },
  { char: "ⵟ", name: "ṭ", sound: "t emphatique", example: "Ttawel" },
  { char: "ⵡ", name: "w", sound: "w", example: "Aman" },
  { char: "ⵢ", name: "y", sound: "y", example: "Yiwen (un)" },
  { char: "ⵣ", name: "z", sound: "z", example: "Azul (bonjour)" },
  { char: "ⵥ", name: "ẕ", sound: "z emphatique", example: "Azzar (cheveux)" },
  { char: "ⵖ", name: "gh", sound: "gh (comme r français)", example: "Aghrif" },
  { char: "ⵇ", name: "x/kh", sound: "kh emphatique", example: "Aghrram" },
  { char: "ⵇ", name: "q", sound: "q", example: "Variante" },
];

export default function Alphabet() {
  const [selected, setSelected] = useState(letters[0]);

  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "fr-FR";
    speechSynthesis.speak(utter);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-primary mb-2">
        Alphabet Tifinagh (ⵜⵉⴼⵉⵏⴰⵖ)
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        L'alphabet Tifinagh est l'écriture traditionnelle des Berbères, utilisée depuis plus de 2500 ans.
        Cliquez sur une lettre pour voir les exemples.
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Grille des lettres - style cartes */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-3">Les lettres</h2>
          <div className="grid grid-cols-5 gap-3">
            {letters.map((l, i) => (
              <button
                key={i}
                onClick={() => setSelected(l)}
                className={`flex flex-col items-center justify-center gap-1 rounded-2xl py-4 transition shadow-sm
                  ${selected.char === l.char && selected === letters[i]
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:shadow-md hover:-translate-y-0.5"
                  }`}
              >
                <span className="text-2xl" style={{ fontFamily: "'Noto Sans Tifinagh', sans-serif" }}>
                  {l.char}
                </span>
                <span className={`text-xs ${selected === letters[i] ? "text-white" : "text-gray-400"}`}>
                  {l.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Détails */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-3">Détails</h2>
          <div className="border-2 border-primary rounded-xl p-5 bg-white">
            <div className="text-center text-5xl mb-3 text-primary font-bold" style={{ fontFamily: "'Noto Sans Tifinagh', sans-serif" }}>
              {selected.char}
            </div>
            <p className="text-center text-primary font-semibold mb-4">
              Lettre : {selected.name}
            </p>

            <div className="bg-blue-50 border border-secondary rounded-lg p-3 mb-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-secondary font-semibold">Prononciation</p>
                  <p className="text-sm text-gray-700">{selected.sound}</p>
                </div>
                <button
                  onClick={() => speak(selected.sound)}
                  className="text-secondary hover:text-primary text-lg transition"
                >
                  🔊
                </button>
              </div>
            </div>

            <div className="bg-green-50 border border-primary rounded-lg p-3">
              <p className="text-xs text-primary font-semibold mb-1">Exemple</p>
              <p className="text-sm text-gray-700">{selected.example}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-green-50 border-2 border-primary rounded-xl p-5">
        <h3 className="text-primary font-bold mb-2">À propos de Tifinagh</h3>
        <p className="text-sm text-gray-600 mb-2">
          Le Tifinagh moderne comprend 33 lettres de base. Chaque lettre représente un son consonantique ou vocalique.
        </p>
        <p className="text-sm text-primary font-semibold">
          💡 Conseil : Commencez par les voyelles (ⴰ, ⴻ, ⵉ, ⵓ) avant les consonnes.
        </p>
      </div>
    </div>
  );
}
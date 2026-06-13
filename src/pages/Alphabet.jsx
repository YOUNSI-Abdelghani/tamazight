import { useState } from "react";

const letters = [
  { char: "ⴰ", name: "A", sound: 'a (comme "papa")', example: "Aman (eau)" },
  { char: "ⴱ", name: "B", sound: "b", example: "Abrid (chemin)" },
  { char: "ⴳ", name: "G", sound: "g", example: "Agur (lune)" },
  { char: "ⴷ", name: "D", sound: "d", example: "Adrar (montagne)" },
  { char: "ⴹ", name: "Dh", sound: "d emphatique", example: "Adhrar" },
  { char: "ⴻ", name: "E", sound: "e muet", example: "Tert" },
  { char: "ⴼ", name: "F", sound: "f", example: "Afus (main)" },
  { char: "ⴽ", name: "K", sound: "k", example: "Akli" },
  { char: "ⵀ", name: "H", sound: "h", example: "Ahal (soirée)" },
  { char: "ⵃ", name: "Hh", sound: "h emphatique", example: "Ahrar" },
  { char: "ⵄ", name: "Ayn", sound: "ʕ (gorge)", example: "Aεrur (dos)" },
  { char: "ⵅ", name: "Kh", sound: "kh", example: "Axam (tente)" },
  { char: "ⵇ", name: "Q", sound: "q", example: "Aqerru (tête)" },
  { char: "ⵉ", name: "I", sound: "i", example: "Itri (étoile)" },
  { char: "ⵊ", name: "J", sound: "j", example: "Ajdir" },
  { char: "ⵍ", name: "L", sound: "l", example: "Alem (encre)" },
  { char: "ⵎ", name: "M", sound: "m", example: "Amghar (chef)" },
  { char: "ⵏ", name: "N", sound: "n", example: "Annar (cour)" },
  { char: "ⵓ", name: "U", sound: "ou", example: "Ul (coeur)" },
  { char: "ⵔ", name: "R", sound: "r", example: "Argan" },
  { char: "ⵕ", name: "Rr", sound: "r emphatique", example: "Arrif" },
  { char: "ⵙ", name: "S", sound: "s", example: "Asif (rivière)" },
  { char: "ⵚ", name: "Ss", sound: "s emphatique", example: "Asaru" },
  { char: "ⵛ", name: "Ch", sound: "ch", example: "Achur (couscous)" },
  { char: "ⵜ", name: "T", sound: "t", example: "Tafukt (soleil)" },
  { char: "ⵟ", name: "Tt", sound: "t emphatique", example: "Ttawel" },
  { char: "ⵡ", name: "W", sound: "w", example: "Aman" },
  { char: "ⵢ", name: "Y", sound: "y", example: "Yiwen (un)" },
  { char: "ⵣ", name: "Z", sound: "z", example: "Azul (bonjour)" },
  { char: "ⵥ", name: "Zz", sound: "z emphatique", example: "Azzar (cheveux)" },
  { char: "ⵖ", name: "Gh", sound: "gh (comme r français)", example: "Aghrif" },
  { char: "ⵗ", name: "Ghh", sound: "gh emphatique", example: "Aghrram" },
  { char: "ⵠ", name: "V", sound: "v", example: "Variante" },
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
        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-3">Les lettres</h2>
          <div className="grid grid-cols-5 gap-2">
            {letters.map((l) => (
              <button
                key={l.char}
                onClick={() => setSelected(l)}
                className={`w-12 h-12 rounded-xl text-xl font-bold border-2 transition
                  ${selected.char === l.char
                    ? "bg-primary text-white border-primary"
                    : "bg-white border-primary text-primary hover:bg-green-50"
                  }`}
              >
                {l.char}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-500 mb-3">Détails</h2>
          <div className="border-2 border-primary rounded-xl p-5 bg-white">
            <div className="text-center text-5xl mb-3 text-primary font-bold">
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
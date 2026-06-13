const links = {
  "Liens rapides": ["Accueil", "Leçons", "Vocabulaire", "Pratique"],
  "Ressources": ["À propos", "Guide de prononciation", "Alphabet Tifinagh", "FAQ"],
};

export default function Footer() {
  return (
    <footer className="bg-primary/10 border-t-2 border-primary mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-4 gap-8">

        <div>
          <h3 className="font-bold text-primary mb-2">Tamazight Learning</h3>
          <p className="text-sm text-gray-500">
            Plateforme d'apprentissage de la langue amazighe pour tous
          </p>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-semibold text-primary mb-3 text-sm">{title}</h4>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-semibold text-primary mb-3 text-sm">Suivez-nous</h4>
          <div className="flex gap-2">
            {["📱", "✉️", "📘"].map((icon, i) => (
              <button key={i}
                className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center text-sm hover:opacity-80 transition">
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary py-4 px-6 flex justify-between text-xs text-gray-400">
        <span>Fait avec ❤️ pour la langue Tamazight</span>
        <span>© 2026 Tamazight Learning. Tous droits réservés.</span>
      </div>
    </footer>
  );
}
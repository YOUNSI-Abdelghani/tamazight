export default function APropos() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-primary mb-6 text-center">
        À propos de Tamazight Learning
      </h1>

      {/* Mission */}
      <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 mb-5">
        <h2 className="text-primary font-semibold mb-3">Notre mission</h2>
        <p className="text-sm text-gray-600 mb-2">
          Tamazight Learning est une plateforme dédiée à la préservation et à l'enseignement de la langue amazighe. Notre objectif est de rendre l'apprentissage du Tamazight accessible à tous, où qu'ils soient dans le monde.
        </p>
        <p className="text-sm text-gray-600">
          Nous croyons que la langue est le pilier de l'identité culturelle, et nous nous engageons à transmettre ce patrimoine linguistique aux générations futures.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        {[
          { icon: "🌍", title: "Accessible partout", desc: "Apprenez à votre rythme, depuis n'importe où dans le monde, sur tous vos appareils.", border: "border-primary" },
          { icon: "👥", title: "Communauté active", desc: "Rejoignez une communauté passionnée d'apprenants et de locuteurs natifs.", border: "border-primary" },
          { icon: "📖", title: "Contenu de qualité", desc: "Des leçons créées par des experts en langue amazighe et validées par des locuteurs natifs.", border: "border-primary" },
          { icon: "💚", title: "Gratuit et ouvert", desc: "L'éducation est un droit. Notre contenu de base est entièrement gratuit et accessible.", border: "border-primary" },
        ].map(f => (
          <div key={f.title} className={`bg-primary/10 border-2 ${f.border} rounded-xl p-4`}>
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="font-semibold text-primary mb-1 text-sm">{f.title}</h3>
            <p className="text-xs text-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Langue */}
      <div className="bg-blue-50 border-2 border-secondary rounded-xl p-5 mb-5">
        <h2 className="text-secondary font-semibold mb-2">La langue Tamazight</h2>
        <p className="text-sm text-gray-600 mb-2">
          Le Tamazight (ⵜⴰⵎⴰⵣⵉⵖⵜ) fait partie de la famille des langues berbères, parlées par environ 25 à 30 millions de personnes en Afrique du Nord. Elle possède plusieurs variantes régionales, notamment le Kabyle en Algérie, le Tachelhit au Maroc, et le Tamazight du Maroc central.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          L'écriture Tifinagh (ⵜⵉⴼⵉⵏⴰⵖ) est l'alphabet traditionnel des Berbères, utilisé depuis plus de 2500 ans. En 2011, le Tamazight a été reconnu comme langue officielle au Maroc aux côtés de l'arabe, et l'Algérie l'a également adopté comme langue nationale et officielle en 2016.
        </p>
        <p className="text-sm text-gray-600">
          Au-delà de la langue, le Tamazight véhicule une culture riche : poésie, musique, artisanat, traditions orales et valeurs de solidarité et d'hospitalité qui caractérisent le peuple amazigh.
        </p>
      </div>

      {/* Contact */}
      <div className="text-center bg-primary/10 border-2 border-primary rounded-xl p-6">
        <h2 className="text-primary font-bold mb-2">Rejoignez-nous</h2>
        <p className="text-sm text-gray-500 mb-4">Vous souhaitez contribuer, poser des questions ou simplement en savoir plus ?</p>
        <div className="flex justify-center gap-3">
          <a href="mailto:contact@tamazight.dz"
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm hover:opacity-90 transition">
            ✉️ Nous contacter
          </a>
          <a href="/lecons"
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm hover:opacity-90 transition">
            📚 Commencer à apprendre
          </a>
        </div>
      </div>

      {/* rejoin nous */}
      <div className="text-center bg-secondary/10 border-2 border-secondary rounded-xl p-6 mt-5">
        <h2 className="text-secondary font-bold mb-2">Rejoignez notre communauté</h2>
        <p className="text-sm text-gray-500 mb-4">Échangez avec d'autres apprenants, partagez vos progrès et découvrez des ressources supplémentaires.</p>
        <div className="flex justify-center gap-3">
          <a href="mailto:contact@tamazight.dz"
            className="bg-secondary text-white px-5 py-2 rounded-lg text-sm hover:opacity-90 transition">
            ✉️ Forum
          </a>
          <a href="/lecons"
            className="bg-secondary text-white px-5 py-2 rounded-lg text-sm hover:opacity-90 transition">
            📚 discord
          </a>
          <a href="/lecons"
            className="bg-secondary text-white px-5 py-2 rounded-lg text-sm hover:opacity-90 transition">
            📚 Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
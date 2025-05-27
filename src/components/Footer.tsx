import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 text-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Infos & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-orange-400">
              Royal Tacos Valence
            </h3>
            <p>
              Certains restaurants facturent des frais supplémentaires jusqu’à
              2,50€ TTC. Nos livreurs ne sont pas rémunérés à la course.
            </p>
            <form className="mt-4">
              <label
                htmlFor="newsletter"
                className="block mb-1 text-sm font-semibold"
              >
                Newsletter
              </label>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-3 py-2 rounded-l-md text-gray-900 focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-4 py-2 rounded-r-md font-medium"
                >
                  {`S'inscrire`}
                </button>
              </div>
            </form>
          </div>

          {/* Mentions */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-orange-400">
              Mentions légales
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-orange-400 transition">
                  Données personnelles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition">
                  Conditions générales de vente
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Langue + Bouton */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-orange-400">Informations</h3>
            <p>Pour votre santé, mangez 5 fruits et légumes par jour.</p>
            <div className="flex items-center gap-3 mt-2">
              <select className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm">
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
              <Link
                href="/commande"
                className="bg-orange-500 hover:scale-105 transition-transform duration-300 text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg"
              >
                Commander
              </Link>
            </div>
          </div>
        </div>

        {/* Applis & Réseaux */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Applis */}
          <div className="text-center space-y-2">
            <h4 className="uppercase text-xs text-gray-400">
              Téléchargez nos applis
            </h4>
            <div className="flex gap-3 justify-center">
              <Image
                src="/appstore.png"
                alt="App Store"
                width={120}
                height={40}
              />
              <Image
                src="/googleplay.png"
                alt="Google Play"
                width={120}
                height={40}
              />
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-2 text-center">
            <h4 className="uppercase text-xs text-gray-400">Suivez-nous</h4>
            <div className="flex gap-4 justify-center text-2xl text-gray-300">
              {["facebook-f", "instagram", "tiktok", "youtube", "twitter"].map(
                (icon) => (
                  <Link key={icon} href="#">
                    <i
                      className={`fab fa-${icon} hover:text-orange-400 transition`}
                    />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Paiement */}
          <div className="text-center space-y-2">
            <h4 className="uppercase text-xs text-gray-400">
              Paiement sécurisé
            </h4>
            <div className="flex gap-4 justify-center items-center">
              <Image src="/visa.png" alt="Visa" width={50} height={30} />
              <Image
                src="/mastercard.png"
                alt="Mastercard"
                width={50}
                height={30}
              />
              <Image src="/paypal.png" alt="Paypal" width={70} height={30} />
              <Image src="/edenred.png" alt="Edenred" width={70} height={30} />
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="text-center text-gray-500 text-xs space-y-1 border-t pt-4 border-gray-700">
          <p>© Royal Tacos Valence {new Date().getFullYear()}</p>
          <p>
            {new Date().toLocaleDateString()} –{" "}
            {new Date().toLocaleTimeString()}
          </p>
          <p>
            Mangez au moins 5 fruits et légumes par jour –{" "}
            <Link
              href="https://www.mangerbouger.fr"
              className="underline hover:text-orange-400"
            >
              www.mangerbouger.fr
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

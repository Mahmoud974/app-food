"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="  px-6 py-16 space-y-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto rounded-xl overflow-hidden flex flex-col md:flex-row h-72">
        <div className="p-10 flex flex-col justify-center bg-[#063d1e] w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Royal Tacos®</h2>
          <Link
            href="#"
            className="inline-block bg-white text-[#063d1e] font-semibold px-6 py-2 rounded-full text-sm hover:bg-gray-200 transition"
          >
            Plus d’infos
          </Link>
        </div>
        <div className="relative w-full md:w-1/2 h-[300px]">
          <Image
            src="/burger.jpg"
            alt="Boisson Royal Tacos"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-12">
          Dites bonjour à la facilité de commande, au choix infini et – oui, aux
          tacos gratuits.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-sm">
          <div className="space-y-3">
            <Image
              src="/icons/fidelite.png"
              alt="Fidélité"
              width={50}
              height={50}
            />
            <p className="font-semibold">Un client fidèle, on le récompense</p>
            <p>1€ = 10 Étoiles ⭐⭐⭐</p>
          </div>
          <div className="space-y-3">
            <Image
              src="/icons/recompense.png"
              alt="Récompenses"
              width={50}
              height={50}
            />
            <p className="font-semibold">Encore plus de récompenses</p>
            <p>
              Collecte tes étoiles pour profiter de menus, desserts ou boissons
              offerts !
            </p>
          </div>
          <div className="space-y-3">
            <Image src="/icons/gold.png" alt="Gold" width={50} height={50} />
            <p className="font-semibold">1500 Étoiles en un an = Niveau Gold</p>
            <p>
              Des récompenses exclusives toute l’année, même pour ton
              anniversaire 🎉
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <Link
            href="/register"
            className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-orange-600 hover:border hover:border-orange-600 transition"
          >
            S’inscrire
          </Link>
          <Link
            href="/login"
            className="border border-orange-600 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 hover:text-white transition"
          >
            Se connecter
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden bg-[#1a1a1a] flex flex-col">
          <div className="relative w-full h-64">
            <Image
              src="/livraison.jpg"
              alt="Livraison"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Royal Tacos® en Livraison
              </h3>
              <p className="text-sm text-gray-300">
                Commande sur Uber Eats ou Deliveroo et fais-toi livrer tes menus
                préférés 🍔🍟
              </p>
            </div>
            <Link
              href="#"
              className="mt-6 inline-block bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition"
            >
              Commander
            </Link>
          </div>
        </div>

        {/* Appli */}
        <div className="rounded-xl overflow-hidden bg-[#1a1a1a] flex flex-col">
          <div className="relative w-full h-64">
            <Image
              src="/app-mobile.jpg"
              alt="Appli Mobile"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 bg-white text-black flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Appli Royal Tacos France
              </h3>
              <p className="text-sm">
                Gagne du temps avec Click & Collect et cumule tes ⭐ plus
                facilement !
              </p>
            </div>
            <Link
              href="#"
              className="mt-6 inline-block text-orange-600 font-semibold text-sm hover:underline"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

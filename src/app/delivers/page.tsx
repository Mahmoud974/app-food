import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DeliveryPartners() {
  return (
    <section className="text-white py-16 px-4 ">
      <div className="max-w-5xl text-black mx-auto text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Dégustez votre plat préféré en quelques clics
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Découvrez nos partenaires Royal Tacos® Delivers ainsi que la liste des
          restaurants ouverts en vente à emporter.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-[#1b1c1d] shadow-sm rounded-xl overflow-hidden flex flex-col">
          <div className="relative h-48 bg-[#09cdc0]">
            <Image
              src="/deliveroo.png"
              alt="Deliveroo"
              fill
              className="object-contain"
            />
          </div>

          <div className="p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">
              Royal Tacos® Delivers avec Deliveroo
            </h3>
            <p className="text-sm text-gray-400">
              Recevez votre Royal préféré à votre porte avec Deliveroo !
              Découvrez quels restaurants vous livrent.
            </p>
            <button className="mt-4 px-5 py-2 border border-[#00c1b5] text-[#00c1b5] rounded-full font-medium hover:bg-[#00c1b5] hover:text-black transition">
              <Link href="https://deliveroo.fr/">Commander via Deliveroo</Link>
            </button>
          </div>
        </div>

        <div className="bg-[#1b1c1d] shadow-sm rounded-xl overflow-hidden flex flex-col">
          <div className="relative h-48 bg-white">
            <Image
              src="/ubereats.png"
              alt="Uber Eats"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">
              Royal Tacos® Delivers avec Uber Eats
            </h3>
            <p className="text-sm text-gray-400">
              Offrez-vous un moment de plaisir avec votre plat préféré livré à
              domicile. Découvrez le restaurant le plus proche de chez vous !
            </p>
            <button className="mt-4 px-5 py-2 border border-green-500 text-green-400 rounded-full font-medium hover:bg-green-500 hover:text-black transition">
              <Link href="https://www.ubereats.com/">
                Commander via Uber Eats
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

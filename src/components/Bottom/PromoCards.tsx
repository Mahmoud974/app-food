"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const promos = [
  {
    title: "Carte Edenred Ticket Restaurant",
    img: "/edenred-pizza.jpg",
  },
  {
    title: "Meilleure enseigne de pizza",
    subtitle: "2024 - 2025",
    description: "pour la 8e année consécutive",
    img: "/trophee-pizza.jpg",
  },
  {
    title: "Le nutri-score de nos produits",
    img: "/nutri-score.jpg",
  },
  {
    title: "En exclu sur l'app Royal Tacos",
    description: "-10% sur les menus",
    img: "/promo-app.jpg",
  },
];

export default function PromoCards() {
  return (
    <section className="  py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {promos.map((promo, idx) => (
          <div
            key={idx}
            className="bg-[#fff] flex flex-col items-center text-center rounded-none"
          >
            <div className="relative w-64 h-64">
              <Image
                src={promo.img}
                alt={promo.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Texte */}
            <div className="p-4 text-black space-y-1 min-h-[120px] flex flex-col justify-center">
              <h3 className="text-lg font-extrabold">{promo.title}</h3>
              {promo.subtitle && (
                <p className="text-sm font-semibold text-gray-700">
                  {promo.subtitle}
                </p>
              )}
              {promo.description && (
                <p className="text-[#0076b8] text-sm">{promo.description}</p>
              )}
            </div>

            <button className="w-full bg-[#0066a2] hover:bg-[#00548b] text-white text-sm font-bold py-3 flex items-center justify-center gap-2 transition">
              VOIR PLUS <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

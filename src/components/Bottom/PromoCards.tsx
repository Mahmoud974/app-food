"use client";
import Image from "next/image";

const promos = [
  {
    title: "Carte Edenred Ticket Restaurant",
    img: "/helpBloc/1.jpg",
  },
  {
    title: "Meilleure enseigne de pizza",
    subtitle: "2024 - 2025",
    description: "pour la 8e année consécutive",
    img: "/helpBloc/2.jpg",
  },
  {
    title: "Le nutri-score de nos produits",
    img: "/helpBloc/3.jpg",
  },
  {
    title: "En exclu sur l'app Royal Tacos",
    description: "-10% sur les menus",
    img: "/helpBloc/4.jpg",
  },
];

export default function PromoCards() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {promos.map((promo, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-72 h-72 bg-gray-600  flex items-center justify-center overflow-hidden">
              {promo.img ? (
                <Image
                  src={promo.img}
                  alt={promo.title}
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-white text-lg">{promo.title}</span>
              )}
            </div>

            <div className="w-72 mt-2 flex flex-col">
              <button className="w-full bg-gray-600 text-white text-xl font-normal py-2 rounded-none">
                VOIR PLUS
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

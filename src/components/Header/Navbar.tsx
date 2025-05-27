import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-start gap-68 items-center container mx-auto">
        <h1 className="text-2xl">
          <Link href="/">Royal </Link>
        </h1>

        <ul className="flex gap-28 py-3 container">
          <li>
            <Link href="pizzas">Pizzas</Link>
          </li>
          <li>
            <Link href="burgers">Burgers</Link>
          </li>
          <li>
            <Link href="tacos"> Tacos</Link>
          </li>
          <li>
            <Link href="salades"> Salades</Link>
          </li>
          <li>
            <Link href="desserts"> Desserts</Link>
          </li>
          <li>
            <Link href="boissons"> Boissons</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="  bg-gray-700 py-2 text-white">
          <ul className="flex justify-between container mx-auto">
            <li>BESTSELLERS</li>
            <li>NOUVEAUTÉS</li>
            <li>LES ICONIQUES</li>
            <li>LES CARNIVORES</li>
            <li>LES FROMAGES ADDICTS</li>
            <li>LES GRANDS CLASSIQUES</li>
            <li>LES FROMAGES ADDICTS</li>

            <li> CREEZ VOTRE PIZZA</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Mail, UserPlus } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row  text-white">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-16 space-y-6">
        <Link href="/" className="text-sm mb-2 text-[#2a2b2c] hover:underline">
          ← Retour
        </Link>
        <h1 className="text-3xl font-bold flex items-center text-black gap-2">
          <UserPlus size={28} />
          Créer un compte
        </h1>
        <p className="text-black text-sm">
          Les champs obligatoires sont marqués d&apos;un astérisque*
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="* Nom complet"
            className="w-full px-4 py-3 rounded-md bg-[#2a2b2c] text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="* Adresse email"
            className="w-full px-4 py-3 rounded-md bg-[#2a2b2c] text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="* Mot de passe"
            className="w-full px-4 py-3 rounded-md bg-[#2a2b2c] text-white focus:outline-none"
          />
        </div>

        <button className="bg-orange-600 hover:bg-orange-500 transition px-6 py-3 rounded-full w-fit font-semibold mt-4">
          {`S'inscrire`}
        </button>

        <div className="text-black text-sm">
          Vous avez déjà un compte ?{" "}
          <Link href="/login" className="text-green-400 hover:underline">
            Se connecter
          </Link>
        </div>

        {/* Connexion via réseaux sociaux */}
        <div className="mt-8 space-y-4">
          <p className="text-center text-gray-500 text-sm">
            Ou inscrivez-vous avec
          </p>
          <div className="flex gap-4">
            <button className="flex items-center text-black justify-center gap-3 px-4 py-2 w-full border border-gray-600 rounded-md hover:bg-[#2a2a2a] transition">
              <Mail size={20} />
              <span>Google</span>
            </button>

            <button className="flex items-center justify-center gap-3 px-4 py-2 w-full border border-blue-600 rounded-md hover:bg-[#2a2a2a] transition">
              <Facebook size={20} className="text-blue-500" />
              <span className="text-blue-500">Facebook</span>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/tacos.png"
          alt="Illustration d'inscription"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}

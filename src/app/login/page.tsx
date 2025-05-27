"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row   ">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-16 space-y-6">
        <Link href="/" className="text-sm mb-2   hover:underline">
          ← Retour
        </Link>
        <h1 className="text-3xl font-bold">Se connecter</h1>
        <p className="  text-sm">
          Les champs obligatoires sont marqués d&apos;un astérisque*
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="* Saisissez votre adresse email"
            className="w-full px-4 py-3 rounded-md bg-[#2a2b2c] text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="* Mot de passe"
            className="w-full px-4 py-3 rounded-md bg-[#2a2b2c] text-white focus:outline-none"
          />
        </div>

        <Link href="#" className="text-green-400 text-sm hover:underline mt-2">
          Vous avez oublié votre mot de passe ?
        </Link>

        <button className="bg-green-700 hover:bg-green-600 transition px-6 py-3 rounded-full w-fit font-semibold mt-4">
          Se connecter
        </button>

        <div className="text-gray-400 text-sm">
          Vous êtes nouveau chez Royal Tacos ?{" "}
          <Link href="#" className="text-green-400 hover:underline">
            Créer un compte
          </Link>
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-center text-gray-500 text-sm">
            Ou connectez-vous avec
          </p>
          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-3 px-4 py-2 w-full border border-gray-600 rounded-md hover:bg-[#2a2a2a] transition">
              <Mail size={20} />
              <span>Google</span>
            </button>

            <button className="flex items-center justify-center gap-3 px-4 py-2 w-full border border-blue-600 rounded-md hover:bg-[#2a2a2a] transition">
              <Facebook size={20} className="text-blue-500" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/login.png"
          alt="Connexion visuelle"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}

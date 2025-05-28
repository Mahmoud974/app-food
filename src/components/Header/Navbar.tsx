"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const pages = [
    { label: "Home", path: "/" },
    { label: "Pizzas", path: "/pizzas" },
    { label: "Burgers", path: "/burgers" },
    { label: "Tacos", path: "/tacos" },
    { label: "Salades", path: "/salades" },
    { label: "Desserts", path: "/desserts" },
    { label: "Boissons", path: "/boissons" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow"
    >
      <div className="flex justify-between items-center container mx-auto py-4 px-4">
        <div className="flex items-center gap-20">
          <h1 className="text-2xl font-bold text-orange-600">
            <Link href="/">Royal</Link>
          </h1>

          <ul className="flex gap-10 text-sm font-medium text-gray-700">
            {pages.map((page) => {
              const isActive =
                page.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(page.path);

              return (
                <motion.li
                  key={page.label}
                  whileHover={{ scale: 1.1, color: "#ea580c" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={page.path}
                    className={
                      isActive
                        ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                        : ""
                    }
                  >
                    {page.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/register"
            className="bg-orange-600 text-white hover:text-orange-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:border-2 hover:border-orange-500 transition"
          >
            S’inscrire
          </Link>
          <Link
            href="/login"
            className="border-2 border-orange-600 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 hover:text-white transition"
          >
            Se connecter
          </Link>
        </div>
      </div>

      {/* Barre secondaire */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-gray-800 text-white text-xs py-2"
      >
        <ul className="flex justify-center gap-6 container mx-auto">
          {[
            "BESTSELLERS",
            "NOUVEAUTÉS",
            "LES ICONIQUES",
            "LES CARNIVORES",
            "LES FROMAGES ADDICTS",
            "LES GRANDS CLASSIQUES",
            "CRÉEZ VOTRE PIZZA",
          ].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.05, color: "#f97316" }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}

"use client";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Basket() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Steak Tenderloin & French Fries",
      price: 80,
      quantity: 2,
      img: "/burger.jpg",
    },
    {
      id: 2,
      name: "Cheese burger with Extra Beef",
      price: 15,
      quantity: 1,
      img: "/burger.jpg",
    },
  ]);

  const [orderType, setOrderType] = useState("Dine in");

  const handleQuantity = (index: number, delta: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const suggestions = [
    { id: 101, name: "Cheesy Bread", price: 4.49 },
    { id: 102, name: "Kick'n chicken", price: 6.49 },
    {
      id: 103,
      name: "Cheese Rolls XL - 6 Gouda & Emmental et 6 Pepperoni",
      price: 8.49,
    },
  ];

  const handleAddSuggestion = (product) => {
    const exists = items.find((item) => item.name === product.name);
    if (exists) {
      setItems((prev) =>
        prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setItems((prev) => [
        ...prev,
        { ...product, quantity: 1, img: "/burger.jpg" },
      ]);
    }
  };

  return (
    <main className="bg-white w-full h-full shadow-md rounded-2xl">
      <div className="p-7">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="font-semibold text-md">Ariel Hikmat</p>
            <p className="text-sm text-gray-500">
              Order #925 / <span className="capitalize">{orderType}</span>
            </p>
            <p className="text-sm text-gray-500">
              Wed, July 12, 2023 • 06:12 PM
            </p>
          </div>
          <div className="bg-emerald-700 text-white rounded-lg px-3 py-1 text-sm font-semibold">
            A4
          </div>
        </div>

        <div className="flex justify-between items-center bg-gray-100 rounded-full p-1 w-full max-w-xs mx-auto mb-6">
          {["Dine in", "Take Away", "Delivery"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                orderType === type
                  ? "bg-orange-600  cursor-pointer text-white"
                  : "text-gray-500 cursor-pointer hover:bg-gray-200"
              }`}
              onClick={() => setOrderType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mt-7 space-y-4">
          <h3 className="text-md font-bold">Ajouter un code coupon</h3>
          <div className="flex items-center bg-gray-100 rounded-md p-1 w-full max-w-md">
            <input
              type="text"
              placeholder="Entrez votre code"
              className="w-full bg-transparent px-2 py-1 focus:outline-none"
            />
            <button className="bg-orange-500 cursor-pointer text-white px-2 py-1 rounded">
              Appliquer
            </button>
          </div>
        </div>

        <div className="mt-7 space-y-4">
          <h3 className="text-md font-bold">Détail de la commande</h3>
          {items.map((item, idx) => (
            <div className="flex items-center justify-between" key={item.id}>
              <Image
                width={100}
                height={100}
                src={item.img}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <p>{item.name}</p>
                <div className="flex items-center">
                  <button
                    className="bg-orange-500 rounded-full text-white w-8 h-8 flex items-center justify-center"
                    onClick={() => handleQuantity(idx, -1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-orange-500 rounded-full text-white w-8 h-8 flex items-center justify-center"
                    onClick={() => handleQuantity(idx, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="text-orange-500 font-bold">
                ${item.price * item.quantity}.00
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 text-gray-600 rounded-md my-4 h-auto p-3 space-y-2">
          <div className="flex justify-between">
            <p>Total</p>
            <p>13.90€</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>1.56€</p>
          </div>
          <div className="w-full border-t-2 border-dashed border-gray-400 my-4"></div>
          <div className="flex font-bold justify-between">
            <p>Montant total</p>
            <p>31.56€</p>
          </div>
        </div>

        <div className="mt-7">
          <button className="bg-orange-600 text-white w-full py-2 rounded-md">
            Commander
          </button>
        </div>

        <div className="mt-10 bg-gray-50 rounded-xl p-4">
          <h3 className="font-semibold text-lg mb-3">Vous pourriez aimer :</h3>
          <div className="space-y-2">
            {suggestions.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-t py-2"
              >
                <div className="flex-1 pr-2">
                  <p className="text-sm">{product.name}</p>
                  <p className="text-sm font-bold">
                    {product.price.toFixed(2)} €
                  </p>
                </div>

                <button
                  onClick={() => handleAddSuggestion(product)}
                  className="ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 hover:bg-green-200"
                >
                  <CirclePlus size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

import Banner from "@/components/Banner/Banner";
import Basket from "@/components/Basket/Basket";
import React from "react";

export default function FoodLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Banner />
      <main className="mx-auto container">
        <h1 className="text-3xl py-4">{title}</h1>
        <div className="flex items-start space-x-8">
          <div className="flex-1 space-y-8">{children}</div>
          <div className="sticky top-4 h-fit">
            <Basket />
          </div>
        </div>
      </main>
    </>
  );
}

import Banner from "@/components/Banner/Banner";
import Basket from "@/components/Basket/Basket";
import CardFood from "@/components/Card";
import React from "react";

export default function Page() {
  return (
    <main>
      <Banner />
      <main className="mx-auto container">
        <h1 className="text-3xl py-4">Boissons</h1>

        <div className="flex items-start space-x-8">
          <div className="flex-1 space-y-8">
            <div className="grid grid-cols-4 gap-2 flex-wrap">
              {[...new Array(7)].map((_, index) => (
                <CardFood key={`menu-1-${index}`} />
              ))}
            </div>
          </div>

          <div className="sticky top-4 h-fit">
            <Basket />
          </div>
        </div>
      </main>
    </main>
  );
}

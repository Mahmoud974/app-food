import FoodLayout from "../layouts/FoodLayout";
import CardFood from "@/components/Card";
import React from "react";

export default function PizzasPage() {
  return (
    <FoodLayout title="Les Pizzas">
      <div className="grid grid-cols-4 gap-2 flex-wrap">
        {[...new Array(14)].map((_, index) => (
          <CardFood key={`pizza-${index}`} />
        ))}
      </div>
    </FoodLayout>
  );
}

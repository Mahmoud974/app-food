import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, ShoppingBasket } from "lucide-react";

interface CardFoodProps {
  title?: string;
  description?: string;
  price?: number;
  imageSrc?: string;
  category?: string;
}

export default function CardFood({
  title = "Campagnarde",
  description = "Délicieux tacos avec viande au choix, frites, sauce et légumes frais",
  price = 18.99,
  imageSrc = "/burger.jpg",
  category = "Tacos",
}: CardFoodProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg w-full   ">
      <div className="relative h-58 -mt-7 w-full">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
        <Badge className="absolute top-4 right-2 bg-orange-500 hover:bg-orange-600">
          {category}
        </Badge>
      </div>
      <CardHeader>
        <div className="flex flex-col justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="text-xl ">{title}</CardTitle>
            <div className="text-xl font-bold text-orange-500">
              {price.toFixed(2)} €
            </div>
            <CardDescription className=" ">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col  ">
          <div className="flex items-center gap-2">
            <Select defaultValue="medium">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Taille" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Petit : 23cm</SelectItem>
                <SelectItem value="medium">Medium : 28cm</SelectItem>
                <SelectItem value="large">Grand : 33cm</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Select defaultValue="fine">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Type de pâte" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fine">Pâte Fine</SelectItem>
                <SelectItem value="thick">Pâte Épaisse</SelectItem>
                <SelectItem value="stuffed">Pâte Farcie</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-end gap-2">
            <Select defaultValue="1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Qté" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
            <Button className="  bg-orange-600 cursor-pointer hover:bg-green-600">
              <Pencil />
            </Button>
            <Button className="  ≈cursor-pointer hover:bg-orange-600">
              <ShoppingBasket />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Review } from "@/lib/types";
import { Star } from "lucide-react";

const ReviewCard: React.FC<Review> = ({ name, contact, review, rating}) => {
  return (
    <Card className="hover:bg-foreground/5 transition-all duration-100">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{contact}</CardDescription>
      </CardHeader>
      <CardContent>{review}</CardContent>
      <CardFooter>
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} className={index < rating ? "text-yellow-500" : "hidden"} />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;

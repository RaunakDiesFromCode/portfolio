import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Review } from "@/lib/types";

const ReviewCard: React.FC<Review> = ({ name, email, message }) => {
  return (
    <Card className="hover:bg-foreground/5 transition-all duration-100">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{email}</CardDescription>
      </CardHeader>
      <CardContent>{message}</CardContent>
    </Card>
  );
};

export default ReviewCard;

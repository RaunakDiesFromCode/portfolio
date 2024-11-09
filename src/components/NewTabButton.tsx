import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Undo } from "lucide-react";
import { codeFont } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface NewTabButtonProps {
  text: string;
  href: string;
  className?: string;
  blank?: boolean;
}

const NewTabButton: React.FC<NewTabButtonProps> = ({
  text,
  href,
  className,
  blank = false,
}) => {
  return (
    <Button
      variant={"outline"}
      className={cn(`mt-4 ${codeFont.className}`, className)}
      asChild
    >
      {blank ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          {text + " "}
          <span className="rotate-[115deg]">
            <Undo />{" "}
          </span>
        </a>
      ) : (
        <Link href={href}>
          {text + " "}
        </Link>
      )}
    </Button>
  );
};

export default NewTabButton;

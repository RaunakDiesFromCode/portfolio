import * as React from "react";
import { cn } from "@/lib/utils";
import { codeFont } from "@/app/fonts";

export interface TimelineItem {
    id: string;
    period: string;
    title: string;
    institution?: string;
    details?: string;
}

interface TimelineProps {
    items: TimelineItem[];
    className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
    if (!items.length) {
        return (
            <p className="text-sm text-muted-foreground">
                No timeline data available.
            </p>
        );
    }

    return (
        <ol
            role="list"
            className={cn(
                "relative border-l border-border/40 pl-10",
                className,
            )}
        >
            {items.map((item) => (
                <li key={item.id} className="group relative mb-12 last:mb-0">
                    {/* Dot */}
                    <span
                        aria-hidden
                        className="
                            absolute
                            -left-10
                            top-1.5
                            h-3
                            w-3
                            -translate-x-1/2
                            rounded-full
                            border
                            border-border
                            bg-background
                            transition-colors
                            group-hover:bg-foreground
                        "
                    />

                    <time className="mb-1 block text-xs tracking-widest text-muted-foreground">
                        {item.period}
                    </time>

                    <h3 className="text-base font-medium text-foreground">
                        {item.title}
                    </h3>

                    {item.institution && (
                        <p className="text-sm text-muted-foreground">
                            {item.institution}
                        </p>
                    )}

                    {item.details && (
                        <p className={`mt-2 text-sm text-foreground/70 ${codeFont.className}`}>
                            {item.details}
                        </p>
                    )}
                </li>
            ))}
        </ol>
    );
}

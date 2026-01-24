"use client";

import { useEffect, useState } from "react";
import { Terminal, X, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { TERMINAL_COMMANDS } from "@/data/portfolio";

export default function FloatingActions() {
    const [visible, setVisible] = useState(true);
    const [copied, setCopied] = useState(false);
    const [command, setCommand] = useState<string>("");

    useEffect(() => {
        const platform = navigator.platform.toLowerCase();
        const ua = navigator.userAgent.toLowerCase();

        if (platform.includes("win") || ua.includes("windows")) {
            setCommand(TERMINAL_COMMANDS.windows);
        } else if (platform.includes("mac") || platform.includes("linux")) {
            setCommand(TERMINAL_COMMANDS.unix);
        } else {
            setCommand("");
        }
    }, []);

    return (
        <div className="hidden md:flex fixed bottom-4 right-4 z-40 flex-col items-end gap-2">
            {/* Terminal panel */}
            <div
                className={`
                    flex flex-col gap-2
                    max-w-[420px]
                    rounded border border-input/50 bg-accent/40
                    p-1 pt-2 backdrop-blur-sm
                    transition-all duration-300 ease-out
                    ${
                        visible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4 pointer-events-none"
                    }
                `}
            >
                <div className="flex items-center justify-between px-2">
                    <span className="text-xs text-muted-foreground">
                        I&apos;m already in your terminal!
                    </span>
                    <button
                        className="text-muted-foreground"
                        onClick={() => setVisible(false)}
                    >
                        <X size={16} />
                    </button>
                </div>

                <div className="flex items-center gap-2 rounded bg-background/80 border border-input/70 px-3 py-2 font-mono text-xs">
                    <span className="truncate select-all">
                        {command || "Detecting OS…"}
                    </span>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 shrink-0"
                        onClick={() => {
                            if (!command) return;
                            navigator.clipboard.writeText(command);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                        }}
                    >
                        {copied ? (
                            <Check className="h-4 w-4 text-emerald-500" />
                        ) : (
                            <Copy className="h-4 w-4" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Terminal FAB */}
            <Button
                variant="outline"
                size="icon"
                onClick={() => setVisible((v) => !v)}
            >
                <Terminal />
            </Button>
        </div>
    );
}

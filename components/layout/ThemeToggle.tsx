"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            title="Change website theme"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-yellow-300 dark:hover:bg-white/10 cursor-pointer"
        >
            <Sun
                size={19}
                className="hidden dark:block"
                aria-hidden="true"
            />
            <Moon
                size={19}
                className="block dark:hidden"
                aria-hidden="true"
            />
            </button>
    );
}
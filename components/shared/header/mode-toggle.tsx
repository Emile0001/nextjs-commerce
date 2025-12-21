"use client";

import * as React from "react";
import { Sun, Moon, SunMoon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

/**
 * Prevent hydration mismatch
 */
function useMounted() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}

export default function ModeToggle() {
    const mounted = useMounted();
    const { theme, resolvedTheme, setTheme } = useTheme();

    if (!mounted) return null;

    const Icon =
        theme === "system" ? SunMoon : resolvedTheme === "dark" ? Moon : Sun;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Toggle theme"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={theme + resolvedTheme}
                            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className="flex"
                        >
                            <Icon className="h-5 w-5" />
                        </motion.span>
                    </AnimatePresence>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                    <DropdownMenuRadioItem value="system">
                        System
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="light">
                        Light
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dark">
                        Dark
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

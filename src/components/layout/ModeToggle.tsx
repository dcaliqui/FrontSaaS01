"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useMessages } from "@/i18n/messages";

export function ModeToggle() {
  const { t } = useMessages();
  const { setTheme, theme } = useTheme();
  const [isActive, setIsActive] = React.useState(theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button
          variant="outline"
          size="icon"
          className="dark:border-white/15 dark:hover:border-white/25 dark:hover:bg-white/8 dark:hover:text-amber-200"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("header.theme")}</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={isActive} onValueChange={setIsActive}>
            <DropdownMenuRadioItem
              value="light"
              onClick={() => setTheme("light")}
              className="cursor-pointer dark:hover:text-slate-400 dark:hover:border-white/25 dark:hover:bg-white/8"
            >
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="dark"
              onClick={() => setTheme("dark")}
              className="cursor-pointer dark:hover:text-slate-400 dark:hover:border-white/25 dark:hover:bg-white/8"
            >
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              value="system"
              onClick={() => setTheme("system")}
              className="cursor-pointer dark:hover:text-slate-400 dark:hover:border-white/25 dark:hover:bg-white/8"
            >
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

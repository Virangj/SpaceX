"use client";
import React, { useState } from "react";
import { cn } from "@/app/lib/utils";
import {  Menu, MenuItem } from "./ui/navbar-menu";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-16" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Timeline"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Upcoming Events"></MenuItem>
      </Menu>
    </div>
  );
}

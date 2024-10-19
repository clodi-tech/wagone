"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Mail, Menu } from "lucide-react";

const Logo = () => (
  <Link href="/">
    <div className="flex items-center space-x-2">
      <Image
        src="/wagone.webp"
        alt="Wagone"
        width={120}
        height={120}
        className="w-12 h-12 sm:w-16 sm:h-16"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-primary-foreground">
          WAGONE
        </h1>
        <p className="text-xs text-primary-foreground text">[wah-gone]</p>
      </div>
    </div>
  </Link>
);

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-primary-foreground hover:text-primary-foreground/80"
  >
    {children}
  </Link>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#5f8d4e] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/">Itineraries</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
        <div className="hidden md:block">
          <Button
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Mail className="mr-2 h-4 w-4" />
            Newsletter
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-[#5f8d4e] text-primary-foreground"
          >
            <nav className="flex flex-col space-y-4 mt-8">
              <NavLink href="/itineraries">Itineraries</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/about">About</NavLink>
              <Button
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
              >
                <Mail className="mr-2 h-4 w-4" />
                Newsletter
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

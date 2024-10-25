"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Mail, Menu } from "lucide-react";

const Logo = () => (
  <Link href="/">
    <div className="flex items-center space-x-2 text-accent-foreground ml-12">
      <Image
        src="/wagone.webp"
        alt="Wagone"
        width={120}
        height={120}
        className="w-12 h-12 sm:w-16 sm:h-16"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-bold">WAGONE</h1>
        <p className="text-xs text">[wah-gone]</p>
      </div>
    </div>
  </Link>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-left p-4 bg-primary z-50">
      {" "}
      {/* Added fixed, top-0, left-0, w-full, and z-50 */}
      <Logo />
      <nav className="hidden md:flex space-x-6 text-accent-foreground ml-6">
        <Link href="/">Itineraries</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className="hidden md:block ml-auto">
        {" "}
        {/* Added ml-auto to push it to the right */}
        <Link href="#newsletter-form">
          <Button className="bg-muted hover:bg-accent hover:text-white text-black mr-8">
            <Mail className="mr-2 h-4 w-4" />
            Newsletter
          </Button>
        </Link>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <nav className="flex flex-col space-y-4 mt-8">
            <Link href="/itineraries">Itineraries</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="#newsletter-form">
              <Button className="hover:bg-secondary text-white">
                <Mail className="mr-2 h-4 w-4" />
                Newsletter
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

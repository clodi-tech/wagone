"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Mail, Menu } from "lucide-react";
import { newsletterSignup } from "@/lib/actions";

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
        <h1 className="text-xl sm:text-2xl font-bold">WAGONE</h1>
        <p className="text-xs text">[wah-gone]</p>
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
}) => <Link href={href}>{children}</Link>;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4">
      <Logo />
      <nav className="hidden md:flex space-x-6">
        <NavLink href="/">Itineraries</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/about">About</NavLink>
      </nav>
      <div className="hidden md:block">
        <form action={newsletterSignup}>
          <Button type="submit">
            <Mail className="mr-2 h-4 w-4" />
            Newsletter
          </Button>
        </form>
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
            <NavLink href="/itineraries">Itineraries</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Newsletter
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

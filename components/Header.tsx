import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Digital Sewa home">
          <Image src="/digital-sewa-logo.svg" alt="Digital Sewa logo" width={36} height={36} priority />
          <span className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-900">Digital Sewa</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-900">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#team" className="hover:underline">Team</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

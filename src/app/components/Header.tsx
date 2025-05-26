"use client";

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={`flex justify-between sticky top-0 z-50 bg-white ${pathname === "/" ? "" : "shadow-md"} py-6 px-5 md:px-8 lg:px-14`}>
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="AutoGATA logo"
                    width={100}
                    height={100}
                />
            </Link>
            <nav className="flex gap-4 *:hover:text-accent *:cursor-pointer *:transition-colors *:duration-300 *:ease-in-out *:font-medium">
                <Link href="/contract" className={pathname === "/contract" ? "btn active" : ""}>Contract auto</Link>
                <Link href="/verificare-numar" className={pathname === "/verificare-numar" ? "btn active" : ""}>Verificare număr</Link>
            </nav>
        </header>
    );
}

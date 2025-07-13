"use client"

import Image from 'next/image'
import Link from 'next/link';
import Button from './Button';

const Footer = () => {

    return (
        <footer className="flex flex-col gap-8 justify-center items-center max-h-[300px] bg-zinc-50 px-5 md:px-8 lg:px-14 py-20 border-t border-t-custom">
            <div className="text-center">
                <Link href="/">
                    <Image
                        className="mx-auto"
                        src="/logo.png"
                        alt="AutoGATA logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <p>© 2025 AutoGATA.com. Actele auto, gata în câțiva pași</p>
                <p>Toate drepturile rezervate.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:justify-center text-center self-stretch basis-full">

                <Link href="/" className="hover:text-secondary">Termeni și condiții</Link>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@autogata.com&su=AutoGATA%20Support&body=Hello%2C%20I%20have%20a%20question..."
                    className="hover:text-secondary"
                >
                    Contactează-ne
                </a>

            </div>
        </footer>
    );
};

export default Footer;
"use client"

import Image from 'next/image'
import Link from 'next/link';
import Button from './Button';

const Footer = () => {

    return (
        <footer className="flex flex-col gap-8 md:flex-row md:gap-56 justify-center items-center bg-white px-5 md:px-8 lg:px-14 py-20 border-t border-t-custom">
            <div className="text-center md:text-left">
                <Link href="/">
                    <Image
                        className="mx-auto md:mx-0"
                        src="/logo.png"
                        alt="AutoGATA logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <p>© 2025 AutoGATA.com. Actele auto, gata în câțiva pași</p>
                <p>Toate drepturile rezervate.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center self-stretch md:border-b-2 md:border-secondary basis-full">

                <div className="flex flex-col text-center">
                    <Link href="/">Termeni și condiții</Link>
                    <Link href="/">Politica de confidențialitate</Link>
                </div>

                <div className="flex flex-col text-center">
                    <Link href="/">Politica cookie</Link>
                    <Link href="/">Cum funcționează</Link>
                </div>

                <Button
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=support@autogata.com&su=AutoGATA%20Support&body=Hello%2C%20I%20have%20a%20question..."
                    label="Contact Us"
                    className="mx-auto md:ml-auto md:mr-0"
                />

            </div>
        </footer>
    );
};

export default Footer;
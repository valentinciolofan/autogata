"use client"

import Link from 'next/link';

const Footer = () => {

    return (
        <footer className="bg-white px-5 md:px-8 lg:px-14 py-20 border-t border-t-custom">
            <div className="">
                <h3>Informații legale</h3>

                <div><Link href="/">Termeni și condiții</Link></div>
                <div><Link href="/">Politica de confidențialitate</Link></div>
                <div><Link href="/">Politica cookie</Link></div>
            </div>
            <p>© 2025 AutoGATA.com. Toate drepturile rezervate.</p>

        </footer>
    );
};

export default Footer;
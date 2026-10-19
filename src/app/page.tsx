import Image from "next/image";
import Button from "@/app/components/Button";

export default function Home() {
  return (
    <section className="flex justify-center align-middle min-h-screen pl-5 md:pl-8 lg:pl-14">
      <div className="flex flex-col justify-center items-center gap-10 md:items-start xl:mr-48 2xl:mr-84">
        <h1 className="text-5xl font-bold text-center sm:px-10 md:text-left md:px-0">Actele auto, gata în câțiva pași</h1>

        <ul className="flex flex-col px-10 md:px-0 gap-9">
          <li className="flex gap-4">
            <span className="my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36"><path fill="#333333" d="M34.459 1.375a3 3 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a3 3 0 0 0 4.15-.884L35.343 5.524a3 3 0 0 0-.884-4.149" /></svg>
            </span>
            Contract de vânzare-cumpărare rapid.
          </li>

          <li className="flex gap-4">
            <span className="my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36"><path fill="#333333" d="M34.459 1.375a3 3 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a3 3 0 0 0 4.15-.884L35.343 5.524a3 3 0 0 0-.884-4.149" /></svg>
            </span>
            Verificare disponbilitate număr înmatriculare
          </li>

          <li className="flex gap-4">
            <span className="my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36"><path fill="#333333" d="M34.459 1.375a3 3 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a3 3 0 0 0 4.15-.884L35.343 5.524a3 3 0 0 0-.884-4.149" /></svg>
            </span>
            Fără stres. Fără drumuri inutile.
          </li>

          <li className="flex gap-4">
            <span className="my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36"><path fill="#333333" d="M34.459 1.375a3 3 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a3 3 0 0 0 4.15-.884L35.343 5.524a3 3 0 0 0-.884-4.149" /></svg>
            </span>
            Rapid și corect
          </li>

          <li className="flex gap-4">
            <span className="my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36"><path fill="#333333" d="M34.459 1.375a3 3 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a3 3 0 0 0 4.15-.884L35.343 5.524a3 3 0 0 0-.884-4.149" /></svg>
            </span>
            Totul online sau în câteva minute
          </li>

          <li className="flex gap-4">
            <span className="my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 36 36"><path fill="#333333" d="M34.459 1.375a3 3 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a3 3 0 0 0 4.15-.884L35.343 5.524a3 3 0 0 0-.884-4.149" /></svg>
            </span>
            Suport prietenos, mereu la dispoziție
          </li>

        </ul>

        <Button label={"Începe acum"} href={"/contract"} />
      </div>


      <div className="hidden md:block h-auto relative w-full grow max-w-[850px]">
        {/* Gradient compact, în spatele ilustrației */}
        <div
          className="
            pointer-events-none
            absolute
            top-[12%]
            left-[12%]
            z-0
            h-[75%]
            w-[85%]
            rounded-full
            bg-[radial-gradient(ellipse_at_65%_20%,rgba(93,164,245,0.22),transparent_55%),radial-gradient(ellipse_at_95%_55%,rgba(185,148,235,0.20),transparent_55%),radial-gradient(ellipse_at_35%_85%,rgba(104,220,239,0.20),transparent_60%)]
            blur-2xl
          "
        />
        <Image
          src="/hero-illustration.svg"
          alt="AutoGATA Landing Page Illustration"
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
  );
}

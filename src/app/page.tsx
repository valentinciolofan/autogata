import Image from "next/image";
import Button from "@/app/components/Button";

export default function Home() {
  return (
    <section className="flex justify-between align-middle min-h-screen px-5 md:pr-0 md:pl-8 lg:pl-14 ">
      <div className="flex flex-col justify-center items-center gap-10 md:items-start">
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

      <div className="hidden md:block relative w-4xl h-auto">
        <Image
          src="/landing-illustration.svg"
          alt="AutoGATA Landing Page Illustration"
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>

    </section>
  );
}

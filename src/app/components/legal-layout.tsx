import Link from 'next/link';
import type { ReactNode } from 'react';
import { legal } from '../../lib/legal-config';

type Section = { id: string; heading: string; content: ReactNode };

export function LegalLayout({ title, subtitle, sections }: { title: string; subtitle: string; sections: Section[] }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-9 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Documente legale</span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
          <p className="mt-3 text-base leading-7 text-slate-600">{subtitle}</p>
          <p className="mt-3 text-xs text-slate-500">Versiunea 1.0 · Actualizat: {legal.updatedAt}</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[245px_minmax(0,1fr)] lg:gap-12">
          <aside className="hidden lg:block">
            <nav aria-label="Cuprins" className="sticky top-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">În această pagină</p>
              <ol className="space-y-3 text-sm">
                {sections.map((s, i) => <li key={s.id}><a className="block leading-5 text-slate-600 transition hover:text-blue-700" href={`#${s.id}`}>{i + 1}. {s.heading}</a></li>)}
              </ol>
            </nav>
          </aside>
          <article className="min-w-0 rounded-2xl border border-slate-200 bg-white px-5 py-7 shadow-sm sm:px-9 sm:py-10">
            <div className="space-y-10 text-sm leading-7 text-slate-700 sm:text-base">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-8">
                  <h2 className="mb-3 text-xl font-bold tracking-tight text-slate-950">{i + 1}. {s.heading}</h2>
                  <div className="space-y-3 [&_a]:font-medium [&_a]:text-blue-700 [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1">{s.content}</div>
                </section>
              ))}
            </div>
            <div className="mt-12 rounded-xl bg-blue-50 p-5 text-sm text-slate-700">
              <p className="font-bold text-blue-900">Ai o întrebare?</p>
              <p className="mt-1">Scrie-ne la <a className="font-semibold text-blue-700 underline" href={`mailto:${legal.email}`}>{legal.email}</a>.</p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

'use client';
import Link from 'next/link';
import { useState } from 'react';

/** Adaugă în ultimul pas al formularului; apelul efectiv de generare rămâne în onGenerate. */
export function ContractLegalConfirmation({ onGenerate, loading = false }: { onGenerate: () => void | Promise<void>, loading?: boolean }) {
  const [dataConfirmed, setDataConfirmed] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  return <section className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
    <div><p className="text-xs font-semibold uppercase tracking-wider text-blue-700">Pasul 4 din 4</p><h2 className="mt-1 text-xl font-bold text-slate-900">Confirmare și acceptare</h2><p className="mt-2 text-sm leading-6 text-slate-600">Verifică datele înainte de generarea contractului.</p></div>
    <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700"><input className="mt-1 h-4 w-4 shrink-0 accent-blue-700" type="checkbox" checked={dataConfirmed} onChange={e=>setDataConfirmed(e.target.checked)}/><span>Confirm că informațiile sunt corecte, am dreptul să le furnizez și voi verifica PDF-ul înainte de utilizare.</span></label>
    <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700"><input className="mt-1 h-4 w-4 shrink-0 accent-blue-700" type="checkbox" checked={acceptedTerms} onChange={e=>setAcceptedTerms(e.target.checked)}/><span>Am citit și accept <Link target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 underline underline-offset-2" href="/termeni-si-conditii">Termenii și condițiile</Link>.</span></label>
    <div className="rounded-xl bg-blue-50 p-4 text-sm leading-6 text-slate-700"><strong className="text-blue-900">Datele tale personale</strong><p className="mt-1">Informațiile sunt utilizate pentru generarea documentului. Consultă <Link target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 underline" href="/politica-de-confidentialitate">Politica de confidențialitate</Link> pentru detalii.</p></div>
    <button type="button" disabled={!dataConfirmed || !acceptedTerms || loading} onClick={()=>{void onGenerate();}} className="flex min-h-12 w-full items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-50">{loading ? 'Se generează…' : 'Generează contractul'}</button>
  </section>;
}

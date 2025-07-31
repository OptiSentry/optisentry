import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script id="ld-org" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"Organization",
          "name":"OptiSentry","url":"https://www.optisentry.com","logo":"https://www.optisentry.com/favicon.svg"
        })}} />
      <section className="container py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Trust-First EvalOps<br/>und AI-Audits für Enterprise
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Wir prüfen Risiken, Compliance und Performance Ihrer KI-Systeme — mit Benchmarks,
            Audit-Trail und klarem ROI.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="btn btn-primary" href="#contact">Get Audit</a>
            <a className="btn btn-ghost" href="#how">See How</a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 text-white/60 md:grid-cols-4">
            <div className="card">SOC2-ready</div>
            <div className="card">ISO 42001-aligned</div>
            <div className="card">Model-Risk Controls</div>
            <div className="card">Audit-Trail</div>
          </div>
        </div>
      </section>

      <section id="benefits" className="container py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Warum OptiSentry?</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="card"><h3 className="text-xl font-medium">Risiken messbar senken</h3>
            <p className="mt-2 text-white/80">Guardrails, Red-Team-Findings und Incident-Szenarien werden quantifiziert und priorisiert.</p></article>
          <article className="card"><h3 className="text-xl font-medium">Compliance nachweisen</h3>
            <p className="mt-2 text-white/80">Evidence-Sammlung (Logs, Datasets, Tests) für Audits & Regulatorik – exportierbar.</p></article>
          <article className="card"><h3 className="text-xl font-medium">Performance steigern</h3>
            <p className="mt-2 text-white/80">Eval-Suites & Benchmarks für Genauigkeit, Robustheit, Kosten & Latenz – CI-integriert.</p></article>
        </div>
      </section>

      <section id="how" className="container py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">So arbeiten wir</h2>
        <ol className="mt-6 grid gap-6 md:grid-cols-3">
          <li className="card"><h3 className="font-medium">1) Scope & Risks</h3>
            <p className="mt-2 text-white/80">System-Mapping, Datenflüsse, Threat-Modeling und KPI-Definition.</p></li>
          <li className="card"><h3 className="font-medium">2) EvalOps</h3>
            <p className="mt-2 text-white/80">Test-Harness, Benchmarks, Red-Team-Prompts, Drift-Monitoring.</p></li>
          <li className="card"><h3 className="font-medium">3) Report & Controls</h3>
            <p className="mt-2 text-white/80">Findings, Remediations, Control-Set & Management-Summary.</p></li>
        </ol>
      </section>

      <section id="contact" className="container py-20">
        <div className="card">
          <h2 className="text-2xl md:text-3xl font-semibold">Lassen Sie uns starten</h2>
          <p className="mt-2 text-white/80">Schreiben Sie uns Ihr Zielsystem & Use-Case. Antwort binnen 24h.</p>
          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <a className="btn btn-primary" href="mailto:info@optisentry.com?subject=Audit%20Request">info@optisentry.com</a>
            <a className="btn btn-ghost" href="https://www.linkedin.com" target="_blank">LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}

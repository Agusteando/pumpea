import Image from 'next/image';

const serviceGroups = [
  { title: 'Website Design + Build', copy: 'Sales pages, landing pages, brand websites, and institutional sites built to convert and communicate clearly.', icon: '/brand/icons/websites.svg' },
  { title: 'Internal Systems', copy: 'Portals, admin panels, workflows, permissions, and audit trails that support real operations.', icon: '/brand/icons/internal-systems.svg' },
  { title: 'Automations', copy: 'Notification routing, approvals, and repetitive task automation across WhatsApp, Telegram, and email.', icon: '/brand/icons/automations.svg' },
  { title: 'Dashboards + BI', copy: 'Operational timelines, status views, lag indicators, and drill-down dashboards for decision-making.', icon: '/brand/icons/dashboards.svg' },
  { title: 'Document/PDF Systems', copy: 'PDF pipelines, rendering services, legal and academic document workflows, and report exports.', icon: '/brand/icons/pdf-tools.svg' },
  { title: 'Integrations', copy: 'Google Workspace, MySQL, authentication, APIs, and notification channels connected into one system.', icon: '/brand/icons/integrations.svg' },
];

const portfolio = [
  ['Pases Digitales','Institutional approval and notification system','Manages labor-incident justification passes with distributed authorization.','No-login approval links, signed JWT routing, WhatsApp authorization links, Telegram audit feed, role-based exceptions, Google identity enrichment, and approval audit trail.'],
  ['CajaSmart','Operational workflow and BI dashboard','Tracks reimbursements and payments across operational stages.','Ops → Fiscal → Tesorería → Pago timeline, plantel swimlanes, lag indicators, month filters, and folio drill-down visibility.'],
  ['Talleres / Husky Pass','Education/admin platform','Supports school administration and role-based portals.','Dashboard, administration modules, teacher and workshop portals, global analytics views, parent attention, and student history flows.'],
  ['SAPF','Parent support workflow system','Organizes attention workflows for parents/families with reporting support.','Next.js + MySQL stack, Google API integration, and ExcelJS-oriented reporting/export processes.'],
  ['Legal PDF Workbench','Legal/document workflow platform','Handles document-heavy legal workflows with assisted processing.','PDF.js processing orientation, OpenAI-assisted workflows, validation with Zod, sanitized content handling, and database-backed document interfaces.'],
  ['PDF Render Service','Document rendering microservice','Provides standalone server-side PDF rendering infrastructure.','Express + Puppeteer service design, CORS support, environment-driven configuration, and independent deployment model.'],
  ['Academic Report Builder','Academic reporting tool','Builds structured visual academic reports and dashboards.','ECharts-powered visualizations, reporting-oriented UI, and organized data presentation for academic contexts.'],
  ['EvaPath','Dashboard / AI-supported reporting system','Combines dashboard operations with authenticated report workflows.','Next.js dashboard architecture, NextAuth, MySQL, OpenAI-assisted processing, Puppeteer reporting, and Hashids-based handling.'],
  ['IECS-IEDIS / Web2','Institutional website modernization','Modernizes a site while preserving original design workflow.','Pixel-preserved legacy HTML structure, MySQL-driven news cards, API endpoints for updates, and refreshable static workflow support.'],
  ['KTKids','Large education/content platform','Large full-stack platform for content, users, and operations.','Auth, Prisma, AWS S3, Stripe, rich editing, drag-and-drop workflows, PDF generation, testing, and complex UI subsystems.'],
];

export default function Home() {
  return (
    <div className="bg-ink text-ivory">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-xl font-bold tracking-[0.18em]">PUMPEA</a>
          <div className="hidden gap-6 text-sm md:flex"><a href="#portfolio">Work</a><a href="#services">Systems</a><a href="#process">Process</a><a href="#portfolio">Portfolio</a><a href="#contact">Contact</a></div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 py-14">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Pumpea Studio</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Websites that sell. Systems that run the business.</h1>
            <p className="mt-6 max-w-xl text-lg text-ivory/80">We design the public face and the private machinery behind it: websites, internal platforms, automations, dashboards, approvals, reporting, and document workflows.</p>
            <div className="mt-8 flex gap-4"><a className="btn-solid" href="#contact">Start a project</a><a className="btn-outline" href="#portfolio">See systems built</a></div>
          </div>
          <Image src="/brand/hero-system.svg" alt="Pumpea branded system illustration with website, workflow pipeline, and dashboards" width={860} height={640} className="w-full" />
        </section>

        <div className="mt-10 grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.15em] md:grid-cols-6"><span>Websites</span><span>Systems</span><span>Automations</span><span>Dashboards</span><span>PDFs</span><span>Operations</span></div>

        <section className="mt-20">
          <h2 className="text-3xl">Most websites look good for a week. Good systems keep working for years.</h2>
        </section>

        <section id="services" className="mt-12 grid gap-5 md:grid-cols-2">
          {serviceGroups.map((s) => <article key={s.title} className="card"><div className='flex items-center gap-3'><Image src={s.icon} alt="" aria-hidden width={32} height={32}/><h3 className="text-xl">{s.title}</h3></div><p className="mt-3 text-ivory/75">{s.copy}</p></article>)}
        </section>

        <section className="mt-20 card">
          <h2 className="text-2xl">Request → Routing → Approval → Notification → Dashboard → Report</h2>
          <p className="mt-3 text-ivory/75">Pumpea builds complete operational flows, not isolated screens.</p>
          <Image src="/brand/workflow-diagram.svg" alt="Workflow routing diagram" width={1200} height={350} className="mt-6 w-full" />
        </section>

        <section id="portfolio" className="mt-20">
          <h2 className="text-3xl">Systems Built</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">{portfolio.map(([n,t,w,f],i)=><article className="card" key={n}><p className='text-xs uppercase tracking-[0.2em] text-accent'>{t}</p><h3 className="mt-2 text-2xl">{n}</h3><p className="mt-3 text-ivory/80">{w}</p><p className="mt-3 text-sm text-ivory/70">{f}</p><Image src={`/brand/motifs/motif-${(i%5)+1}.svg`} alt="" aria-hidden width={260} height={120} className="mt-4"/></article>)}</div>
        </section>

        <section id='process' className="mt-20 card"><h2 className="text-3xl">Discover → Map → Design → Build → Integrate → Launch → Improve</h2><p className="mt-3 text-ivory/75">Useful software first. Sharp design always.</p></section>
        <section className="mt-12 grid gap-4 md:grid-cols-3">{['Website Sprint','System Build','Automation Layer','Dashboard / BI View','PDF / Document System','Existing System Rescue'].map((e)=><article key={e} className='card'><h3 className='text-xl'>{e}</h3></article>)}</section>

        <section id='contact' className="mt-20 rounded-2xl border border-accent/30 bg-accent/10 p-8"><h2 className="text-3xl">Bring the messy process. We’ll turn it into a working system.</h2><p className="mt-3 text-ivory/85">From landing pages to approval engines, dashboards, notifications, and PDF/document flows.</p></section>
      </main>
    </div>
  );
}

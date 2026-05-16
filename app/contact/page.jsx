"use client";

import { useMemo, useState } from "react";
import PageHero from "../../components/PageHero";
import WhatsAppCta from "../../components/WhatsAppCta";

const SERVICES = [
  "Sitios web",
  "E-commerce",
  "Bots de WhatsApp",
  "Automatización de procesos",
  "Integraciones",
  "Sistema a medida",
  "Click&Celebrate",
];

const initialState = { name: "", email: "", service: "", message: "" };
const initialErrors = { name: "", email: "", service: "", message: "" };

function validateField(name, value) {
  const trimmed = value.trim();
  switch (name) {
    case "name":
      if (!trimmed) return "El nombre es obligatorio.";
      if (trimmed.length < 2) return "Mínimo 2 caracteres.";
      if (trimmed.length > 50) return "Máximo 50 caracteres.";
      return "";
    case "email":
      if (!trimmed) return "El correo es obligatorio.";
      if (!/^[\w\-.]+@([\w\-]+\.)+[a-zA-Z]{2,9}$/.test(trimmed)) return "Formato de correo inválido.";
      return "";
    case "service":
      if (!trimmed) return "Selecciona un servicio.";
      return "";
    case "message":
      if (!trimmed) return "El mensaje es obligatorio.";
      if (trimmed.length < 10) return "Mínimo 10 caracteres.";
      if (trimmed.length > 1000) return "Máximo 1000 caracteres.";
      return "";
    default:
      return "";
  }
}

async function submitLead(formData) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { status: "success", email: formData.email };
}

export default function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  }

  function validateAll() {
    const nextErrors = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, validateField(key, value)])
    );
    setErrors(nextErrors);
    return Object.values(nextErrors).every((error) => !error);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateAll()) return;
    setSubmitting(true);
    try {
      const response = await submitLead(form);
      setSubmittedEmail(response.email);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setForm(initialState);
    setErrors(initialErrors);
    setSubmitted(false);
    setSubmittedEmail("");
  }

  const errorSummary = useMemo(() => Object.values(errors).filter(Boolean), [errors]);

  return (
    <div>
      <PageHero kicker="Contacto" title="Cuéntanos qué quieres impulsar y armamos el siguiente paso.">
        Mapea tu necesidad con Pumpea: sitio web, automatización, bot, integración, sistema a medida o experiencia para eventos. Respondemos con una ruta clara.
      </PageHero>

      <section className="pumpea-container pb-24">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <aside className="glass-card-strong p-7 md:p-9">
            <span className="section-kicker">Atención directa</span>
            <h2 className="mt-5 font-heading text-3xl font-black text-[#102453]">Respuesta cercana, diagnóstico sin costo.</h2>
            <p className="mt-4 text-lg font-medium leading-relaxed text-slate-600">
              Comparte el contexto de tu negocio y el tipo de solución que buscas. Si el alcance requiere llamada, la agendamos para definir prioridades.
            </p>
            <div className="mt-8 space-y-4">
              <div className="float-card flex gap-4 p-5"><span className="icon-bubble !h-12 !w-12"><i className="fa fa-clock" /></span><p className="font-bold text-slate-600"><b className="block text-[#102453]">Respuesta en 24h</b>Primer contacto rápido para ubicar el proyecto.</p></div>
              <div className="float-card flex gap-4 p-5"><span className="icon-bubble !h-12 !w-12"><i className="fa fa-shield-halved" /></span><p className="font-bold text-slate-600"><b className="block text-[#102453]">Confidencialidad</b>Cuidamos tu idea y tu información desde la primera conversación.</p></div>
              <div className="float-card flex gap-4 p-5"><span className="icon-bubble !h-12 !w-12"><i className="fa fa-route" /></span><p className="font-bold text-slate-600"><b className="block text-[#102453]">Ruta de ejecución</b>Te proponemos un camino por fases, no una lista genérica.</p></div>
            </div>
          </aside>

          <div className="glass-card-strong p-7 md:p-9">
            {submitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <span className="icon-bubble mb-6 !h-16 !w-16"><i className="fa fa-check text-2xl" /></span>
                <h2 className="font-heading text-3xl font-black text-[#102453]">Gracias por tu solicitud.</h2>
                <p className="mt-4 max-w-lg text-lg font-medium leading-relaxed text-slate-600">
                  Te contactaremos pronto al correo <b>{submittedEmail}</b>. Mientras tanto, también puedes escribirnos por WhatsApp si necesitas acelerar el seguimiento.
                </p>
                <button type="button" className="cta-button mt-8" onClick={handleReset}>Enviar otra consulta</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-black text-blue-700">Nombre completo</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} autoComplete="name" className={`input-modern ${errors.name ? "!border-red-400" : ""}`} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                  {errors.name && <p id="name-error" className="mt-2 text-sm font-bold text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-black text-blue-700">Correo electrónico</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} autoComplete="email" className={`input-modern ${errors.email ? "!border-red-400" : ""}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                  {errors.email && <p id="email-error" className="mt-2 text-sm font-bold text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-black text-blue-700">Servicio de interés</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} className={`input-modern ${errors.service ? "!border-red-400" : ""}`} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined}>
                    <option value="">Selecciona una opción</option>
                    {SERVICES.map((service) => <option key={service} value={service}>{service}</option>)}
                  </select>
                  {errors.service && <p id="service-error" className="mt-2 text-sm font-bold text-red-500">{errors.service}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-black text-blue-700">Mensaje o requerimiento</label>
                  <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} className={`input-modern resize-y ${errors.message ? "!border-red-400" : ""}`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
                  {errors.message && <p id="message-error" className="mt-2 text-sm font-bold text-red-500">{errors.message}</p>}
                </div>
                {errorSummary.length > 0 && (
                  <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-600" aria-live="assertive">
                    {errorSummary.map((error) => <div key={error}>{error}</div>)}
                  </div>
                )}
                <button type="submit" className="cta-button" disabled={isSubmitting}>
                  {isSubmitting ? <><i className="fa fa-spinner fa-spin" /> Enviando...</> : <>Enviar mensaje <i className="fa fa-arrow-right" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <WhatsAppCta />
    </div>
  );
}

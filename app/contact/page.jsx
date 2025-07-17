
"use client";
import { useState, useMemo } from "react";
import GlassPanel from "../../components/GlassPanel";
import WhatsAppCta from "../../components/WhatsAppCta";

const SERVICES = [
  "Sitios Web Simples",
  "Sitios de E-commerce",
  "Bots de WhatsApp",
  "Gestión de Redes Sociales",
  "Sistemas Complejos"
];

const initialState = {
  name: "",
  email: "",
  service: "",
  message: ""
};

const INITIAL_ERRORS = {
  name: "",
  email: "",
  service: "",
  message: ""
};

function validateField(name, value) {
  switch (name) {
    case "name":
      if (!value) return "El nombre es obligatorio.";
      if (value.length < 2) return "Mínimo 2 caracteres.";
      if (value.length > 50) return "Máximo 50 caracteres.";
      return "";
    case "email":
      if (!value) return "El correo es obligatorio.";
      // eslint-disable-next-line
      if (!/^[\w\-.]+@([\w\-]+\.)+[a-zA-Z]{2,9}$/.test(value))
        return "Formato de correo inválido.";
      return "";
    case "service":
      if (!value) return "Selecciona un servicio.";
      return "";
    case "message":
      if (!value) return "El mensaje es obligatorio.";
      if (value.length < 10) return "Mínimo 10 caracteres.";
      if (value.length > 1000) return "Máximo 1000 caracteres.";
      return "";
    default:
      return "";
  }
}

async function fakeApiSubmit(formData) {
  // Replace with your own API POST endpoint in production!
  // This just simulates an API call.
  await new Promise((r) => setTimeout(r, 1300));
  return {
    status: "success",
    message: "¡Gracias por tu solicitud! Te contactaremos pronto.",
    email: formData.email
  };
}

export default function ContactPage() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [isSubmitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  // Validate individual field on change/blur
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((errs) => ({ ...errs, [name]: validateField(name, value) }));
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setErrors((errs) => ({ ...errs, [name]: validateField(name, value) }));
  }

  function validateAll() {
    const newErrors = {};
    for (const field of Object.keys(form)) {
      newErrors[field] = validateField(field, form[field]);
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => !err);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateAll()) return;
    setSubmitting(true);
    try {
      const resp = await fakeApiSubmit(form);
      setSubmittedEmail(resp.email);
      setSubmitted(true);
    } catch (err) {
      alert("Error al enviar. Intenta más tarde.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleReset() {
    setForm(initialState);
    setErrors(INITIAL_ERRORS);
    setSubmitted(false);
    setSubmittedEmail("");
  }

  // Accessible error summary for screen readers
  const errorSummary = useMemo(
    () => Object.entries(errors).filter(([k, v]) => v).map(([k, v]) => v),
    [errors]
  );

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <GlassPanel>
        <h1 className="text-2xl md:text-3xl font-heading font-extrabold mb-2 text-gradient-main text-center">
          Contáctanos
        </h1>
        <p className="mb-7 text-accent text-center">
          ¿Listo para dar el siguiente paso? <b>PUMPEA</b> responde tus dudas y te ayuda a cotizar – sin compromiso.
        </p>
        {submitted ? (
          <div className="flex flex-col items-center gap-2 mb-4 py-10 min-h-[290px] justify-center">
            <h3 className="font-heading text-2xl text-primary mb-2 text-center">¡Gracias por tu solicitud!</h3>
            <p className="text-md text-neutral-700 text-center">
              Te contactaremos pronto al correo: <b>{submittedEmail}</b>
            </p>
            <button
              className="mt-4 cta-button"
              onClick={handleReset}
            >
              Enviar otra consulta
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="font-bold text-sm text-primary block mb-1">
                Nombre Completo:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength={2}
                maxLength={50}
                autoComplete="name"
                className={`w-full rounded-md px-3 py-2 border ${errors.name ? "border-red-400" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-primary`}
                disabled={isSubmitting}
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <div className="text-red-500 text-xs mt-1" id="name-error">{errors.name}</div>
              )}
            </div>
            <div>
              <label htmlFor="email" className="font-bold text-sm text-primary block mb-1">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className={`w-full rounded-md px-3 py-2 border ${errors.email ? "border-red-400" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-primary`}
                disabled={isSubmitting}
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <div className="text-red-500 text-xs mt-1" id="email-error">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="service" className="font-bold text-sm text-primary block mb-1">
                Servicio de Interés:
              </label>
              <select
                id="service"
                name="service"
                required
                className={`w-full rounded-md px-3 py-2 border ${errors.service ? "border-red-400" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-primary bg-white`}
                disabled={isSubmitting}
                value={form.service}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="">Seleccione un servicio</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && (
                <div className="text-red-500 text-xs mt-1" id="service-error">{errors.service}</div>
              )}
            </div>
            <div>
              <label htmlFor="message" className="font-bold text-sm text-primary block mb-1">
                Mensaje o Requerimiento:
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={1000}
                className={`w-full rounded-md px-3 py-2 border ${errors.message ? "border-red-400" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-primary min-h-[108px] resize-vertical`}
                disabled={isSubmitting}
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <div className="text-red-500 text-xs mt-1" id="message-error">{errors.message}</div>
              )}
            </div>
            <button
              type="submit"
              className="cta-button flex items-center gap-2 text-base min-w-[170px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin" /> Enviando...
                </>
              ) : (
                <>Enviar Mensaje</>
              )}
            </button>
            {errorSummary.length > 0 && (
              <div className="text-red-500 text-sm mt-3" aria-live="assertive">
                {errorSummary.map((err, i) => (
                  <div key={i}>{err}</div>
                ))}
              </div>
            )}
          </form>
        )}
      </GlassPanel>
      <div className="mt-5 flex flex-col gap-2 items-center">
        <span className="text-accent/80 text-sm text-center">También puedes contactarnos o cotizar vía WhatsApp:</span>
        <WhatsAppCta className="static relative right-0 bottom-0 shadow-lg" text="WhatsApp PUMPEA" />
      </div>
    </div>
  );
}

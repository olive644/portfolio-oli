import { useState, type FormEvent } from "react";
import { ArrowUpRight, Loader2, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
const schema = z.object({
  name: z.string().trim().min(1, "Informe seu nome.").max(100),
  email: z.string().trim().email("Informe um email válido.").max(255),
  message: z.string().trim().min(1, "Conte o que você tem em mente.").max(2000),
});
type Form = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Form, string>>;
const emptyForm: Form = { name: "", email: "", message: "" };
const WEB3FORMS_ACCESS_KEY = "a9c94130-49c6-4b31-a349-51bb74f75cce";

export function CinematicContactFooter() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const setValue = (key: keyof Form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Form;
        next[key] ??= issue.message;
      });
      setErrors(next);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Contato do portfólio de ${result.data.name}`,
          from_name: result.data.name,
          ...result.data,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error();
      toast.success("Mensagem enviada.", {
        description: "Obrigado pelo contato. Retorno em breve.",
      });
      setForm(emptyForm);
    } catch {
      toast.error("Não foi possível enviar.", {
        description: "Tente novamente ou use o email no rodapé.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contato" className="contact-card">
      <div className="contact-intro">
        <span className="contact-kicker">CONTATO</span>
        <h2>
          Uma ideia?
          <br />
          Vamos conversar<span>✳</span>
        </h2>
        <p>Conte o que você tem em mente. Vamos dar o próximo passo.</p>
        <a href="mailto:oliverteixeira122020@gmail.com" className="contact-email">
          <Mail size={18} />
          oliverteixeira122020@gmail.com
        </a>
      </div>
      <form onSubmit={submit} noValidate className="contact-form">
        {(
          [
            {
              key: "name",
              label: "Seu nome",
              type: "text",
              placeholder: "Como posso te chamar?",
              autoComplete: "name",
            },
            {
              key: "email",
              label: "Seu email",
              type: "email",
              placeholder: "voce@email.com",
              autoComplete: "email",
            },
            {
              key: "message",
              label: "Sua ideia",
              type: "text",
              placeholder: "Me conte sobre seu projeto",
              autoComplete: "off",
            },
          ] as const
        ).map((field) => (
          <div key={field.key}>
            <label htmlFor={`contact-${field.key}`}>{field.label}</label>
            {field.key === "message" ? (
              <textarea
                id={`contact-${field.key}`}
                value={form[field.key]}
                onChange={(event) => setValue(field.key, event.target.value)}
                placeholder={field.placeholder}
                rows={3}
                maxLength={2000}
                aria-invalid={!!errors[field.key]}
                aria-describedby={errors[field.key] ? `error-${field.key}` : undefined}
              />
            ) : (
              <input
                id={`contact-${field.key}`}
                type={field.type}
                autoComplete={field.autoComplete}
                maxLength={field.key === "name" ? 100 : 255}
                value={form[field.key]}
                onChange={(event) => setValue(field.key, event.target.value)}
                placeholder={field.placeholder}
                aria-invalid={!!errors[field.key]}
                aria-describedby={errors[field.key] ? `error-${field.key}` : undefined}
              />
            )}
            {errors[field.key] && (
              <p id={`error-${field.key}`} className="contact-error" role="alert">
                {errors[field.key]}
              </p>
            )}
          </div>
        ))}
        <button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar mensagem
              <Send size={18} />
            </>
          )}
        </button>
      </form>
      <div className="contact-bottom">
        <p>© {new Date().getFullYear()} Oliver Teixeira</p>
        <a href="#inicio">
          Voltar ao início
          <ArrowUpRight size={16} />
        </a>
        <span>oli.</span>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Mail, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

// Web3Forms public access key (safe to expose in the frontend).
// Get yours for free at https://web3forms.com by entering oliverteixeira122020@gmail.com.
const WEB3FORMS_ACCESS_KEY = "a9c94130-49c6-4b31-a349-51bb74f75cce";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Informe seu nome." })
    .max(100, { message: "Nome muito longo." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Informe seu email." })
    .email({ message: "Email em formato inválido." })
    .max(255, { message: "Email muito longo." }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Escreva uma mensagem." })
    .max(2000, { message: "Mensagem muito longa." }),
});

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const emptyForm = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Contato do portfólio de ${result.data.name}`,
          from_name: result.data.name,
          name: result.data.name,
          email: result.data.email,
          message: result.data.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Mensagem enviada!", {
          description: "Obrigado pelo contato. Retorno em breve.",
        });
        setForm(emptyForm);
      } else {
        throw new Error(data.message || "Falha no envio");
      }
    } catch {
      toast.error("Não foi possível enviar", {
        description: "Tente novamente ou me chame direto pelo email.",
      });
    } finally {
      setLoading(false);
    }
  };

  const field =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";

  const setValue = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Contato
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Bora construir <span className="text-gradient">algo juntos?</span>
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Tem uma ideia, um projeto ou só quer trocar sobre código, jogos e música? Me chama.
            </p>

            <a
              href="mailto:oliverteixeira122020@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-5 py-4 transition-all duration-300 hover:border-foreground/60"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground">
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="block text-sm font-medium text-foreground">
                  oliverteixeira122020@gmail.com
                </span>
              </span>
            </a>

            <div className="mt-8">
              <p className="mb-3 text-sm text-muted-foreground">Ou me encontre nas redes</p>
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card/60 p-6 shadow-card sm:p-8"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Nome
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => setValue("name", e.target.value)}
                    placeholder="Seu nome"
                    className={field}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setValue("email", e.target.value)}
                    placeholder="voce@email.com"
                    className={field}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setValue("message", e.target.value)}
                    placeholder="Conta sua ideia..."
                    className={`${field} resize-none`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-violet disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    Enviando...
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

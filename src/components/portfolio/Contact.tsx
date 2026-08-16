import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { TextReveal } from "@/components/ui/cascade-text";
import { Reveal } from "./Reveal";

const WEB3FORMS_ACCESS_KEY = "a9c94130-49c6-4b31-a349-51bb74f75cce";
const schema = z.object({ name: z.string().trim().min(1, "Informe seu nome.").max(100), email: z.string().trim().email("Email em formato inválido.").max(255), message: z.string().trim().min(1, "Escreva uma mensagem.").max(2000) });
type Form = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Form, string>>;
const emptyForm: Form = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const setValue = (key: keyof Form, value: string) => { setForm((current) => ({ ...current, [key]: value })); setErrors((current) => ({ ...current, [key]: undefined })); };
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) { const next: Errors = {}; result.error.issues.forEach((issue) => { const key = issue.path[0] as keyof Form; next[key] ??= issue.message; }); setErrors(next); return; }
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject: `Contato do portfólio de ${result.data.name}`, from_name: result.data.name, ...result.data }) });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error();
      toast.success("Mensagem enviada.", { description: "Obrigado pelo contato. Retorno em breve." }); setForm(emptyForm);
    } catch { toast.error("Não foi possível enviar.", { description: "Tente novamente ou use o email ao lado." }); } finally { setLoading(false); }
  };
  const field = "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-accent";
  return (
    <section id="contato" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">05 / Contato</p>
            <div className="mt-6"><TextReveal text="Entre em contato" as="h2" fontSize="clamp(3.8rem, 7.5vw, 7rem)" staggerDelay={28} duration={350} color="#f4f4f1" hoverColor="#777" style={{ fontFamily: "var(--font-display)", fontWeight: 400, textTransform: "none", letterSpacing: "-0.045em" }} /></div>
            <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">Se quiser falar sobre um projeto, código, jogos ou música, escreva por aqui.</p>
            <a href="mailto:oliverteixeira122020@gmail.com" className="mt-8 inline-flex items-center gap-2 text-sm underline decoration-accent decoration-2 underline-offset-8">oliverteixeira122020@gmail.com <ArrowUpRight size={16} /></a>
          </div>
          <form onSubmit={submit} noValidate className="border-t border-border pt-3">
            {(["name", "email"] as const).map((key) => <label key={key} className="block border-b border-border py-5"><span className="font-mono text-xs uppercase text-muted-foreground">{key === "name" ? "Nome" : "Email"}</span><input type={key === "email" ? "email" : "text"} value={form[key]} onChange={(event) => setValue(key, event.target.value)} placeholder={key === "name" ? "Como você se chama?" : "voce@email.com"} className={field} />{errors[key] && <span className="mt-2 block text-xs text-destructive">{errors[key]}</span>}</label>)}
            <label className="block border-b border-border py-5"><span className="font-mono text-xs uppercase text-muted-foreground">Mensagem</span><textarea rows={5} value={form.message} onChange={(event) => setValue("message", event.target.value)} placeholder="Conte um pouco sobre sua ideia" className={`${field} resize-none`} />{errors.message && <span className="mt-2 block text-xs text-destructive">{errors.message}</span>}</label>
            <button type="submit" disabled={loading} className="mt-8 inline-flex items-center gap-3 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60">{loading ? <><Loader2 size={16} className="animate-spin" /> Enviando</> : <>Enviar mensagem <ArrowUpRight size={16} /></>}</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

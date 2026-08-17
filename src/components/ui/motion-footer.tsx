"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUp, Loader2, Mail, Send } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";
import { z } from "zod";
import { TextReveal } from "@/components/ui/cascade-text";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const STYLES = `
.cinematic-contact { font-family: var(--font-sans); --glass: rgba(255,255,255,.055); --glass-border: rgba(255,255,255,.14); }
.contact-grid { background-size: 56px 56px; background-image: linear-gradient(to right,rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.035) 1px,transparent 1px); mask-image:linear-gradient(to bottom,transparent,#000 25%,#000 80%,transparent); }
.contact-aurora { background:radial-gradient(circle at 50% 45%,rgba(255,255,255,.13),rgba(255,255,255,.025) 42%,transparent 72%); animation:contact-breathe 8s ease-in-out infinite alternate; }
.contact-giant { font:900 clamp(10rem,25vw,28rem)/.72 var(--font-sans); letter-spacing:-.08em; color:transparent; -webkit-text-stroke:1px rgba(255,255,255,.055); background:linear-gradient(180deg,rgba(255,255,255,.09),transparent 68%); -webkit-background-clip:text; background-clip:text; }
.contact-glass { background:linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.018)); border:1px solid var(--glass-border); box-shadow:0 18px 45px -24px #000,inset 0 1px 1px rgba(255,255,255,.13); backdrop-filter:blur(16px); }
.contact-marquee { animation:contact-marquee 36s linear infinite; }
@keyframes contact-breathe { from { transform:translate(-50%,-50%) scale(.92); opacity:.55 } to { transform:translate(-50%,-50%) scale(1.08); opacity:1 } }
@keyframes contact-marquee { to { transform:translateX(-50%) } }
@media (prefers-reduced-motion:reduce) { .contact-aurora,.contact-marquee { animation:none } }
`;

const schema = z.object({
  name: z.string().trim().min(1, "Informe seu nome.").max(100),
  email: z.string().trim().email("Informe um email válido.").max(255),
  message: z.string().trim().min(1, "Conte o que você tem em mente.").max(2000),
});
type Form = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Form, string>>;
const emptyForm: Form = { name: "", email: "", message: "" };
const WEB3FORMS_ACCESS_KEY = "a9c94130-49c6-4b31-a349-51bb74f75cce";

function MarqueeItem() {
  return <div className="flex items-center gap-10 px-5"><span>DESENVOLVIMENTO WEB</span><span>✦</span><span>UI / UX</span><span>✦</span><span>JOGOS</span><span>✦</span><span>FRONT-END</span><span>✦</span><span>DISPONÍVEL PARA PROJETOS</span><span>✦</span></div>;
}

function MagneticButton({ children, className, type = "button", onClick, disabled }: { children: ReactNode; className?: string; type?: "button" | "submit"; onClick?: () => void; disabled?: boolean }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(pointer: coarse)").matches) return;
    const move = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      gsap.to(element, { x: (event.clientX - rect.left - rect.width / 2) * 0.28, y: (event.clientY - rect.top - rect.height / 2) * 0.28, rotationX: -(event.clientY - rect.top - rect.height / 2) * 0.12, rotationY: (event.clientX - rect.left - rect.width / 2) * 0.12, scale: 1.04, duration: .35, ease: "power2.out" });
    };
    const leave = () => gsap.to(element, { x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1, duration: .9, ease: "elastic.out(1,.35)" });
    element.addEventListener("mousemove", move);
    element.addEventListener("mouseleave", leave);
    return () => { element.removeEventListener("mousemove", move); element.removeEventListener("mouseleave", leave); };
  }, []);
  return <button ref={ref} type={type} onClick={onClick} disabled={disabled} className={cn("contact-glass cursor-pointer disabled:cursor-not-allowed disabled:opacity-50", className)}>{children}</button>;
}

export function CinematicContactFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const context = gsap.context(() => {
      gsap.fromTo(giantRef.current, { y: "16vh", scale: .82, opacity: 0 }, { y: "0vh", scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: wrapper, start: "top 90%", end: "bottom bottom", scrub: 1 } });
      gsap.fromTo(contentRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, ease: "power3.out", scrollTrigger: { trigger: wrapper, start: "top 64%", end: "top 18%", scrub: 1 } });
    }, wrapper);
    return () => context.revert();
  }, []);

  const setValue = (key: keyof Form, value: string) => { setForm((current) => ({ ...current, [key]: value })); setErrors((current) => ({ ...current, [key]: undefined })); };
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((issue) => { const key = issue.path[0] as keyof Form; next[key] ??= issue.message; });
      setErrors(next); return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, subject: `Contato do portfólio de ${result.data.name}`, from_name: result.data.name, ...result.data }) });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error();
      toast.success("Mensagem enviada.", { description: "Obrigado pelo contato. Retorno em breve." });
      setForm(emptyForm);
    } catch { toast.error("Não foi possível enviar.", { description: "Tente novamente ou use o email no rodapé." }); }
    finally { setLoading(false); }
  };

  const inputClass = "min-w-0 flex-1 border-0 border-b border-white/35 bg-transparent px-1 py-1 text-foreground outline-none transition-colors placeholder:text-white/25 focus:border-white sm:min-w-48";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div id="contato" ref={wrapperRef} className="relative h-[980px] w-full sm:h-screen" style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}>
        <footer className="cinematic-contact absolute inset-0 flex h-full w-full flex-col overflow-hidden bg-background text-foreground sm:fixed sm:h-[100svh]">
          <div className="contact-aurora pointer-events-none absolute left-1/2 top-1/2 z-0 h-[62vh] w-[84vw] rounded-[50%] blur-[90px]" />
          <div className="contact-grid pointer-events-none absolute inset-0 z-0" />
          <div ref={giantRef} className="contact-giant pointer-events-none absolute -bottom-[2vh] left-1/2 z-0 -translate-x-1/2 whitespace-nowrap select-none">OLIVER</div>

          <div className="absolute left-0 top-10 z-20 w-full -rotate-2 scale-110 overflow-hidden border-y border-border/60 bg-background/70 py-3 backdrop-blur-md sm:top-12 sm:py-4">
            <div className="contact-marquee flex w-max text-[10px] font-extrabold tracking-[.28em] text-muted-foreground sm:text-xs"><MarqueeItem /><MarqueeItem /></div>
          </div>

          <div ref={contentRef} className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-start px-5 pb-10 pt-28 sm:justify-center sm:px-8 sm:pb-20 sm:pt-32">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[.24em] text-muted-foreground">03 / Contato</p>
            <TextReveal text="Vamos conversar" as="h2" fontSize="clamp(2.35rem,11.8vw,7.4rem)" staggerDelay={24} duration={340} color="#f4f4f1" hoverColor="#777" className="max-w-full font-sans" />

            <form onSubmit={submit} noValidate className="contact-glass mt-7 w-full p-5 sm:mt-9 sm:p-8">
              <div className="flex flex-col gap-5 text-xl font-medium leading-relaxed sm:text-3xl lg:text-4xl">
                <label className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline">Oi, eu sou <input value={form.name} onChange={(event) => setValue("name", event.target.value)} placeholder="seu nome" className={inputClass} />.</label>
                {errors.name && <p className="-mt-4 text-xs font-normal text-muted-foreground">{errors.name}</p>}
                <label className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline">Meu email é <input type="email" value={form.email} onChange={(event) => setValue("email", event.target.value)} placeholder="voce@email.com" className={inputClass} />.</label>
                {errors.email && <p className="-mt-4 text-xs font-normal text-muted-foreground">{errors.email}</p>}
                <label className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline">Quero falar sobre <input value={form.message} onChange={(event) => setValue("message", event.target.value)} placeholder="sua ideia ou projeto" className={inputClass} />.</label>
                {errors.message && <p className="-mt-4 text-xs font-normal text-muted-foreground">{errors.message}</p>}
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <a href="mailto:oliverteixeira122020@gmail.com" className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"><Mail size={15} /> oliverteixeira122020@gmail.com</a>
                <MagneticButton type="submit" disabled={loading} className="flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold">{loading ? <><Loader2 size={16} className="animate-spin" /> Enviando</> : <>Enviar mensagem <Send size={15} /></>}</MagneticButton>
              </div>
            </form>
          </div>

          <div className="relative z-20 flex w-full flex-col items-center justify-between gap-3 px-5 pb-5 text-center sm:flex-row sm:px-8 sm:pb-7 sm:text-left">
            <p className="font-mono text-[9px] uppercase tracking-[.16em] text-muted-foreground">© {new Date().getFullYear()} Oliver Teixeira. Todos os direitos reservados.</p>
            <p className="font-mono text-[9px] uppercase tracking-[.16em] text-muted-foreground">Idealizado e desenvolvido por Oliver</p>
            <MagneticButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground hover:text-foreground" ><ArrowUp size={16} /></MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}

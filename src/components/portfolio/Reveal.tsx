import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps { children: ReactNode; as?: ElementType; className?: string; delay?: number }

export function Reveal({ children, as, className, delay = 0 }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  return <Tag className={cn(className)} data-reveal data-delay={delay || undefined}>{children}</Tag>;
}

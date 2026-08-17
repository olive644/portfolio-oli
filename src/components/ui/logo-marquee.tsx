"use client";

import React, { memo, useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "motion/react";
import useMeasure from "react-use-measure";
import { cn } from "@/lib/utils";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

const InfiniteSlider = memo(function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const size = direction === "horizontal" ? width : height;
    if (!size) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;
    const controls = isTransitioning
      ? animate(translation, [translation.get(), to], {
          ease: "linear",
          duration: currentDuration * Math.abs((translation.get() - to) / contentSize),
          onComplete: () => {
            setIsTransitioning(false);
            setKey((value) => value + 1);
          },
        })
      : animate(translation, [from, to], {
          ease: "linear",
          duration: currentDuration,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
          onRepeat: () => translation.set(from),
        });

    return controls.stop;
  }, [key, translation, currentDuration, width, height, gap, isTransitioning, direction, reverse]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
});

const LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {
  return (
    <div className="group flex h-16 shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.07] sm:h-20 sm:gap-4 sm:px-7">
      <img
        alt=""
        aria-hidden="true"
        src={logo.src}
        width={logo.width ?? 32}
        height={logo.height ?? 32}
        loading="lazy"
        className="pointer-events-none h-7 w-7 select-none object-contain grayscale transition duration-300 group-hover:scale-110 group-hover:grayscale-0 sm:h-9 sm:w-9"
      />
      <span className="whitespace-nowrap font-sans text-lg font-semibold tracking-[-0.03em] text-white/65 transition-colors duration-300 group-hover:text-white sm:text-2xl">
        {logo.alt}
      </span>
    </div>
  );
});

export const LogoMarquee = memo(function LogoMarquee({ logos, className }: { logos: Logo[]; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1600px] overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:py-7", className)}>
      <InfiniteSlider gap={14} reverse duration={42} durationOnHover={75}>
        {logos.map((logo) => <LogoImage key={logo.alt} logo={logo} />)}
      </InfiniteSlider>
    </div>
  );
});

LogoMarquee.displayName = "LogoMarquee";
export default LogoMarquee;

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export interface GalleryPhoto {
  id: string | number;
  image: string;
  title?: string;
  href?: string;
  imageFit?: "cover" | "contain";
}

const defaultPhotos: GalleryPhoto[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop" },
  { id: 5, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop" },
];

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  dragHintText?: string;
  className?: string;
}

export function InteractiveFolderGallery({
  photos = defaultPhotos,
  folderName = "Photography.gallery",
  dragHintText = "Drag any photo down to close",
  className,
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1280);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const update = () => {
      setIsMobile(media.matches);
      setViewportWidth(window.innerWidth);
    };
    update();
    media.addEventListener("change", update);
    window.addEventListener("resize", update, { passive: true });
    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const mobileCardWidth = Math.min(viewportWidth * 0.42, 160);
  const mobileCardHeight = Math.min(viewportWidth * 0.59, 224);
  const availableDesktopWidth = Math.min(Math.max(viewportWidth - 80, 520), 1200);
  const desktopSpacing = photos.length > 1
    ? Math.min(260, Math.max(96, (availableDesktopWidth - 224) / (photos.length - 1)))
    : 0;

  return (
    <div className={`relative w-full py-12 sm:py-24 ${className || ""}`}>
      <div className="relative flex min-h-[520px] w-full flex-col items-center justify-center sm:min-h-[650px]">
        <div className="pointer-events-none relative flex h-[500px] w-full max-w-[1240px] justify-center sm:h-[580px]">
          <motion.div
            className="absolute bottom-6 h-56 w-72 drop-shadow-2xl sm:w-80"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute left-0 top-0 h-10 w-28 rounded-t-xl border-x border-t border-white/10 bg-linear-to-t from-[#1e1e1e] to-[#2a2a2a] sm:w-32" />
            <div className="absolute inset-x-0 bottom-0 top-8 rounded-b-xl rounded-tr-xl border border-white/10 bg-linear-to-b from-[#1e1e1e] to-[#050505] shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
            <div className="pointer-events-none absolute inset-x-2 bottom-2 top-10 rounded-lg bg-black shadow-inner" />
          </motion.div>

          <div className="absolute bottom-10 z-10 flex justify-center">
            {photos.map((photo, i) => {
              const preserveFullImage = photo.imageFit === "contain" || photo.image.startsWith("data:image/svg+xml");
              const offset = i - (photos.length - 1) / 2;
              const stackY = hoverFolder ? offset * -10 - 40 : offset * -5;
              const stackX = hoverFolder ? offset * (isMobile ? 22 : 30) : offset * 3;
              const stackRotate = hoverFolder ? offset * 8 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;
              const mobileColumns = Math.min(2, photos.length);
              const mobileRows = Math.ceil(photos.length / mobileColumns);
              const mobileRow = Math.floor(i / mobileColumns);
              const itemsInRow = Math.min(mobileColumns, photos.length - mobileRow * mobileColumns);
              const mobileColumn = i % mobileColumns;
              const mobileX = (mobileColumn - (itemsInRow - 1) / 2) * (mobileCardWidth + 10);
              const mobileY = -15 - (mobileRows - 1 - mobileRow) * (mobileCardHeight + 12);
              const openX = isMobile ? mobileX : offset * desktopSpacing;
              const openY = isMobile ? mobileY : -165;

              return (
                <motion.div
                  key={photo.id}
                  drag={isFolderOpen}
                  dragSnapToOrigin
                  dragElastic={0.16}
                  onDragEnd={(_, info) => {
                    if (info.offset.y > 100 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  className={`absolute bottom-0 h-[59vw] max-h-56 w-[42vw] max-w-40 origin-bottom overflow-hidden rounded-lg border border-white/20 bg-black shadow-[0_20px_40px_rgba(0,0,0,0.65)] sm:h-72 sm:w-56 sm:max-h-none sm:max-w-none ${isFolderOpen ? "pointer-events-auto cursor-grab active:cursor-grabbing" : "pointer-events-none"}`}
                  animate={
                    !isFolderOpen
                      ? { y: stackY, x: stackX, rotate: stackRotate, scale: stackScale, zIndex: i + 10 }
                      : { y: openY, x: openX, rotate: 0, scale: isMobile ? 1 : 1.02, zIndex: 50 + i }
                  }
                  whileHover={isFolderOpen ? { scale: isMobile ? 1.03 : 1.07, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: isMobile ? 1.05 : 1.1, rotate: 4, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#090909]">
                    {preserveFullImage && (
                      <img
                        src={photo.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full scale-125 object-cover opacity-45 blur-xl"
                      />
                    )}
                    <img
                      src={photo.image}
                      alt={photo.title || "Item da galeria"}
                      className={`relative h-full w-full ${preserveFullImage ? "object-contain" : "object-cover"}`}
                    />
                  </div>
                  {photo.title && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black via-black/80 to-transparent p-3 pt-10 sm:p-4 sm:pt-12">
                      <p className="font-display text-base leading-tight text-white sm:text-xl sm:leading-none">{photo.title}</p>
                      {photo.href && (
                        <a href={photo.href} target="_blank" rel="noreferrer" className="pointer-events-auto mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 hover:text-white">
                          Abrir projeto <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.button
            type="button"
            aria-label={`Abrir pasta ${folderName}`}
            className="pointer-events-auto absolute bottom-0 z-20 h-40 w-[290px] cursor-pointer drop-shadow-[0_-20px_40px_rgba(0,0,0,0.8)] sm:h-44 sm:w-[340px]"
            style={{ transformOrigin: "bottom" }}
            animate={{ opacity: isFolderOpen ? 0 : 1, rotateX: hoverFolder ? -25 : 0, y: hoverFolder ? 10 : 0, pointerEvents: isFolderOpen ? "none" : "auto" }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-xl border border-white/20 bg-linear-to-b from-[#262626] to-[#080808] pb-8 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]">
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
              <div className="flex items-center justify-center rounded-md border border-black/80 bg-black px-5 py-2.5 shadow-inner backdrop-blur-md">
                <span className="text-sm font-medium tracking-wide text-white/90">{folderName}</span>
              </div>
            </div>
          </motion.button>
        </div>

        <motion.div
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 40 }}
          className="pointer-events-none absolute bottom-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-white/50 backdrop-blur-md sm:bottom-8 sm:text-xs"
        >
          {dragHintText}
        </motion.div>
      </div>
    </div>
  );
}

export { InteractiveFolderGallery as Component };

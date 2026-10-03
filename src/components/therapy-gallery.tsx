"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/images/terapias/acompanamiento-01.jpeg", alt: "Niño acompañado por su familia y una terapeuta durante una actividad" },
  { src: "/images/terapias/acompanamiento-02.jpeg", alt: "Terapeuta y niño explorando una actividad con una lámina" },
  { src: "/images/terapias/acompanamiento-03.jpeg", alt: "Niño y terapeuta compartiendo una actividad de movimiento" },
  { src: "/images/terapias/acompanamiento-04.jpeg", alt: "Terapeuta acompañando a un niño durante una actividad en colchonetas" },
  { src: "/images/terapias/acompanamiento-05.jpeg", alt: "Terapeuta acompañando a un niño en una actividad al aire libre" },
];

export function TherapyGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ first: 1, last: 3, canPrevious: false, canNext: true });

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    const firstSlide = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstSlide) return;

    const step = firstSlide.getBoundingClientRect().width + 14;
    const visible = Math.max(1, Math.round((track.clientWidth + 14) / step));
    const first = Math.min(photos.length - visible, Math.round(track.scrollLeft / step)) + 1;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setPosition({
      first: Math.max(1, first),
      last: Math.min(photos.length, Math.max(1, first) + visible - 1),
      canPrevious: track.scrollLeft > 2,
      canNext: track.scrollLeft < maxScroll - 2,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(track);
    updatePosition();
    return () => observer.disconnect();
  }, [updatePosition]);

  function move(direction: -1 | 1) {
    const track = trackRef.current;
    const firstSlide = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstSlide) return;
    track.scrollBy({ left: direction * (firstSlide.getBoundingClientRect().width + 14), behavior: "smooth" });
  }

  return (
    <section className="therapy-gallery" aria-label="Galería de apoyo terapéutico" aria-roledescription="carrusel">
      <div className="therapy-gallery-heading">
        <div>
          <span className="therapy-gallery-kicker">En imágenes</span>
          <h2>Momentos de acompañamiento</h2>
        </div>
        <div className="therapy-gallery-controls">
          <span className="therapy-gallery-count">{position.first}–{position.last} de {photos.length}</span>
          <button type="button" onClick={() => move(-1)} disabled={!position.canPrevious} aria-label="Ver fotos anteriores"><ChevronLeft size={20} /></button>
          <button type="button" onClick={() => move(1)} disabled={!position.canNext} aria-label="Ver fotos siguientes"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div
        className="therapy-gallery-track"
        ref={trackRef}
        onScroll={updatePosition}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        role="group"
        aria-label="Fotos de acompañamiento terapéutico. Desliza o usa las flechas para ver más."
        tabIndex={0}
      >
        {photos.map((photo, index) => (
          <figure className="therapy-gallery-slide" key={photo.src} role="group" aria-roledescription="diapositiva" aria-label={`Foto ${index + 1} de ${photos.length}`}>
            <Image src={photo.src} alt={photo.alt} width={1204} height={1600} sizes="(max-width: 760px) 82vw, (max-width: 900px) 48vw, 32vw" />
          </figure>
        ))}
      </div>
    </section>
  );
}

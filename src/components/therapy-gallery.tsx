import { CoverFlowGallery, type GalleryPhoto } from "@/components/education-gallery";

const photos: GalleryPhoto[] = [
  { src: "/images/terapias/acompanamiento-01.jpeg", alt: "Niño acompañado por su familia y una terapeuta durante una actividad", width: 1204, height: 1600 },
  { src: "/images/terapias/acompanamiento-02.jpeg", alt: "Terapeuta y niño explorando una actividad con una lámina", width: 720, height: 1280 },
  { src: "/images/terapias/acompanamiento-03.jpeg", alt: "Niño y terapeuta compartiendo una actividad de movimiento", width: 1204, height: 1600 },
  { src: "/images/terapias/acompanamiento-04.jpeg", alt: "Terapeuta acompañando a un niño durante una actividad en colchonetas", width: 1204, height: 1600 },
  { src: "/images/terapias/acompanamiento-05.jpeg", alt: "Terapeuta acompañando a un niño en una actividad al aire libre", width: 1204, height: 1600 },
];

export function TherapyGallery() {
  return <CoverFlowGallery photos={photos} title="Momentos de acompañamiento" label="Galería de apoyo terapéutico" />;
}

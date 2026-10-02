import { notFound } from "next/navigation";
import Site from "@/components/site";
import { sections, type Section } from "@/lib/content";

export function generateStaticParams() { return sections.map((section) => ({ section })); }

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!sections.includes(section as Section)) notFound();
  return <Site view={section as Section} />;
}

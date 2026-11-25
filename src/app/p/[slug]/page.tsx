import { notFound } from "next/navigation";
import { prospectPages } from "@/content/prospect-pages";
import ProspectExperience from "@/components/prospect/ProspectExperience";
import type { Metadata } from "next";
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.values(prospectPages).filter(p => p.status !== "archived").map(p => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = prospectPages[slug];
  return { title: page ? page.title + " | AlignRISE" : "Not found | AlignRISE",
    robots: { index: false, follow: false }, description: "Personalized AlignRISE proposal.",
    openGraph: { title: page?.title || "AlignRISE", type: "website" } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = prospectPages[slug];
  if (!page || page.status === "archived") notFound();
  return <ProspectExperience page={page} />;
}

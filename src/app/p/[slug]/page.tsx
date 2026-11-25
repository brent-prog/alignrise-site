import { notFound } from "next/navigation";
import { prospectPages } from "@/content/prospect-pages";
import ProspectExperience from "@/components/prospect/ProspectExperience";
import type { Metadata } from "next";

export const dynamicParams = false;
const isPublic = (status: string) => status === "published" || (process.env.VERCEL_ENV !== "production" && status === "draft");
export function generateStaticParams() {
  return Object.values(prospectPages).filter(p => isPublic(p.status)).map(p => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = prospectPages[slug];
  return {
    title: page ? page.clientName + " | " + page.offerName + " | AlignRISE" : "Not found | AlignRISE",
    description: page ? "Private-link proposal for " + page.clientName + " from AlignRISE by 3P Solutions." : "AlignRISE",
    robots: { index: false, follow: false, noarchive: true, nosnippet: true },
    openGraph: { title: page?.title || "AlignRISE proposal", type: "website" }
  };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = prospectPages[slug];
  if (!page || !isPublic(page.status)) notFound();
  return <ProspectExperience page={page}/>;
}

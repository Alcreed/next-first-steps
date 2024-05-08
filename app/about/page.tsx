import { Metadata } from "next";

// SEO para los buscadores
export const metadata: Metadata = {
  title: 'About title',
  description: 'SEO Description',
  keywords: ['About page', 'Alfonso', 'Información']
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About page</span>
    </>
  )
}
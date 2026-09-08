import type { Metadata } from "next";
import Image from "next/image";
import { BondTypeCard } from "@/components/bond-type/BondTypeCard";
import resume from "../../himani.json";

export const metadata: Metadata = {
  title: resume.name,
  description: `${resume.title} — ${resume.headline}`,
};

const links = [
  { label: "Email", href: `mailto:${resume.contact.email}` },
  { label: "Phone", href: `tel:${resume.contact.phone.replace(/\s+/g, "")}` },
  { label: "LinkedIn", href: `https://${resume.contact.linkedin}` },
];

const fmt = (d: string) =>
  d === "Present"
    ? "Present"
    : new Date(d + "-01").toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:grid md:grid-cols-[200px_1fr] md:gap-16">
      <aside className="mb-12 md:mb-0">
        <Image
          src="/img-2384.webp"
          alt={resume.name}
          width={600}
          height={800}
          sizes="(min-width: 768px) 200px, 40vw"
          className="mb-4 aspect-[3/4] w-full max-w-[200px] object-cover"
        />
        <h1 className="text-base font-medium text-neutral-900">{resume.name}</h1>
        <p className="mt-1 text-sm text-neutral-500">
          {resume.title} — {resume.headline}
        </p>
        <nav className="mt-6 flex flex-col gap-1.5 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener"
              className="text-neutral-500 hover:text-neutral-900"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </aside>

      <main>
        <BondTypeCard />

        <h2 className="mb-4 mt-10 text-sm font-medium text-neutral-900">About</h2>
        <p className="text-sm leading-relaxed text-neutral-700">{resume.summary}</p>

        <h2 className="mb-4 mt-10 text-sm font-medium text-neutral-900">
          Experience
        </h2>
        <ul className="flex flex-col divide-y divide-neutral-200">
          {resume.experience.map((job) => (
            <li key={job.company} className="py-4">
              <span className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium text-neutral-900">
                  {job.role} · {job.company}
                </span>
                <span className="shrink-0 text-xs text-neutral-400">
                  {fmt(job.startDate)} – {fmt(job.endDate)}
                </span>
              </span>
              <span className="mt-0.5 block text-xs text-neutral-500">
                {job.location}
              </span>
              <ul className="mt-2 list-disc pl-4 text-sm leading-relaxed text-neutral-700 marker:text-neutral-300">
                {job.highlights.map((h, i) => (
                  <li key={i} className="mt-1">
                    {h}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h2 className="mb-4 mt-10 text-sm font-medium text-neutral-900">
          Core Skills
        </h2>
        <ul className="flex flex-col gap-2 text-sm text-neutral-700">
          {Object.values(resume.coreSkills).map((group, i) => (
            <li key={i}>{group.join(" · ")}</li>
          ))}
        </ul>

        <h2 className="mb-4 mt-10 text-sm font-medium text-neutral-900">
          Education
        </h2>
        <ul className="flex flex-col divide-y divide-neutral-200">
          {resume.education.map((e) => (
            <li key={e.degree} className="py-4">
              <span className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium text-neutral-900">
                  {e.degree}
                </span>
                <span className="shrink-0 text-xs text-neutral-400">
                  {e.startYear} – {e.endYear}
                </span>
              </span>
              <span className="mt-0.5 block text-sm text-neutral-500">
                {e.institution}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

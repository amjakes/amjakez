import type { ReactNode } from "react";

type Entry = {
  school: string;
  degree: string;
  period: string;
  credentialId?: string;
};

const ENTRIES: Entry[] = [
  {
    school: "Custom GPT Development with OpenAI",
    degree: "Simplilearn",
    period: "July 2026",
    credentialId: "10420709",
  },
  {
    school: "Chatbot Development",
    degree: "Simplilearn",
    period: "July 2026",
    credentialId: "10420116",
  },
  {
    school: "Introduction to SEO",
    degree: "Simplilearn",
    period: "June 2026",
    credentialId: "10414785",
  },
  {
    school: "Machine Learning Using Python",
    degree: "Simplilearn",
    period: "June 2026",
    credentialId: "10407041",
  },
  {
    school: "Foundations of IT Infrastructure",
    degree: "Simplilearn",
    period: "June 2026",
    credentialId: "10405087",
  },
  {
    school: "Introduction to ITIL 4",
    degree: "Simplilearn",
    period: "June 2026",
    credentialId: "10405733",
  },
  {
    school: "AI Applications in Healthcare",
    degree: "Simplilearn",
    period: "June 2026",
    credentialId: "10405724",
  },
  {
    school: "Build AI Agents using LangGraph",
    degree: "Simplilearn",
    period: "June 2026",
    credentialId: "10405687",
  },
  {
    school: "Ethical Hacking",
    degree: "Simplilearn",
    period: "June 2026",
    credentialId: "10404904",
  },
  {
    school: "Site Reliability Engineering",
    degree: "Simplilearn",
    period: "June 2026",
    credentialId: "10403983",
  },
  {
    school: "Introduction to CISSP Security Assessment & Testing and Security Operations",
    degree: "Simplilearn",
    period: "June 2026",
    credentialId: "10398496",
  },
  {
    school: "Database Agent Build-up",
    degree: "Simplilearn",
    period: "June 2026",
    credentialId: "10377671",
  },
  {
    school: "CSX Cybersecurity Fundamentals Certificate (CSXF)",
    degree: "Cyberpro Global",
    period: "July 2025",
  },
  {
    school: "ALX Data Analytics Professional Certificate",
    degree: "ALX Africa",
    period: "December 2024",
  },
];

const ROW_HEIGHT = 64;

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Certificates
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {ENTRIES.slice(0, 3).map((entry) => (
            <li
              key={`${entry.school}-${entry.period}`}
              className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
              style={{ minHeight: ROW_HEIGHT }}
            >
              <SchoolLogo entry={entry} />
              <div className="flex min-w-0 flex-col">
                <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                  {entry.school}
                </span>
                <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                  {entry.degree}
                  <span className="text-foreground/30 mx-2">•</span>
                  <span className="text-foreground/55">{entry.period}</span>
                </span>
                {entry.credentialId ? (
                  <span className="text-foreground/40 text-xs">ID {entry.credentialId}</span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
        <details className="group mt-3 border-t border-foreground/5 pt-3">
          <summary className="focus-ring cursor-pointer list-none text-center text-sm font-medium text-foreground/65 marker:hidden hover:text-foreground">
            View all {ENTRIES.length} certificates
          </summary>
          <ul className="mt-3 flex flex-col gap-2">
            {ENTRIES.slice(3).map((entry) => (
              <li key={entry.school} className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2">
                <SchoolLogo entry={entry} />
                <div className="flex min-w-0 flex-col">
                  <span className="text-foreground text-[15px] font-semibold tracking-tight">{entry.school}</span>
                  <span className="text-foreground/55 mt-0.5 text-sm">{entry.degree} · {entry.period}</span>
                  {entry.credentialId ? <span className="text-foreground/40 text-xs">ID {entry.credentialId}</span> : null}
                </div>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
}

function SchoolLogo({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.school.charAt(0);
  return (
    <span
      className="border-foreground/15 inline-flex h-12 w-12 shrink-0 items-center justify-center border"
      aria-hidden="true"
      style={{ borderRadius: 14 }}
    >
      <span className="text-foreground/60 text-[18px] font-semibold tracking-tight">
        {initials}
      </span>
    </span>
  );
}

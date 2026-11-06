import type { ReactNode } from "react";
import type { ProjectData } from "@/mockData/projects";
import { projects } from "@/mockData/projects";

const BRAND_TERMS = ["ZAMR Engineering", "ZAMR"];

const CLIENT_ALIASES: Record<string, string[]> = {
  "Transport for NSW": ["TfNSW", "Transport for NSW"],
  "Department of Transport and Main Roads (DTMR)": [
    "Department of Transport and Main Roads (DTMR)",
    "Department of Transport and Main Roads",
    "DTMR",
  ],
};

function splitClientParts(client: string): string[] {
  return client
    .split(/\s*\/\s*|\s*,\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function uniqueTerms(terms: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const term of terms) {
    const key = term.toLowerCase();
    if (!term || seen.has(key)) continue;
    seen.add(key);
    out.push(term);
  }
  return out.sort((a, b) => b.length - a.length);
}

/** Terms to bold in project detail body copy. */
export function getProjectHighlightTerms(project: ProjectData): string[] {
  const clients = project.stats
    .filter((stat) => stat.label.toLowerCase() === "client")
    .flatMap((stat) => {
      const parts = splitClientParts(stat.value);
      return parts.flatMap((part) => CLIENT_ALIASES[part] ?? [part]);
    });

  const allClients = projects.flatMap((p) =>
    p.stats
      .filter((stat) => stat.label.toLowerCase() === "client")
      .flatMap((stat) => {
        const parts = splitClientParts(stat.value);
        return parts.flatMap((part) => CLIENT_ALIASES[part] ?? [part]);
      }),
  );

  const categories = Array.from(
    new Set(projects.map((p) => p.category).concat(project.category)),
  );

  const projectNames = Array.from(
    new Set(
      projects.flatMap((p) => [p.title, p.heroTitle]).concat([
        project.title,
        project.heroTitle,
      ]),
    ),
  );

  return uniqueTerms([
    ...BRAND_TERMS,
    ...clients,
    ...allClients,
    ...categories,
    ...projectNames,
  ]);
}

/** Tokens that include a digit (e.g. 2.5 m, 6.1 km, 100-year, $662.5, TfNSW stays via terms). */
const NUMBER_WORD_PATTERN =
  /\$?\d[\d,]*(?:\.\d+)?(?:-\w+)?(?:\s*(?:m|km|mm|cm|sqm|%))?|\b(?=[A-Za-z0-9._%-]*\d)[A-Za-z0-9._%-]+\b/g;

/**
 * Wrap named `terms` and any word that contains a number in <strong>.
 * Longer named terms win so "ZAMR Engineering" beats "ZAMR".
 */
export function highlightTerms(text: string, terms: string[]): ReactNode[] {
  if (!text) return [text];

  const namedPattern =
    terms.length > 0
      ? terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")
      : null;

  const pattern = namedPattern
    ? new RegExp(`(${namedPattern}|${NUMBER_WORD_PATTERN.source})`, "gi")
    : new RegExp(`(${NUMBER_WORD_PATTERN.source})`, "gi");

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    if (!part) return part;

    const isNamed = terms.some(
      (term) => term.toLowerCase() === part.toLowerCase(),
    );
    const isNumberWord = /\d/.test(part);

    if (isNamed || isNumberWord) {
      return <strong key={`${index}-${part}`}>{part}</strong>;
    }
    return part;
  });
}

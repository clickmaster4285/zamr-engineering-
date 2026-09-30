// mockData/engineering-impact.ts — All static data for the Engineering For Impact page

export interface HeroContent {
  title: string;
  subtitle: string;
  image: string;
}

export const heroContent: HeroContent = {
  title: "Creating Better Infrastructure\nThrough Smart Engineering",
  subtitle:
    "At ZAMR Engineering, every project is an opportunity to create lasting value. Through innovative thinking, technical excellence, and a commitment to quality, we deliver engineering solutions that strengthen infrastructure, improve communities, and support long-term success.",
  image: "/images/image5.jpeg",
};

// ─── Areas of Impact (01 — checklist + image) ─────────────────────────

export interface AreasOfImpactContent {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  description: string;
  values: { label: string }[];
  image: string;
}

export const areasOfImpactContent: AreasOfImpactContent = {
  sectionNumber: "01",
  sectionLabel: "AREAS OF IMPACT",
  heading: "Delivering Value Across Every Project",
  description:
    "ZAMR Engineering delivers measurable impact across a broad range of disciplines — combining technical expertise with strategic thinking to support projects at every stage.",
  values: [
    { label: "Bridges & Transport Infrastructure" },
    { label: "Civil Engineering" },
    { label: "Asset Management" },
    { label: "Traffic Engineering" },
    { label: "Integrated Management Systems" },
    { label: "Engineering Verification" },
    { label: "Infrastructure Planning" },
  ],
  image: "/images/engineering-impact/image2.png",
};

// ─── Impact Stories (02 — story cards) ────────────────────────────────

export interface ImpactStory {
  category: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  imagePosition: "top" | "bottom";
}

export interface ImpactStoriesContent {
  sectionNumber: string;
  sectionLabel: string;
  heading: string;
  stories: ImpactStory[];
}

export const impactStoriesContent: ImpactStoriesContent = {
  sectionNumber: "02",
  sectionLabel: "Impact Stories",
  heading: "Engineering Impact Stories",
  stories: [
    {
      category: "Community Leadership & Social Commitment",
      title: "Leadership That Builds Community",
      description:
        "ZAMR Engineering believes that engineering excellence is only one part of the equation. Through active leadership and social commitment, the firm supports stronger, more resilient communities where people can thrive.",
      points: [
        "Khalid is vice president of Engineers Australia Immigrant, helping shape pathways for diverse talent to contribute to the profession.",
        "Donation to Child Support reflects the firm's commitment to supporting vulnerable families and creating long-term social impact.",
      ],
      image: "/images/engineering-impact/commitment.png",
      imageAlt: "Community leadership editorial image",
      imagePosition: "bottom",
    },
    {
      category: "Engineering Impact for Community Organisations",
      title: "Engineering That Serves Community",
      description:
        "From structural assessments to civil works, ZAMR Engineering partners with community organisations to deliver practical, reliable engineering support that helps them serve their members with confidence.",
      points: [
        "Building structural assessment for Wentworthville Muslim Community helps ensure safe, compliant facilities for community use.",
        "Civil Works & Drainage Inspection for Marsden Park Mosque supports reliable infrastructure and long-term maintenance planning.",
        "Building Iteration for Parramatta Muslim Association helps organisations evolve their facilities with confidence and clarity.",
      ],
      image: "/images/engineering-impact/organisations.png",
      imageAlt: "Community engineering assessment image",
      imagePosition: "top",
    },
    {
      category: "Immigrant Career Support",
      title: "Opening Doors for Immigrant Talent",
      description:
        "ZAMR Engineering recognises that diverse talent is essential to a resilient engineering sector. The firm actively supports immigrant professionals through structured pathways that help them build careers in Australia.",
      points: [
        "ZAMR support of immigrant engineers through internship programs gives emerging professionals practical experience and industry exposure.",
        "Provide Sponsorship Visa support helps bridge the gap between talent and opportunity, creating a more inclusive engineering workforce.",
      ],
      image: "/images/engineering-impact/talent.png",
      imageAlt: "Immigrant engineer mentorship image",
      imagePosition: "bottom",
    },
  ],
};


// ─── CTA Section ──────────────────────────────────────────────────────

export interface CTAContent {
  heading: string;
  description: string;
  primaryButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
}

export const ctaContent: CTAContent = {
  heading: "Let's Build Infrastructure That Makes a Difference",
  description:
    "Partner with ZAMR Engineering to deliver engineering solutions that create lasting value, improve performance, and support sustainable growth.",
  primaryButton: { label: "Start Your Project", href: "/contact" },
  secondaryButton: { label: "Contact Our Team", href: "/contact" },
};

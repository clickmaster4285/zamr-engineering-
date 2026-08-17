// app/contact/page.tsx
import ContactHero from "@/components/contact/Hero";
import Enquiry from "@/components/contact/Enquiry";
import HowWeHelp from "@/components/contact/HowWeHelp";
import FindUs from "@/components/contact/FindUs";

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center">
      <ContactHero />
      <Enquiry />
      <HowWeHelp />
      <FindUs />
    </main>
  );
}

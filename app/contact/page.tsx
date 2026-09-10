// app/contact/page.tsx
import ContactHero from "@/components/contact/Hero";
import HowWeHelp from "@/components/contact/HowWeHelp";
import FindUs from "@/components/contact/FindUs";
import Contacts from "@/components/Contacts";
export default function Page() {
  return (
    <main className="flex w-full flex-col items-center">
      <ContactHero />
      <Contacts />
      <HowWeHelp />
      <FindUs />
    </main>
  );
}

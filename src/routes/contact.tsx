import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/CineButton";
import { INDUSTRIES } from "@/data/industries";
import { COMPANY } from "@/data/navigation";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Amoha Herbals — Let's Build Your Brand" },
      {
        name: "description",
        content:
          "Send Amoha Herbals your product category and requirement to start a private label or contract manufacturing project.",
      },
      { property: "og:title", content: "Contact Amoha Herbals" },
      { property: "og:description", content: "Let's build your brand — start a private label project." },
      { property: "og:url", content: "https://amohaherbals.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://amohaherbals.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Amoha Herbals Pvt Ltd",
          url: "https://amohaherbals.lovable.app/contact",
          telephone: "+91 8308832043",
          email: "amohaherbals@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Yashashree Colony, Karve Nagar",
            addressLocality: "Pune",
            postalCode: "411052",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

type Errors = Partial<Record<"name" | "email" | "requirement", string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const requirement = String(data.get("requirement") ?? "").trim();
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (requirement.length < 10) next.requirement = "Tell us a little about your requirement.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  const field = "mt-2 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-accent";
  const label = "eyebrow text-muted-foreground";

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build your brand."
        intro="Share your category and requirement — or reach us directly on phone or email."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-16 lg:px-10">
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          <div className="bg-background p-8">
            <p className="eyebrow text-muted-foreground">Address</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-foreground">
              {COMPANY.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <div className="bg-background p-8">
            <p className="eyebrow text-muted-foreground">Get in touch</p>
            <p className="mt-4 text-sm text-foreground">
              <a href={COMPANY.phoneHref} className="hover:text-accent">
                {COMPANY.phone}
              </a>
            </p>
            <p className="mt-2 text-sm text-foreground">
              <a href={COMPANY.emailHref} className="hover:text-accent">
                {COMPANY.email}
              </a>
            </p>
          </div>
          <div className="bg-background p-8">
            <p className="eyebrow text-muted-foreground">Follow us</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {COMPANY.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener" className="hover:text-accent">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 pb-28 lg:px-10">

        {submitted ? (
          <div className="border border-border p-12">
            <h2 className="display text-3xl">Thank you.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Your enquiry has been captured in the browser. Connect a backend to deliver enquiries to Amoha's inbox —
              until then nothing is transmitted or stored.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid max-w-3xl gap-10 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="name">
                Name
              </label>
              <input id="name" name="name" className={field} aria-invalid={Boolean(errors.name)} />
              {errors.name ? <p className="mt-2 text-xs text-destructive">{errors.name}</p> : null}
            </div>
            <div>
              <label className={label} htmlFor="company">
                Company
              </label>
              <input id="company" name="company" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="email">
                Email
              </label>
              <input id="email" name="email" type="email" className={field} aria-invalid={Boolean(errors.email)} />
              {errors.email ? <p className="mt-2 text-xs text-destructive">{errors.email}</p> : null}
            </div>
            <div>
              <label className={label} htmlFor="phone">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className={field} />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="category">
                Product category
              </label>
              <select id="category" name="category" className={field}>
                {INDUSTRIES.map((i) => (
                  <option key={i.id} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="requirement">
                Product requirement
              </label>
              <textarea
                id="requirement"
                name="requirement"
                rows={4}
                className={field}
                aria-invalid={Boolean(errors.requirement)}
              />
              {errors.requirement ? <p className="mt-2 text-xs text-destructive">{errors.requirement}</p> : null}
            </div>
            <div className="sm:col-span-2">
              <Button type="submit">Send enquiry</Button>
            </div>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}

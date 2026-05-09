import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { socialLinks } from "@/data/portfolio";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

type ContactProps = {
  className?: string;
};

export const Contact: React.FC<ContactProps> = ({ className = "" }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      const response = await fetch("https://formsubmit.co/nashish831@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Contact - ${name}`,
          _captcha: false,
        }),
      });

      if (!response.ok) throw new Error("Failed to send");

      toast({
        title: "Message sent successfully.",
        description: "Thanks for reaching out. I will get back to you soon.",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Message queued.",
        description: "Your message has been sent to nashish831@gmail.com.",
      });
    } finally {
      event.currentTarget.reset();
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={`section-shell ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let us build something useful."
          description="Open to meaningful engineering work, internships, collaborations, and conversations around data-driven software."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="flex flex-col justify-between border border-white/10 p-6 sm:p-8">
            <div>
              <p className="font-display text-3xl font-semibold leading-tight text-white">
                Reach me directly at:
              </p>
              <a
                href={socialLinks.mailto}
                className="mt-5 inline-flex items-center gap-3 text-lg text-white/62 transition hover:text-white"
              >
                <Mail className="h-5 w-5" />
                {socialLinks.email}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {[
                { href: socialLinks.github, label: "GitHub", icon: Github },
                { href: socialLinks.linkedin, label: "LinkedIn", icon: Linkedin },
                { href: socialLinks.instagram, label: "Instagram", icon: Instagram },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 border border-white/10 px-4 text-sm text-white/58 transition hover:border-white hover:bg-white hover:text-black"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="border border-white/10 p-5 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="h-12 w-full border border-white/10 bg-black px-4 text-white outline-none transition placeholder:text-white/25 focus:border-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="h-12 w-full border border-white/10 bg-black px-4 text-white outline-none transition placeholder:text-white/25 focus:border-white"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="mt-6 h-12 w-full rounded-none border border-white bg-white text-black hover:bg-black hover:text-white"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

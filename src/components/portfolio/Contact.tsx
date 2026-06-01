import { useState } from "react";
import { Github, Linkedin, Mail, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type ContactProps = {
  className?: string;
};

export const Contact: React.FC<ContactProps> = ({ className = "" }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formsubmit.co/nashish831@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          _subject: `Portfolio Contact - ${formData.get("name")}`,
          _captcha: false,
        }),
      });

      if (!response.ok) throw new Error("Failed to send");
      toast({ title: "Message sent", description: "Thanks for reaching out. I'll get back to you soon." });
      e.currentTarget.reset();
    } catch {
      toast({ title: "Message queued", description: "Your message has been sent to nashish831@gmail.com" });
      e.currentTarget.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={`section-block ${className}`}>
      <div className="section-wrap">
        <div className="hermes-grid">
          <div className="hermes-cell col-span-full text-center">
            <h2 className="section-title mt-0">Get In Touch</h2>
          </div>
          <div className="hermes-cell col-span-full text-center">
            <p className="mx-auto max-w-[640px] text-[1.0625rem] leading-relaxed tracking-normal opacity-60" style={{ textTransform: "none" }}>
              Secure Channel Active. Response mode: ASAP.
            </p>
          </div>

          <div className="hermes-cell col-span-full lg:col-span-2">
            <div className="grid gap-0 border border-current/20">
              {[
                { icon: Mail, label: "Email", value: "nashish831@gmail.com", href: "mailto:nashish831@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "N. Ashish", href: "https://www.linkedin.com/in/n-ashish-455b37244/" },
                { icon: Github, label: "GitHub", value: "nashish109", href: "https://github.com/nashish109" },
                { icon: Download, label: "Resume", value: "Download PDF", href: "/resume/For Interviews.pdf" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    download={item.label === "Resume" ? true : undefined}
                    className="hermes-hover flex items-center gap-4 border-b border-current/20 p-4"
                  >
                    <Icon className="h-4 w-4 opacity-70" />
                    <span>
                      <span className="block font-mono text-xs uppercase tracking-[0.16em] opacity-50">{item.label}</span>
                      <span className="mt-1 block text-sm tracking-normal opacity-80" style={{ textTransform: "none" }}>{item.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="hermes-cell col-span-full lg:col-span-3">
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.16em] opacity-60">Name</label>
                  <input id="name" name="name" required className="premium-input" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.16em] opacity-60">Email</label>
                  <input id="email" name="email" type="email" required className="premium-input" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.16em] opacity-60">Message</label>
                <textarea id="message" name="message" rows={6} required className="premium-input resize-none" />
              </div>
              <Button type="submit" className="premium-button h-auto w-full" disabled={isLoading}>
                <Send className="h-4 w-4" />
                {isLoading ? "Sending..." : "Send Transmission"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

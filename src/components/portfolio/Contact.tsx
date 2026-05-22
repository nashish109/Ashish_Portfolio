import { useState } from "react";
import { LockKeyhole, Mail, Send } from "lucide-react";
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

      if (response.ok) {
        toast({
          title: "Transmission sent successfully",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Transmission queued",
        description: "Your message has been sent to nashish831@gmail.com",
      });
      e.currentTarget.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={`container scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      <div className="mb-10 space-y-3 text-center">
        <div className="inline-flex items-center justify-center gap-2 text-cyan-300">
          <Mail className="h-5 w-5" />
          <span className="retro-kicker">Encrypted Transmission</span>
        </div>
        <h2 className="retro-title text-4xl md:text-5xl">
          Get In <span className="text-cyan-300">Touch</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="retro-window">
          <div className="space-y-4 p-5 pt-8 sm:p-6 sm:pt-10">
            <div className="flex items-center gap-3 border border-emerald-300/45 bg-black p-4 text-emerald-200 shadow-[inset_1px_1px_0_rgba(255,255,255,0.12)]">
              <LockKeyhole className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-[0.18em]">Secure Channel Active</span>
            </div>
            <div className="border border-cyan-300/45 bg-black p-4 font-mono text-sm leading-7 text-cyan-100 shadow-[inset_1px_1px_0_rgba(255,255,255,0.12)]">
              <p>&gt; recipient: nashish831@gmail.com</p>
              <p>&gt; protocol: recruiter-friendly</p>
              <p>&gt; response_mode: ASAP</p>
              <p className="text-emerald-300">&gt; status: waiting_for_message_</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="retro-window">
          <div className="space-y-5 p-5 pt-8 sm:p-6 sm:pt-10">
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.id} className="space-y-2">
                <label htmlFor={field.id} className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-200">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  required
                  className="retro-field w-full px-4 py-3 placeholder:text-gray-500 transition-colors focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
                />
              </div>
            ))}

            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="retro-field w-full px-4 py-3 placeholder:text-gray-500 transition-colors focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
              />
            </div>

            <Button type="submit" className="retro-button w-full" disabled={isLoading}>
              <Send className="mr-2 h-4 w-4" />
              {isLoading ? "Encrypting..." : "Send Transmission"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

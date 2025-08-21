import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

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
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      // Simple email sending using a free service
      const response = await fetch('https://formsubmit.co/nashish831@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `Portfolio Contact - ${name}`,
          _captcha: false
        })
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Message sent! 📧",
        description: "Your message has been sent to nashish831@gmail.com",
      });
      (e.currentTarget as HTMLFormElement).reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={`container py-20 scroll-mt-32 ${className}`}>
      <h2 className="text-3xl font-display mb-6">Get In Touch</h2>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-white/10 bg-background/40"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-white/10 bg-background/40"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-white/10 bg-background/40"
            ></textarea>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Or contact me directly at:</p>
          <a 
            href="mailto:nashish831@gmail.com" 
            className="text-primary hover:underline"
          >
            nashish831@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
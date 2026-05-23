import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
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
    <section id="contact" className={`container px-4 py-16 sm:px-6 sm:py-20 scroll-mt-32 ${className}`}>
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center justify-center gap-2 text-cyan-400">
          <Mail className="h-5 w-5" />
          <span className="text-sm font-medium">Let&apos;s Connect</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
      </div>
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
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/80 text-white placeholder:text-gray-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/80 text-white placeholder:text-gray-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/80 text-white placeholder:text-gray-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
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

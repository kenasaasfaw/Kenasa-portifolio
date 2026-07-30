import { Github, Linkedin, Mail, Facebook, Send, Phone } from "lucide-react";

export const Footer = () => {
  const contacts = [
    { name: "GitHub", url: "https://github.com/kenasaasfaw", icon: <Github /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/kenasa-asfaw", icon: <Linkedin /> },
    { name: "Telegram", url: "https://t.me/BDrcoming", icon: <Send /> },
    { name: "Email", url: "mailto:kenasaasfaw1@gmail.com", icon: <Mail /> },
    { name: "Phone", url: "tel:+251922332077", icon: <Phone /> },
    { name: "Facebook", url: "https://facebook.com", icon: <Facebook /> },
  ];

  return (
    <footer className="py-12 sm:py-16 bg-background text-foreground text-center px-6">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
        {contacts.map((c) => (
          <a 
            key={c.name} 
            href={c.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label={c.name}
          >
            {c.icon}
          </a>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        © 2025 TWIN TECHNOLOGY. All rights reserved.  by Kenasa Asfaw.
      </p>
    </footer>
  );
};

import { motion } from "framer-motion";
import { Mail, Send, Github } from "lucide-react";
import SideNav from "@/components/SideNav";
import { useLanguage } from "@/components/language-provider";

const content = {
  ru: {
    title: "Контакты",
    contacts: [
      { icon: Mail, label: "Почта", value: "artem@volkov.design", href: "mailto:artem@volkov.design" },
      { icon: Send, label: "Telegram", value: "@artemvolkov", href: "https://t.me/" },
      { icon: Github, label: "GitHub", value: "github.com/artemvolkov", href: "https://github.com/" },
    ],
  },
  uk: {
    title: "Контакти",
    contacts: [
      { icon: Mail, label: "Пошта", value: "artem@volkov.design", href: "mailto:artem@volkov.design" },
      { icon: Send, label: "Telegram", value: "@artemvolkov", href: "https://t.me/" },
      { icon: Github, label: "GitHub", value: "github.com/artemvolkov", href: "https://github.com/" },
    ],
  },
  en: {
    title: "Contacts",
    contacts: [
      { icon: Mail, label: "Email", value: "artem@volkov.design", href: "mailto:artem@volkov.design" },
      { icon: Send, label: "Telegram", value: "@artemvolkov", href: "https://t.me/" },
      { icon: Github, label: "GitHub", value: "github.com/artemvolkov", href: "https://github.com/" },
    ],
  },
} as const;

const Contacts = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background transition-colors py-8 px-4 pb-28 md:pb-8 md:px-8 flex items-start justify-center">
      <div className="w-full max-w-[1100px] grid grid-cols-[1fr] md:grid-cols-[1fr_70px] gap-4">
        <div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h1 className="text-4xl font-heading font-bold text-card-foreground mb-8">{t.title}</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.contacts.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="bento-card bg-card p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform"
              >
                <Icon className="w-8 h-8 text-card-foreground" />
                <div>
                  <p className="font-heading font-bold text-card-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <SideNav />
      </div>
    </div>
  );
};

export default Contacts;

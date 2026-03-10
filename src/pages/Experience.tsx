import { motion } from "framer-motion";
import SideNav from "@/components/SideNav";
import { useLanguage } from "@/components/language-provider";

const content = {
  ru: {
    title: "Опыт",
    items: [
      {
        period: "2024 — настоящее время",
        role: "Senior Frontend Developer",
        company: "Tech Corp",
        description: "Разработка и поддержка веб-приложений на React и TypeScript.",
      },
      {
        period: "2022 — 2024",
        role: "Frontend Developer",
        company: "Design Studio",
        description: "Создание интерфейсов и дизайн-систем для клиентов.",
      },
      {
        period: "2020 — 2022",
        role: "Junior Developer",
        company: "Startup Inc",
        description: "Вёрстка и разработка лендингов и маркетинговых страниц.",
      },
    ],
  },
  uk: {
    title: "Досвід",
    items: [
      {
        period: "2024 — дотепер",
        role: "Senior Frontend Developer",
        company: "Tech Corp",
        description: "Розробка та підтримка вебзастосунків на React і TypeScript.",
      },
      {
        period: "2022 — 2024",
        role: "Frontend Developer",
        company: "Design Studio",
        description: "Створення інтерфейсів і дизайн-систем для клієнтів.",
      },
      {
        period: "2020 — 2022",
        role: "Junior Developer",
        company: "Startup Inc",
        description: "Верстка і розробка лендингів та маркетингових сторінок.",
      },
    ],
  },
  en: {
    title: "Experience",
    items: [
      {
        period: "2024 — present",
        role: "Senior Frontend Developer",
        company: "Tech Corp",
        description: "Development and maintenance of web apps with React and TypeScript.",
      },
      {
        period: "2022 — 2024",
        role: "Frontend Developer",
        company: "Design Studio",
        description: "Building interfaces and design systems for clients.",
      },
      {
        period: "2020 — 2022",
        role: "Junior Developer",
        company: "Startup Inc",
        description: "Markup and development of landing pages and marketing websites.",
      },
    ],
  },
} as const;

const Experience = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background transition-colors py-8 px-4 pb-28 md:pb-8 md:px-8 flex items-start justify-center">
      <div className="w-full max-w-[1100px] grid grid-cols-[1fr] md:grid-cols-[1fr_70px] gap-4">
        <div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h1 className="text-4xl font-heading font-bold text-card-foreground mb-8">{t.title}</h1>
          </motion.div>

          <div className="flex flex-col gap-4">
            {t.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="bento-card bg-card p-6"
              >
                <p className="text-xs text-muted-foreground font-heading">{item.period}</p>
                <h2 className="font-heading font-bold text-card-foreground text-lg mt-1">{item.role}</h2>
                <p className="text-sm text-muted-foreground">{item.company}</p>
                <p className="text-sm text-card-foreground mt-3">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <SideNav />
      </div>
    </div>
  );
};

export default Experience;

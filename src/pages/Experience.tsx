import { motion } from "framer-motion";
import SideNav from "@/components/SideNav";
import { useLanguage } from "@/components/language-provider";

const content = {
  ru: {
    title: "Опыт",
    items: [
      {
        period: "Декабрь 2025 — настоящее время",
        role: "FullStack Developer",
        company: "Кочан",
        description: "Разработка и поддержка веб-сервисов, интерфейсов и серверной логики.",
      },
      {
        period: "Август 2024 — декабрь 2025",
        role: "Специалист поддержки",
        company: "Кочан",
        description: "Поддержка пользователей и решение технических вопросов.",
      },
      {
        period: "2022 — август 2024",
        role: "Python Developer",
        company: "Freelance",
        description: "Разработка скриптов и сервисов на Python для автоматизации.",
      },
    ],
  },
  uk: {
    title: "Досвід",
    items: [
      {
        period: "Грудень 2025 — дотепер",
        role: "FullStack Developer",
        company: "Кочан",
        description: "Розробка та підтримка вебсервісів, інтерфейсів і серверної логіки.",
      },
      {
        period: "Серпень 2024 — грудень 2025",
        role: "Фахівець підтримки",
        company: "Кочан",
        description: "Підтримка користувачів і вирішення технічних питань.",
      },
      {
        period: "2022 — серпень 2024",
        role: "Python Developer",
        company: "Freelance",
        description: "Розробка скриптів і сервісів на Python для автоматизації.",
      },
    ],
  },
  en: {
    title: "Experience",
    items: [
      {
        period: "December 2025 — present",
        role: "FullStack Developer",
        company: "Cochan",
        description: "Development and maintenance of web services, UI, and server-side logic.",
      },
      {
        period: "August 2024 — December 2025",
        role: "Support Specialist",
        company: "Cochan",
        description: "User support and resolving technical issues.",
      },
      {
        period: "2022 — August 2024",
        role: "Python Developer",
        company: "Freelance",
        description: "Building Python scripts and services for automation.",
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

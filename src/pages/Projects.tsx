import { motion } from "framer-motion";
import SideNav from "@/components/SideNav";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import { useLanguage } from "@/components/language-provider";

const content = {
  ru: {
    title: "Проекты",
    items: [
      {
        title: "Кочан",
        description: "Магазин цифровых товаров и VPN.",
        image: project1,
        href: "https://t.me/cochanshop",
      },
      {
        title: "ClipCollector",
        description: "Телеграм-бот для скачивания коротких видео из TikTok и YouTube.",
        image: project2,
      },
      {
        title: "CodaView",
        description: "Приложение для совместного просмотра видео.",
        image: project3,
      },
    ],
  },
  uk: {
    title: "Проєкти",
    items: [
      {
        title: "Кочан",
        description: "Магазин цифрових товарів і VPN.",
        image: project1,
        href: "https://t.me/cochanshop",
      },
      {
        title: "ClipCollector",
        description: "Телеграм-бот для завантаження коротких відео з TikTok та YouTube.",
        image: project2,
      },
      {
        title: "CodaView",
        description: "Застосунок для спільного перегляду відео.",
        image: project3,
      },
    ],
  },
  en: {
    title: "Projects",
    items: [
      {
        title: "Cochan",
        description: "Digital goods and VPN store.",
        image: project1,
        href: "https://t.me/cochanshop",
      },
      {
        title: "ClipCollector",
        description: "Telegram bot for downloading short videos from TikTok and YouTube.",
        image: project2,
      },
      {
        title: "CodaView",
        description: "Co-watching app for shared video viewing.",
        image: project3,
      },
    ],
  },
} as const;

const Projects = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background transition-colors py-8 px-4 pb-28 md:pb-8 md:px-8 flex items-start justify-center">
      <div className="w-full max-w-[1100px] grid grid-cols-[1fr] md:grid-cols-[1fr_70px] gap-4">
        <div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h1 className="text-4xl font-heading font-bold text-card-foreground mb-8">{t.title}</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.items.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="bento-card bg-card overflow-hidden"
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h2 className="font-heading font-bold text-card-foreground text-lg">{project.title}</h2>
                  <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <SideNav />
      </div>
    </div>
  );
};

export default Projects;

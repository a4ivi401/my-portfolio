import { Home, FolderOpen, Briefcase, MessageSquare, Moon, Sun, Languages } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { useLanguage, type Language } from "@/components/language-provider";

const navItems = [
  { icon: Home, to: "/", key: "home" },
  { icon: FolderOpen, to: "/projects", key: "projects" },
  { icon: Briefcase, to: "/experience", key: "experience" },
  { icon: MessageSquare, to: "/contacts", key: "contacts" },
];

const SideNav = () => {
  const location = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const labels = {
    ru: {
      home: "Главная",
      projects: "Проекты",
      experience: "Опыт",
      contacts: "Контакты",
      enableLight: "Включить светлую тему",
      enableDark: "Включить темную тему",
      language: "Язык",
    },
    uk: {
      home: "Головна",
      projects: "Проєкти",
      experience: "Досвід",
      contacts: "Контакти",
      enableLight: "Увімкнути світлу тему",
      enableDark: "Увімкнути темну тему",
      language: "Мова",
    },
    en: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      contacts: "Contacts",
      enableLight: "Enable light theme",
      enableDark: "Enable dark theme",
      language: "Language",
    },
  }[language];

  const languageOptions: Array<{ value: Language; label: string }> = [
    { value: "ru", label: "RU" },
    { value: "uk", label: "UK" },
    { value: "en", label: "EN" },
  ];
  const activeAccentClass = "bg-[hsl(210,90%,55%)] text-white";

  return (
    <nav className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0 md:right-[max(8px,calc((100vw-1100px)/2+8px))] md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col gap-2 sm:gap-3 md:gap-4">
      {navItems.map(({ icon: Icon, to, key }, i) => {
        const active = location.pathname === to;
        return (
          <div key={i}>
            <Link
              to={to}
              aria-label={labels[key as keyof typeof labels] as string}
              className={`w-12 h-12 sm:w-[58px] sm:h-[58px] md:w-[70px] md:h-[70px] rounded-[var(--radius)] flex items-center justify-center hover:scale-105 transition-transform ${active ? activeAccentClass : "bento-card"}`}
            >
              <Icon className={`w-6 h-6 ${active ? "text-white" : "text-card-foreground"}`} />
            </Link>
          </div>
        );
      })}

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? labels.enableLight : labels.enableDark}
        className="w-12 h-12 sm:w-[58px] sm:h-[58px] md:w-[70px] md:h-[70px] rounded-[var(--radius)] bento-card flex items-center justify-center hover:scale-105 transition-transform"
      >
        {isDark ? <Sun className="w-6 h-6 text-card-foreground" /> : <Moon className="w-6 h-6 text-card-foreground" />}
      </button>

      <div className="relative group h-12 w-12 sm:h-[58px] sm:w-[58px] md:h-[70px] md:w-[70px]">
        <div
          className="absolute right-0 bottom-full mb-2 flex flex-col items-center gap-2 bento-card px-2 py-2 opacity-0 translate-y-2 pointer-events-none transition-all duration-200 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto md:hidden"
          role="menu"
          aria-label={labels.language}
        >
          {languageOptions.map((option) => {
            const active = language === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setLanguage(option.value);
                  if (typeof document !== "undefined") {
                    (document.activeElement as HTMLElement | null)?.blur();
                  }
                }}
                aria-label={option.label}
                className={`h-10 w-12 text-xs font-heading font-semibold rounded-md transition-colors ${active ? activeAccentClass : "text-card-foreground hover:bg-muted"}`}
                role="menuitemradio"
                aria-checked={active}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={labels.language}
          className="md:hidden w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-[var(--radius)] bento-card flex items-center justify-center hover:scale-105 transition-transform"
        >
          <Languages className="w-6 h-6 text-card-foreground" />
        </button>

        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 top-0 h-full bento-card rounded-[var(--radius)] overflow-hidden">
          <div className="flex items-center transition-[width] duration-300 w-12 sm:w-[58px] md:w-[70px] group-hover:w-[228px]">
            <button
              type="button"
              aria-label={labels.language}
              className="shrink-0 w-12 h-12 sm:w-[58px] sm:h-[58px] md:w-[70px] md:h-[70px] flex items-center justify-center border-r border-border"
            >
              <Languages className="w-6 h-6 text-card-foreground" />
            </button>

            <div
              className="shrink-0 pl-1 pr-2 flex items-center gap-1 opacity-0 translate-x-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto"
              role="menu"
              aria-label={labels.language}
            >
              {languageOptions.map((option) => {
                const active = language === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setLanguage(option.value)}
                    aria-label={option.label}
                    className={`h-8 w-11 text-xs font-heading font-semibold rounded-md transition-colors ${active ? activeAccentClass : "text-card-foreground hover:bg-muted"}`}
                    role="menuitemradio"
                    aria-checked={active}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;

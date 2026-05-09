import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const timelineData = [
  {
    year: "Dec 2025 — Present",
    role: "FullStack Developer",
    company: "at Кочан",
    description: "Разработка и поддержка веб-сервисов, интерфейсов и серверной логики.",
  },
  {
    year: "Aug 2024 — Dec 2025",
    role: "Support Specialist",
    company: "at Онлайн-Школа Сила Голосу",
    description: "Поддержка пользователей и решение технических вопросов.",
  },
  {
    year: "2022 — Aug 2024",
    role: "Python Developer",
    company: "at Freelance",
    description: "Разработка скриптов и сервисов на Python для автоматизации.",
  },
]

const Experience = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-[860px] mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors px-4 py-2 bg-card rounded-full shadow-sm hover:shadow-md">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="w-full max-w-[860px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 tracking-tight"
        >
          Experience
        </motion.h1>

        <div className="relative pl-24 sm:pl-32">
          {/* Timeline Line */}
          <div className="absolute left-[47px] sm:left-[63px] top-4 bottom-4 w-[2px] bg-[#8B5CF6]/30"></div>

          <div className="flex flex-col gap-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Circle */}
                <div className="absolute -left-[72px] sm:-left-[88px] top-2 w-14 h-14 bg-[#8B5CF6] rounded-full flex items-center justify-center font-bold text-white text-xs sm:text-sm text-center p-2 leading-tight shadow-[0_0_15px_rgba(139,92,246,0.4)] z-10">
                  {item.year.split(" — ")[0]}
                </div>

                {/* Content Card */}
                <div className="bento-card p-6 sm:p-8 group hover:bg-secondary/10 transition-colors border border-white/5">
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="text-[#8B5CF6] font-medium text-sm mt-1 mb-4">{item.company}</p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

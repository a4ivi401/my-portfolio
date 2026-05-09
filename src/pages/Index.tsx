import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// Simple SVG Icons
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-muted-foreground transition-colors group-hover:text-foreground">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-muted-foreground transition-colors group-hover:text-[#0A66C2]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-muted-foreground transition-colors group-hover:text-[#FF0000]">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-muted-foreground transition-colors group-hover:text-[#E1306C]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-muted-foreground transition-colors group-hover:text-foreground">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const NotionIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
    <path d="M4.459 4.208c.746-.536 1.834-.633 3.32-.633h1.365l6.568 11.233V4.99c0-1.121-.365-1.365-1.637-1.462V2.553h6.81v.975c-1.12.097-1.51.341-1.51 1.462v13.593c0 1.072.39 1.365 1.51 1.462v.975h-5.068l-7.396-12.6v8.692c0 1.17.438 1.462 1.802 1.559v.975H3.143v-.975c1.267-.097 1.657-.39 1.657-1.56V5.67c0-1.17-.39-1.413-1.657-1.51v-.974h.025l1.291.022z" />
  </svg>
)

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="#2CA5E0" className="w-8 h-8">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.888-.667 3.473-1.512 5.79-2.511 6.951-2.997 3.304-1.382 3.99-1.621 4.432-1.629z" />
  </svg>
)

const MediumColoredIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
)


const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[860px] grid grid-cols-1 md:grid-cols-5 gap-4">

        {/* Row 1 */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bento-card col-span-1 md:col-span-4 p-8 flex flex-col justify-center min-h-[160px]"
        >
          <h1 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">Hey, I'm Oleksandr</h1>
          <p className="text-muted-foreground text-lg">Fullstack Developer</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bento-card col-span-1 md:col-span-1 flex items-center justify-center min-h-[160px] overflow-hidden p-4 bg-muted/10"
        >
          <span className="text-6xl select-none">👨🏻‍💻</span>
        </motion.div>

        {/* Row 2: Icons */}
        <div className="col-span-1 md:col-span-5 grid grid-cols-5 gap-4">
          <motion.a variants={cardVariants} initial="initial" animate="animate" transition={{ duration: 0.4, delay: 0.3 }} target="_blank" href="https://x.com/a4ivi4" className="group bento-card aspect-square flex items-center justify-center hover:bg-secondary/50">
            <XIcon />
          </motion.a>
          <motion.a variants={cardVariants} initial="initial" animate="animate" transition={{ duration: 0.4, delay: 0.35 }} target="_blank" href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%B1%D1%94%D0%BB%D1%96%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-98b484333/" className="group bento-card aspect-square flex items-center justify-center hover:bg-secondary/50">
            <LinkedInIcon />
          </motion.a>
          <motion.a variants={cardVariants} initial="initial" animate="animate" transition={{ duration: 0.4, delay: 0.4 }} target="_blank" href="https://www.youtube.com/@itsa4ivi4" className="group bento-card aspect-square flex items-center justify-center hover:bg-secondary/50">
            <YouTubeIcon />
          </motion.a>
          <motion.a variants={cardVariants} initial="initial" animate="animate" transition={{ duration: 0.4, delay: 0.45 }} target="_blank" href="https://instagram.com/belinskiy.inst" className="group bento-card aspect-square flex items-center justify-center hover:bg-secondary/50">
            <InstagramIcon />
          </motion.a>
          <motion.a variants={cardVariants} initial="initial" animate="animate" transition={{ duration: 0.4, delay: 0.5 }} target="_blank" href="https://github.com/a4ivi401" className="group bento-card aspect-square flex items-center justify-center hover:bg-secondary/50">
            <GitHubIcon />
          </motion.a>
        </div>

        {/* Row 3 */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.55 }}
          className="bento-card col-span-1 md:col-span-3 p-0 min-h-[260px] relative group overflow-hidden"
        >
          <Link to="/projects" className="block w-full h-full p-6 outline-none">
            <div className="flex justify-between items-start mb-6 z-10 relative">
              <h2 className="text-lg text-muted-foreground font-medium">Recent Works</h2>
              <div className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Mockup placeholders */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[110%] h-[120%] flex items-center justify-center gap-4 rotate-[-4deg] opacity-80 group-hover:opacity-100 transition-opacity">
              <div className="w-48 h-32 bg-white rounded-xl shadow-xl p-2 transform -rotate-6 translate-y-4 translate-x-4">
                <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-gray-200 rounded mb-1"></div>
                <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="w-56 h-40 bg-white rounded-xl shadow-2xl z-10 p-2 flex flex-col justify-between">
                <div>
                  <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                  <div className="flex gap-2 mb-2">
                    <div className="w-1/2 h-16 bg-gray-100 rounded"></div>
                    <div className="w-1/2 h-16 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="w-full h-6 bg-blue-100 rounded"></div>
              </div>
              <div className="w-48 h-32 bg-white rounded-xl shadow-xl p-2 transform rotate-6 translate-y-4 -translate-x-4">
                <div className="w-full h-4 bg-gray-100 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-gray-200 rounded mb-1"></div>
                <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bento-card col-span-1 md:col-span-2 p-6 min-h-[260px]"
        >
          <h2 className="text-lg text-muted-foreground font-medium mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-4 relative z-10">
            <span className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full font-medium">Python</span>
            <span className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full font-medium">TypeScript</span>
            <span className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full font-medium">C++</span>
            <span className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full font-medium">React</span>
            <span className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full font-medium">FastAPI</span>
            <span className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full font-medium">Node JS</span>
            <span className="bg-secondary text-secondary-foreground text-sm px-4 py-2 rounded-full font-medium">Docker</span>
          </div>
        </motion.div>

        {/* Row 4 */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.65 }}
          className="bento-card col-span-1 md:col-span-2 p-6 min-h-[220px] flex flex-col"
        >
          <h2 className="text-lg text-muted-foreground font-medium mb-6">Tools I use</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <div className="w-14 h-14 bg-[#1A1A1A] rounded-2xl flex items-center justify-center shadow-lg border border-white/5 hover:scale-110 transition-transform">
              <NotionIcon />
            </div>
            <div className="w-14 h-14 bg-[#1E1E1E] rounded-2xl flex items-center justify-center shadow-lg border border-white/5 hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-8 h-8" alt="Figma" />
            </div>
            <div className="w-14 h-14 bg-[#151515] rounded-2xl flex items-center justify-center shadow-lg border border-white/5 hover:scale-110 transition-transform">
              <MediumColoredIcon />
            </div>
            <div className="w-14 h-14 bg-[#222] rounded-2xl flex items-center justify-center shadow-lg border border-white/5 hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" className="w-8 h-8" alt="VSCode" />
            </div>
            <div className="w-14 h-14 bg-[#1A1A1A] rounded-2xl flex items-center justify-center shadow-lg border border-white/5 hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className="w-8 h-8" alt="Postman" />
            </div>
            <div className="w-14 h-14 bg-[#252525] rounded-2xl flex items-center justify-center shadow-lg border border-white/5 hover:scale-110 transition-transform">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-9 h-9" alt="Docker" />
            </div>
            <div className="w-14 h-14 bg-[#1E1E1E] rounded-2xl flex items-center justify-center shadow-lg border border-white/5 hover:scale-110 transition-transform">
              <TelegramIcon />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bento-card col-span-1 md:col-span-3 p-8 min-h-[220px] flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">Let's collab!</h2>
            <p className="text-muted-foreground text-sm max-w-[280px] leading-relaxed">
              Let's turn your idea into reality with my development experience!
            </p>
          </div>
          <Link to="/contacts" className="mt-6 flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full w-fit hover:bg-secondary/80 transition-colors text-sm font-medium outline-none focus:ring-2 focus:ring-ring">
            Send a message now!
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Row 5: Experience */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.75 }}
          className="bento-card col-span-1 md:col-span-5 p-6 md:p-8 min-h-[220px]"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Experience</h2>
            <Link to="/experience" className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1">View all <ArrowRight className="w-4 h-4" /></Link>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 border-l-2 border-[#8B5CF6]/30 pl-4 relative">
              <div className="absolute w-3 h-3 bg-[#8B5CF6] rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
              <p className="text-sm text-muted-foreground font-medium">Dec 2025 — Present</p>
              <h3 className="text-lg font-bold mt-1">FullStack Developer <span className="text-[#8B5CF6] text-sm ml-1">@Кочан</span></h3>
              <p className="text-sm text-muted-foreground mt-2">Разработка и поддержка веб-сервисов, интерфейсов и серверной логики.</p>
            </div>
            <div className="flex-1 border-l-2 border-[#8B5CF6]/30 pl-4 relative">
              <div className="absolute w-3 h-3 bg-[#8B5CF6]/50 rounded-full -left-[7px] top-1.5"></div>
              <p className="text-sm text-muted-foreground font-medium">Aug 2024 — Dec 2025</p>
              <h3 className="text-lg font-bold mt-1">Support Specialist <span className="text-[#8B5CF6] text-sm ml-1">@Сила Голосу</span></h3>
              <p className="text-sm text-muted-foreground mt-2">Поддержка пользователей и решение технических вопросов.</p>
            </div>
            <div className="flex-1 border-l-2 border-[#8B5CF6]/30 pl-4 relative">
              <div className="absolute w-3 h-3 bg-[#8B5CF6]/50 rounded-full -left-[7px] top-1.5"></div>
              <p className="text-sm text-muted-foreground font-medium">2022 — Aug 2024</p>
              <h3 className="text-lg font-bold mt-1">Python Developer <span className="text-[#8B5CF6] text-sm ml-1">@Freelance</span></h3>
              <p className="text-sm text-muted-foreground mt-2">Разработка скриптов и сервисов на Python для автоматизации.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Index

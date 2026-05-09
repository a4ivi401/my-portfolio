import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Link } from "react-router-dom"

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const Projects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-[860px] mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors px-4 py-2 bg-card rounded-full shadow-sm hover:shadow-md">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="w-full max-w-[860px] grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Project: Cochan */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col min-h-[240px] relative overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h2 className="text-2xl font-bold mb-2">Кочан</h2>
              <p className="text-muted-foreground max-w-md">Ecosystem with shop for digital goods and a VPN service.</p>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap gap-3 relative z-10">
            <a href="https://t.me/cochanshopbot" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors">
              Cochan Shop
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://t.me/cochanvpnbot" className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors">
              Cochan VPN
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Decorative element */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors pointer-events-none" />
        </motion.div>

        {/* Project: ClipCollector */}
        <motion.a
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.2 }}
          href="https://github.com/a4ivi401/ClipCollector"
          target="_blank"
          className="bento-card p-6 flex flex-col justify-between min-h-[220px] group hover:bg-secondary/10"
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">ClipCollector</h3>
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <p className="text-muted-foreground text-sm">Telegram bot for downloading short videos from TikTok and YouTube.</p>
          </div>
          <div className="mt-6 flex gap-2">
            <span className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">Python</span>
            <span className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">Telegram API</span>
          </div>
        </motion.a>

        {/* Project: Budget Tracker */}
        <motion.a
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#"
          target="_blank"
          className="bento-card p-6 flex flex-col justify-between min-h-[220px] group hover:bg-secondary/10"
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Budget Tracker Bot</h3>
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <p className="text-muted-foreground text-sm">Telegram bot to manage and track personal budget and daily expenses easily.</p>
          </div>
          <div className="mt-6 flex gap-2">
            <span className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">Python</span>
            <span className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">PostgreSQL</span>
          </div>
        </motion.a>

        {/* Project: Wolf3D Clone */}
        <motion.a
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
          href="https://github.com/a4ivi401/Wolf3D"
          target="_blank"
          className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between min-h-[160px] group hover:bg-secondary/10"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Wolfenstein 3D Clone</h3>
            <p className="text-muted-foreground max-w-md">A raycasting engine and 3D game inspired by classic Wolfenstein 3D.</p>
            <div className="mt-4 flex gap-2">
              <span className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">C#</span>
              <span className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">Raylib</span>
            </div>
          </div>

          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Github className="w-6 h-6" />
          </div>
        </motion.a>

      </div>
    </div>
  )
}

export default Projects

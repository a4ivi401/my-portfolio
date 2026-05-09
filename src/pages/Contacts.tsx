import { motion } from 'framer-motion'
import { Mail, Send, Github, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const Contacts = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'a4ivi4.mail@gmail.com',
      href: 'mailto:a4ivi4.mail@gmail.com',
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@a4ivi4inside',
      href: 'https://t.me/a4ivi4inside',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/a4ivi401',
      href: 'https://github.com/a4ivi401',
    },
  ]

  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col items-center p-4 sm:p-8'>
      <div className="w-full max-w-[860px] mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors px-4 py-2 bg-card rounded-full shadow-sm hover:shadow-md">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className='w-full max-w-[860px] grid grid-cols-1 md:grid-cols-3 gap-4'>
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4 }}
          className="col-span-1 md:col-span-3 mb-4"
        >
          <h1 className='text-4xl font-bold tracking-tight'>Contacts</h1>
        </motion.div>

        {contacts.map(({ icon: Icon, label, value, href }, i) => (
          <motion.a
            key={i}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            className='bento-card p-6 flex flex-col items-center justify-center gap-4 hover:bg-secondary/10 transition-colors min-h-[180px] text-center'
          >
            <div className="w-14 h-14 bg-secondary flex items-center justify-center rounded-2xl mb-2">
              <Icon className='w-7 h-7 text-foreground' />
            </div>
            <div>
              <p className='font-bold text-lg'>
                {label}
              </p>
              <p className='text-sm text-muted-foreground'>{value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Contacts

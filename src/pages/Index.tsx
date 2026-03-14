import portrait from '@/assets/portrait.png'
import { useEffect, useState } from 'react'
import {
	Github,
	Youtube,
	Instagram,
	Music,
	Send,
	AtSign,
	Mail,
} from 'lucide-react'
import { motion } from 'framer-motion'
import SideNav from '@/components/SideNav'
import { useLanguage } from '@/components/language-provider'

const card = (delay: number) => ({
	initial: { opacity: 0, y: 20, scale: 0.96 },
	animate: { opacity: 1, y: 0, scale: 1 },
	transition: {
		duration: 0.5,
		delay,
		ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
	},
})

const content = {
	ru: {
		about:
			'Junior Frontend Developer, студент факультета Software Engineering в КАИ. Сооснователь Cochan Organization.',
		link: 'Ссылка',
		emailLabel: 'Почта',
	},
	uk: {
		about:
			'Junior Frontend Developer, студент факультету Software Engineering у КАІ. Співзасновник Cochan Organization.',
		link: 'Посилання',
		emailLabel: 'Пошта',
	},
	en: {
		about:
			'Junior Frontend Developer, Software Engineering student at KAI. Co-founder of Cochan Organization.',
		link: 'Link',
		emailLabel: 'Email',
	},
} as const

const Index = () => {
	const { language } = useLanguage()
	const t = content[language]
	const playlistUrl = 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M'
	const [playlistCover, setPlaylistCover] = useState<string | null>(null)

	useEffect(() => {
		const controller = new AbortController()
		fetch(
			`https://open.spotify.com/oembed?url=${encodeURIComponent(playlistUrl)}`,
			{
				signal: controller.signal,
			},
		)
			.then(res => (res.ok ? res.json() : null))
			.then(data => {
				if (data?.thumbnail_url) {
					setPlaylistCover(data.thumbnail_url)
				}
			})
			.catch(() => {
				// Ignore failures; the card will show the fallback.
			})
		return () => controller.abort()
	}, [playlistUrl])

	return (
		<div className='min-h-screen bg-background transition-colors py-6 px-4 pb-28 sm:px-6 md:py-8 md:pb-8 md:px-8 flex items-center justify-center'>
			<div className='w-full max-w-[1100px] grid grid-cols-[1fr] md:grid-cols-[300px_1fr_70px] gap-4'>
				<motion.div
					{...card(0)}
					className='bento-card bg-card p-5 sm:p-6 flex flex-col gap-6 md:justify-between min-h-[360px] sm:min-h-[420px] md:min-h-[600px]'
				>
					<div>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-muted mx-auto md:mx-0 overflow-hidden mb-5 sm:mb-6'
						>
							<img
								src={portrait}
								alt='Bielinskiy Oleksandr'
								className='w-full h-full object-cover'
							/>
						</motion.div>
						<h1 className='text-3xl font-heading font-bold text-card-foreground'>
							Bielinskiy Oleksandr
						</h1>
						<p className='text-muted-foreground text-sm mt-2 leading-relaxed'>
							{t.about}
						</p>
					</div>
					<p className='text-muted-foreground text-xs md:mt-8'>© 2026 a4ivi4</p>
				</motion.div>

				<div className='flex flex-col gap-4'>
					<div className='grid grid-cols-2 gap-3 sm:gap-4'>
						<motion.a
							{...card(0.1)}
							href='https://github.com/a4ivi401'
							className='bento-card bg-card p-4 sm:p-5 flex flex-col items-center justify-center md:items-start md:justify-between min-h-[96px] md:min-h-[140px] text-center md:text-left'
						>
							<Github className='w-9 h-9 text-card-foreground' />
							<div className='hidden md:block'>
								<p className='font-heading font-bold text-card-foreground mt-3'>
									GitHub
								</p>
								<span className='inline-flex items-center justify-center mt-2 w-full sm:w-auto px-4 sm:px-6 py-2 bg-card-foreground text-card text-sm font-heading font-medium rounded-full'>
									{t.link}
								</span>
							</div>
							<span className='sr-only'>GitHub</span>
						</motion.a>
						<motion.a
							{...card(0.15)}
							href='mailto:a4ivi4.mail@gmail.com'
							className='bento-card bg-card p-4 sm:p-5 min-h-[96px] md:min-h-[140px] flex flex-col items-center justify-center md:items-start md:justify-between text-center md:text-left'
						>
							<Mail className='w-8 h-8 text-card-foreground' />
							<div className='hidden md:block'>
								<p className='font-heading font-bold text-card-foreground mt-3'>
									{t.emailLabel}
								</p>
								<span className='inline-flex items-center justify-center mt-2 w-full sm:w-auto px-4 sm:px-6 py-2 bg-card-foreground text-card text-sm font-heading font-medium rounded-full'>
									{t.link}
								</span>
							</div>
							<span className='sr-only'>{t.emailLabel}</span>
						</motion.a>
						<motion.a
							{...card(0.2)}
							href='https://www.youtube.com/@itsa4ivi4'
							className='bento-card bg-card p-4 sm:p-5 flex items-center justify-center md:justify-between md:flex-col md:items-start min-h-[96px] md:min-h-[140px]'
						>
							<div className='flex items-center gap-3 md:gap-4'>
								<Youtube className='w-8 h-8 text-[hsl(0,80%,50%)]' />
								<span className='hidden md:inline font-heading font-bold text-card-foreground'>
									YouTube
								</span>
							</div>
							<span className='hidden md:inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-2 bg-card-foreground text-card text-sm font-heading font-medium rounded-full'>
								{t.link}
							</span>
							<span className='sr-only'>YouTube</span>
						</motion.a>
						<motion.a
							{...card(0.25)}
							href={playlistUrl}
							className='bento-card bg-card p-4 sm:p-5 flex items-center justify-center md:items-start md:justify-between md:flex-col min-h-[96px] md:min-h-[140px]'
						>
							<Music className='w-9 h-9 text-[hsl(141,70%,40%)]' />
							<div className='hidden md:flex w-full flex-col gap-3'>
								<p className='font-heading font-bold text-card-foreground'>
									Spotify Playlist
								</p>
								<div className='rounded-[12px] overflow-hidden border border-border bg-muted/20 h-28'>
									{playlistCover ? (
										<img
											src={playlistCover}
											alt='Spotify playlist cover'
											className='w-full h-full object-cover'
											loading='lazy'
										/>
									) : (
										<div className='w-full h-full flex items-center justify-center text-muted-foreground text-sm'>
											Loading cover...
										</div>
									)}
								</div>
								<span className='inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-2 bg-card-foreground text-card text-sm font-heading font-medium rounded-full'>
									Open in Spotify
								</span>
							</div>
							<span className='sr-only'>Spotify Playlist</span>
						</motion.a>
					</div>

					<div className='grid grid-cols-2 gap-4'>
						{[
							{ icon: Youtube, bg: 'hsl(0,70%,80%)', delay: 0.3 },
							{
								icon: Instagram,
								bg: 'hsl(330,60%,82%)',
								delay: 0.35,
								href: 'https://instagram.com/belinskiy.inst',
							},
							{
								icon: Send,
								bg: 'hsl(195,80%,70%)',
								delay: 0.4,
								href: 'https://t.me/a4ivi4inside',
							},
							{
								icon: AtSign,
								bg: 'hsl(0,0%,20%)',
								delay: 0.45,
								href: 'https://www.threads.net/@belinskiy.inst',
							},
						].map(({ icon: Icon, bg, delay, href }, i) => (
							<motion.a
								key={i}
								{...card(delay)}
								href={href || 'https://www.youtube.com/@itsa4ivi4'}
								className='bento-card flex items-center justify-center min-h-[110px] sm:min-h-[130px] hover:scale-[1.03] transition-transform'
								style={{ backgroundColor: bg }}
							>
								<Icon className='w-12 h-12 text-primary-foreground' />
							</motion.a>
						))}
					</div>
				</div>

				<SideNav />
			</div>
		</div>
	)
}

export default Index

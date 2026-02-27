'use client';

import { LINKS, STATS } from '@/constants/profile';
import { motion } from 'motion/react';
import { IoArrowDown } from 'react-icons/io5';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import { ScrollIndicator } from '../common/scroll-indicator';
import { BackgroundGlow } from '../common/background-glow';

export const HeroSection = () => {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center overflow-hidden bg-[linear-gradient(160deg,#06060e_0%,#0a0a1a_50%,#06060e_100%)]"
		>
			<BackgroundGlow />

			<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-size-[60px_60px] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]" />

			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
					<div className="flex flex-col gap-8">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/3 backdrop-blur-sm mb-6">
								<span className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse" />
								<span className="text-white/50 text-[13px] font-medium tracking-[0.05em]">
									IT Consultant at Liferay
								</span>
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.9,
								delay: 0.3,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="text-white font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em]"
						>
							Hi, I'm{' '}
							<span className="bg-linear-to-r from-[#00d4ff] via-[#a855f7] to-[#f472b6] bg-clip-text text-transparent">
								Jeongkyu
							</span>
							.
							<br />
							<span className="text-white/40">I build enterprise</span>
							<br />
							<span className="text-white/40">portals at scale.</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="max-w-md text-white/40 text-sm"
						>
							Trilingual IT Consultant with 5+ years specializing in React
							applications and modernizing legacy enterprise systems. Bridging
							technical execution with business strategy from Tokyo.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.7 }}
							className="flex items-center gap-4 flex-wrap"
						>
							<a
								href="#experience"
								className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-linear-to-r from-[#00d4ff] to-[#a855f7] text-[#06060e] transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-[1.02] text-sm font-medium"
							>
								See My Work
								<IoArrowDown
									size={16}
									className="group-hover:translate-y-0.5 transition-transform"
								/>
							</a>
							<div className="flex items-center gap-2">
								{[
									{ icon: LuGithub, href: 'https://github.com/jlee0425', label: 'GitHub' },
									{ icon: LuLinkedin, href: 'https://www.linkedin.com/in/jlee0425/', label: 'LinkedIn' },
								].map(({ icon: Icon, href, label }) => (
									<a
										key={label}
										href={href}
										className="p-3 rounded-full border border-white/10 text-white/40 hover:text-[`#00d4ff`] hover:border-[`#00d4ff`]/30 hover:bg-[`#00d4ff`]/5 transition-all"
										aria-label={label}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Icon size={16} />
									</a>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 1 }}
							className="flex items-center gap-8 mt-4 pt-8 border-t border-white/5"
						>
							{STATS.map(({ value, label }, i) => (
								<div key={i} className="flex flex-col">
									<span className="bg-linear-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent font-bold text-2xl">
										{value}
									</span>
									<span className="text-white/30 text-sm font-medium">
										{label}
									</span>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</div>

			<ScrollIndicator />
		</section>
	);
};

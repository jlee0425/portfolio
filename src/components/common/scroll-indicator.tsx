'use client';

import { motion } from 'motion/react';

export const ScrollIndicator = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 2 }}
			className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
		>
			<span className="text-white/20 text-[11px] tracking-[0.15em] font-medium">
				SCROLL
			</span>
			<motion.div
				animate={{ y: [0, 8, 0] }}
				transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
				className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
			>
				<div className="w-1 h-2 rounded-full bg-[#00d4ff]/60" />
			</motion.div>
		</motion.div>
	);
};

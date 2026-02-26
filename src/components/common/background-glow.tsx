export const BackgroundGlow = () => {
	return (
		<>
			<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00d4ff]/5 blur-[120px] pointer-events-none" />
			<div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#a855f7]/5 blur-[120px] pointer-events-none" />
			<div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#22d3ee]/3 blur-[100px] pointer-events-none" />
		</>
	);
};

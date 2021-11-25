import React from 'react';
import Particles from 'react-tsparticles';

const index = () => (
	<Particles
		options={{
			autoPlay: true,
			background: {
				color: {
					value: '#0d48a10',
				},
				image: '',
				position: '50% 50%',
				repeat: 'no-repeat',
				size: 'cover',
				opacity: 0.2,
			},
			backgroundMask: {
				composite: 'destination-out',
				cover: {
					color: {
						value: '#a5a9cf',
					},
					opacity: 1,
				},
				enable: false,
			},
			fullScreen: {
				enable: true,
				zIndex: -100,
			},
			detectRetina: true,
			fpsLimit: 60,
			motion: {
				disable: false,
				reduce: {
					factor: 4,
					value: true,
				},
			},
			particles: {
				color: {
					value: '#82d2e630',
					animation: {
						h: {
							count: 0,
							enable: false,
							offset: 0,
							speed: 1,
							sync: true,
						},
						s: {
							count: 0,
							enable: false,
							offset: 0,
							speed: 1,
							sync: true,
						},
						l: {
							count: 0,
							enable: false,
							offset: 0,
							speed: 1,
							sync: true,
						},
					},
				},
				links: {
					color: {
						value: '#fff',
					},
					consent: true,
					distance: 100,
					enable: true,
					frequency: 1,
					opacity: 0.2,
					shadow: {
						blur: 5,
						color: {
							value: '#aae5e9',
						},
						enable: true,
					},
					width: 1,
				},
				move: {
					angle: {
						offset: 45,
						value: 90,
					},
					attract: {
						distance: 300,
						enable: true,
						rotate: {
							x: 3000,
							y: 3000,
						},
					},
					direction: 'none',
					enable: true,
					outModes: {
						default: 'out',
					},
					speed: 1,
				},
				number: {
					density: {
						enable: true,
						area: 800,
						factor: 1000,
					},
					limit: 0,
					value: 50,
				},
				opacity: {
					random: {
						enable: true,
						minimumValue: 0.1,
					},
					value: 1,
					animation: {
						count: 0,
						enable: true,
						speed: 1,
						sync: false,
						destroy: 'none',
						minimumValue: 0,
						startValue: 'random',
					},
				},
				reduceDuplicates: false,
				shape: {
					options: {},
					type: 'circle',
				},
				size: {
					value: 2,
				},
				stroke: {
					width: 0,
				},
			},
			pauseOnBlur: true,
			pauseOnOutsideViewport: true,
		}}
	/>
);

export default index;

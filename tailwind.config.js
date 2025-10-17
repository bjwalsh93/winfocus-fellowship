/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#0f172a', // Dark blue
					light: '#1e293b', // Lighter dark blue
					dark: '#020617' // Very dark blue
				},
				secondary: {
					DEFAULT: '#0891b2', // Cyan
					light: '#06b6d4', // Light cyan
					dark: '#0e7490' // Dark cyan
				},
				dark: '#0f172a',
				gray: {
					light: '#f8fafc',
					DEFAULT: '#64748b'
				},
				blue: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
					950: '#172554'
				}
			},
			fontFamily: {
				sans: ['Montserrat', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: []
};

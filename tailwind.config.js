/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1e40af',
					light: '#3b82f6',
					dark: '#1e3a8a'
				},
				dark: '#1e293b',
				gray: {
					light: '#f8fafc',
					DEFAULT: '#64748b'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			}
		}
	},
	plugins: []
};

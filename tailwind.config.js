/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			fonte_legal: ['Roboto Mono', 'monospace'],
			fonte_foda: ['Arial', 'sans-serif']
		},
		extend: {
			spacing: {
				30: '7.5rem',
				'290px': '290px',
				'396px': '396px',
				'500px': '500px',
				'980px': '980px'
			}
		}
	},
	plugins: []
};

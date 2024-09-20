import { Layout } from "lucide-react";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				border: 'rgba(255, 255, 255, .12)',
				white: 'rgb(214, 214, 214)',
			},
			padding: {
				layout: '1.25rem'
			}
		},
	},
	plugins: [],
}
export default config;

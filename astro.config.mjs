// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight';

export default defineConfig({
	site: 'https://mozhars.garden',
	integrations: [
		starlight({
			plugins: [starlightCatppuccin()],
			title: 'Mozhar\'s Garden',
			social: [ { icon: 'github', label: 'GitHub', href: 'https://github.com/MozharAlhosni/MozharsGarden' } ],
			sidebar: 
			[
				{
					label: 'Computer Science',
					autogenerate: { directory: 'Computer_Science'},
					collapsed: true
				},
				{
					label: 'HTB Walkthroughs',
					autogenerate: { directory: 'HTB_Walkthroughs' },
					collapsed: true
				},
				{
					label: 'Intelligence Gathering',
					autogenerate: { directory: 'Intelligence_Gathering' },
					collapsed: true
				},
				{
					label: 'Law',
					autogenerate: { directory: 'Law' },
					collapsed: true
				},
				{
					label: 'Literature',
					autogenerate: { directory: 'Literature' },
					collapsed: true
				},
				{
					label: 'Management',
					autogenerate: { directory: 'Management' },
					collapsed: true
				},
				{
					label: 'Misc',
					autogenerate: { directory: 'Misc' },
					collapsed: true
				},
				{
					label: 'Professional Life',
					autogenerate: { directory: 'Professional_Life' },
					collapsed: true
				},
				{
					label: 'Psychology',
					autogenerate: { directory: 'Psychology' },
					collapsed: true
				},
			],
		}),
	],
});

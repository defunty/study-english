// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
		// devServerFileWatcher([
		// 	'./config/*', // Custom plugins and integrations
		// 	'./astro.sidebar.ts', // Sidebar configuration file
		// 	'./src/content/nav/*.ts', // Sidebar labels
		// ]),
		starlight({
			title: 'Study English',
			// expressiveCode: {
			// 	plugins: [pluginCollapsibleSections()],
			// },
			// components: {
			// 	EditLink: './src/components/starlight/EditLink.astro',
			// 	Head: './src/components/starlight/Head.astro',
			// 	Hero: './src/components/starlight/Hero.astro',
			// 	MarkdownContent: './src/components/starlight/MarkdownContent.astro',
			// 	MobileTableOfContents: './src/components/starlight/MobileTableOfContents.astro',
			// 	TableOfContents: './src/components/starlight/TableOfContents.astro',
			// 	PageSidebar: './src/components/starlight/PageSidebar.astro',
			// 	Pagination: './src/components/starlight/Pagination.astro',
			// 	Footer: './src/components/starlight/Footer.astro',
			// 	SiteTitle: './src/components/starlight/SiteTitle.astro',
			// 	Search: './src/components/starlight/Search.astro',
			// 	Sidebar: './src/components/starlight/Sidebar.astro',
			// 	MobileMenuFooter: './src/components/starlight/MobileMenuFooter.astro',
			// 	PageTitle: './src/components/starlight/PageTitle.astro',
			// },
			// editLink: {
			// 	baseUrl: 'https://github.com/withastro/docs/edit/main',
			// },
			// defaultLocale: 'en',
			// locales: makeLocalesConfig(),
			// sidebar,
			// social: {
			// 	github: 'https://github.com/withastro/astro',
			// 	discord: 'https://astro.build/chat',
			// },
			// pagefind: false,
			// head: [
			// 	// Add ICO favicon fallback for Safari.
			// 	{
			// 		tag: 'link',
			// 		attrs: {
			// 			rel: 'icon',
			// 			href: '/favicon.ico',
			// 			sizes: '32x32',
			// 		},
			// 	},
			// ],
			disable404Route: true,
			// plugins: [starlightPluginAutolinkHeadings()],
		}),
		// sitemap(),
	],
	// trailingSlash: 'always',
	// scopedStyleStrategy: 'where',
	// compressHTML: false,
	// markdown: {
	// 	// Override with our own config
	// 	smartypants: false,
	// 	remarkPlugins: [
	// 		[remarkSmartypants, { dashes: false }],
	// 		// Add our custom plugin that marks links to fallback language pages
	// 		remarkFallbackLang(),
	// 	],
	// 	rehypePlugins: [
	// 		rehypeSlug,
	// 		// Tweak GFM task list syntax
	// 		rehypeTasklistEnhancer(),
	// 	],
	// },
	// image: {
	// 	domains: ['avatars.githubusercontent.com'],
	//  service: sharpImageService(),
	// },
});

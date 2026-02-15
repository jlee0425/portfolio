import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		files: ['src/**/*.ts', 'src/**/*.tsx'],
		plugins: {
			import: importPlugin,
		},
		rules: {
			'import/order': [
				'error',
				{
					groups: [
						'builtin',
						'external',
						'internal',
						['parent', 'sibling'],
						'index',
					],
					'newlines-between': 'always',
					pathGroups: [
						{
							pattern: 'react',
							group: 'external',
							position: 'before',
						},
						{
							pattern: '@/**',
							group: 'internal',
						},
					],
					pathGroupsExcludedImportTypes: ['react'],
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
			'import/no-duplicates': 'error',
			'import/no-unused-modules': 'warn',
			'import/first': 'error',
			'import/newline-after-import': 'error',
		},
	},
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
	]),
]);

export default eslintConfig;

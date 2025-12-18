const projects = [
	{
		name: 'Alpine Telemetrics',
		tag: 'projectsTagProfessional',
		technologies: ['SwiftUI'],
		appstore: 'https://apps.apple.com/fr/app/alpine-telemetrics-mobile/id6523429088',
		website: 'https://www.alpinecars.fr/connected-services/telemetrics.html',
		github: '',
		backgroundColour: '#0b2533',
		textColour: '#ffffff',
		description: 'projectsDescriptionAlpine'
	},
	{
		name: 'Reepair',
		tag: 'projectsTagProfessional',
		technologies: ['Flutter'],
		appstore: '',
		website: 'https://reepair.com',
		github: '',
		backgroundColour: '#2f2b6c',
		textColour: '#ffffff',
		description: 'projectsDescriptionReepair'
	},
	{
		name: 'The Optimum Prod',
		tag: 'projectsTagProfessional',
		technologies: ['Flutter'],
		appstore: 'https://apps.apple.com/fr/app/top-the-optimum-prod/id6535690569',
		website: 'https://theoptimumprod.ch',
		github: '',
		backgroundColour: '#68c083',
		textColour: '#141416',
		description: 'projectsDescriptionTOP'
	},
	{
		name: 'Savy',
		tag: 'projectsTagSchool',
		technologies: ['SwiftUI', 'Svelte', 'Figma'],
		appstore: 'https://apps.apple.com/fr/app/savy-parle-pour-apprendre/id6744904742',
		website: 'https://savy-ai.com',
		github: 'https://github.com/Savy-EIP',
		backgroundColour: '#9149f6',
		textColour: '#ffffff',
		description: 'projectsDescriptionSavy'
	},
	{
		name: 'Maker',
		tag: 'projectsTagSchool',
		technologies: ['Flutter'],
		appstore: '',
		website: '',
		github: 'https://github.com/UwUClub/AwARea',
		backgroundColour: '#da535e',
		textColour: '#e1e1e1',
		description: 'projectsDescriptionMaker'
	},
	{
		name: 'Egofolio',
		tag: 'projectsTagPersonal',
		technologies: ['Svelte'],
		appstore: '',
		website: 'https://deltort.net',
		github: 'https://github.com/LucaDeltort/egofolio',
		backgroundColour: '#102ea0',
		textColour: '#ffffff',
		description: 'projectsDescriptionEgofolio'
	},
	{
		name: 'Qui de nous ?',
		tag: 'projectsTagPersonal',
		technologies: ['Svelte'],
		appstore: '',
		website: 'https://who-among-us.deltort.net',
		github: 'https://github.com/LucaDeltort/who-among-us',
		backgroundColour: '#ecf3f9',
		textColour: '#578fc9',
		description: 'projectsDescriptionWAU'
	}
];

class Project {
	name: string;
	tag: string;
	technologies: string[];
	appstore: string;
	website: string;
	github: string;
	backgroundColour: string;
	textColour: string;
	description: string;

	constructor(
		name: string,
		tag: string,
		technologies: string[],
		appstore: string,
		website: string,
		github: string,
		backgroundColour: string,
		textColour: string,
		description: string
	) {
		this.name = name;
		this.tag = tag;
		this.technologies = technologies;
		this.appstore = appstore;
		this.website = website;
		this.github = github;
		this.backgroundColour = backgroundColour;
		this.textColour = textColour;
		this.description = description;
	}
}

const listProjects = projects.map(
	(project) =>
		new Project(
			project.name,
			project.tag,
			project.technologies,
			project.appstore,
			project.website,
			project.github,
			project.backgroundColour,
			project.textColour,
			project.description
		)
);

export { Project, listProjects };

import type { Component } from 'svelte';

export interface ImageSources {
	[key: string]: {
		sources: any;
		img: any;
	};
}

export interface TeamMemberMeta {
	name: string;
	volgnummer: number;
}

export interface TeamMemberModule {
	default: Component;
	metadata: TeamMemberMeta;
}
export interface TeamMember {
	path: string;
	meta: TeamMemberMeta;
	content: Component;
}

export interface ImageModule {
	default: {
		sources: any;
		img: any;
	};
}

export interface BlogMeta {
	title: string;
	img: string;
	alt: string;
	date: string;
	intro: string;
	credits: string;
	tags: string[];
	categories: string[];
	english_title: string;
}
export interface BlogModule {
	default: Component;
	metadata: BlogMeta;
}
export interface Blog {
	path: string;
	name: string;
	meta: BlogMeta;
	content: Component;
}

// Alias for compatibility
export type BlogPost = {
	meta: BlogMeta;
	path: string;
};

export interface TrainingMeta {
	title: string;
	img: string;
	alt: string;
	volgnummer: number;
	springest?: string;
}
export interface Training {
	path: string;
	name: string;
	meta: TrainingMeta;
	content: Component;
}
export interface TrainingModule {
	default: Component;
	metadata: TrainingMeta;
}
export interface CoachingMeta {
	title: string;
	img: string;
	alt: string;
	volgnummer: number;
}
export interface Coaching {
	path: string;
	name: string;
	meta: CoachingMeta;
	content: Component;
}
export interface CoachingModule {
	default: Component;
	metadata: CoachingMeta;
}
export interface OpdrachtgeverModule {
	default: {
		opdrachtgever: string;
		url: string;
	};
	opdrachtgever: string;
	url: string;
}

export interface Opdrachtgever {
	name: string;
	opdrachtgever: string;
	url: string;
}

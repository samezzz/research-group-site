export interface Student {
	name: string
	avatar: string
	year: number
	project: string
	interests: string[]
	email: string
	website: string
}

export interface StudentCardProps {
	student: Student
}

export interface Project {
	id: number
	title: string
	description: string
	fullDescription: string
	imageUrl: string
}

export interface ProjectCardProps {
	project: Project
}

export interface Publication {
	id: number
	title: string
	authors: string[]
	journal: string
	year: number
	type: string
	link: string
}

export interface Presentation {
	id: number
	title: string
	presenters: string[]
	conference: string
	date: string
	type: string
	abstract: string
}

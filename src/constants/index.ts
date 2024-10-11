import { Project, Student, Publication, Presentation } from "@/types"
import { ArrowRight, Beaker, Brain, Dna, Microscope, Atom, Zap } from 'lucide-react'

export const ongoingProjects: Project[] = [
	{
		id: 1,
		title: "HEART",
		description: "A revolutionary new app for productivity.",
		fullDescription: "Project Alpha is a cutting-edge productivity application designed to streamline your workflow and boost efficiency. With its intuitive interface and powerful features, it's set to transform how you manage your tasks and time.",
		imageUrl: "/placeholder.svg?height=400&width=600"
	},
	{
		id: 2,
		title: "UTI",
		description: "Innovative solution for data analysis.",
		fullDescription: "Project Beta leverages advanced algorithms and machine learning to provide unparalleled insights from your data. It's designed for businesses of all sizes looking to make data-driven decisions.",
		imageUrl: "/placeholder.svg?height=400&width=600"
	},
	{
		id: 3,
		title: "PULSE",
		description: "Next-gen social networking platform.",
		fullDescription: "Project Gamma is reimagining social connections in the digital age. With a focus on privacy and meaningful interactions, it's poised to become the go-to platform for authentic online relationships.",
		imageUrl: "/placeholder.svg?height=400&width=600"
	},
	{
		id: 4,
		title: "SLAM",
		description: "Revolutionary approach to e-learning.",
		fullDescription: "Project Delta is transforming online education with its adaptive learning technology. Tailored to each student's needs, it provides a personalized learning experience that maximizes engagement and retention.",
		imageUrl: "/placeholder.svg?height=400&width=600"
	}
]

export const completedProjects: Project[] = [
	{
		id: 1,
		title: "Hyperchat",
		description: "A revolutionary new app for productivity.",
		fullDescription: "Project Alpha is a cutting-edge productivity application designed to streamline your workflow and boost efficiency. With its intuitive interface and powerful features, it's set to transform how you manage your tasks and time.",
		imageUrl: "/placeholder.svg?height=400&width=600"
	},
	{
		id: 2,
		title: "Biosensor 1.0",
		description: "Innovative solution for data analysis.",
		fullDescription: "Project Beta leverages advanced algorithms and machine learning to provide unparalleled insights from your data. It's designed for businesses of all sizes looking to make data-driven decisions.",
		imageUrl: "/placeholder.svg?height=400&width=600"
	},
	{
		id: 3,
		title: "Toufiq's Project",
		description: "Next-gen social networking platform.",
		fullDescription: "Project Gamma is reimagining social connections in the digital age. With a focus on privacy and meaningful interactions, it's poised to become the go-to platform for authentic online relationships.",
		imageUrl: "/placeholder.svg?height=400&width=600"
	},
	{
		id: 4,
		title: "Project Delta",
		description: "Revolutionary approach to e-learning.",
		fullDescription: "Project Delta is transforming online education with its adaptive learning technology. Tailored to each student's needs, it provides a personalized learning experience that maximizes engagement and retention.",
		imageUrl: "/placeholder.svg?height=400&width=600"
	}
]

export const currentStudents: Student[] = [
	{
		name: "Robert Owusu",
		avatar: "/placeholder.svg?height=100&width=100",
		year: 2024,
		project: "Machine Learning for Climate Prediction",
		interests: ["AI", "Climate Science", "Data Visualization"],
		email: "alice.johnson@university.edu",
		website: "https://alicejohnson.com"
	},
	{
		name: "Patricia Ngako",
		avatar: "/placeholder.svg?height=100&width=100",
		year: 2023,
		project: "Quantum Computing Algorithms",
		interests: ["Quantum Physics", "Algorithm Design", "Cryptography"],
		email: "bob.smith@university.edu",
		website: "https://bobsmith.dev"
	},
	{
		name: "Lilian Botchway",
		avatar: "/placeholder.svg?height=100&width=100",
		year: 2023,
		project: "Quantum Computing Algorithms",
		interests: ["Quantum Physics", "Algorithm Design", "Cryptography"],
		email: "bob.smith@university.edu",
		website: "https://bobsmith.dev"
	},
	{
		name: "Calvert Addy",
		avatar: "/placeholder.svg?height=100&width=100",
		year: 2023,
		project: "Quantum Computing Algorithms",
		interests: ["Quantum Physics", "Algorithm Design", "Cryptography"],
		email: "bob.smith@university.edu",
		website: "https://bobsmith.dev"
	},
	{
		name: "Mimi Gariba",
		avatar: "/placeholder.svg?height=100&width=100",
		year: 2023,
		project: "Quantum Computing Algorithms",
		interests: ["Quantum Physics", "Algorithm Design", "Cryptography"],
		email: "bob.smith@university.edu",
		website: "https://bobsmith.dev"
	},
	{
		name: "Vicentia",
		avatar: "/placeholder.svg?height=100&width=100",
		year: 2023,
		project: "Quantum Computing Algorithms",
		interests: ["Quantum Physics", "Algorithm Design", "Cryptography"],
		email: "bob.smith@university.edu",
		website: "https://bobsmith.dev"
	},
]

export const pastStudents: Student[] = [
	{
		name: "Eyram",
		avatar: "/placeholder.svg?height=100&width=100",
		year: 2024,
		project: "Machine Learning for Climate Prediction",
		interests: ["AI", "Climate Science", "Data Visualization"],
		email: "alice.johnson@university.edu",
		website: "https://alicejohnson.com"
	},
	{
		name: "Toufique",
		avatar: "/placeholder.svg?height=100&width=100",
		year: 2023,
		project: "Quantum Computing Algorithms",
		interests: ["Quantum Physics", "Algorithm Design", "Cryptography"],
		email: "bob.smith@university.edu",
		website: "https://bobsmith.dev"
	},
	{
		name: "Audrey",
		avatar: "/placeholder.svg?height=100&width=100",
		year: 2023,
		project: "Quantum Computing Algorithms",
		interests: ["Quantum Physics", "Algorithm Design", "Cryptography"],
		email: "bob.smith@university.edu",
		website: "https://bobsmith.dev"
	},
]

export const publications: Publication[] = [
	{
		id: 1,
		title: "Pub 1",
		authors: ["Lilian", "Robert"],
		journal: "Journal Something Something",
		year: 2024,
		type: "Research",
		link: "link to publication",
	},
	{
		id: 2,
		title: "Pub 2",
		authors: ["Lilian", "Robert"],
		journal: "Journal Something Something",
		year: 2024,
		type: "Research",
		link: "link to publication",
	},
	{
		id: 3,
		title: "Pub 3",
		authors: ["Lilian", "Robert"],
		journal: "Journal Something Something",
		year: 2024,
		type: "Research",
		link: "link to publication",
	},
]

export const presentations: Presentation[] = [
	{
		id: 1,
		title: "Presentation 1",
		presenters: ["Calvert, Bofa"],
		conference: "Some Conference",
		date: "12/03/2024",
		type: "type of conference",
		abstract: "Abstract of conference",
	},
	{
		id: 2,
		title: "Presentation 2",
		presenters: ["Calvert, Bofa"],
		conference: "Some Conference",
		date: "12/03/2024",
		type: "type of conference",
		abstract: "Abstract of conference",
	},
]

export const researchAreas = [
	{ name: 'Quantum Biology', icon: Atom },
	{ name: 'Neurotechnology', icon: Brain },
	{ name: 'Synthetic Biology', icon: Dna },
	{ name: 'Nanomedicine', icon: Microscope },
	{ name: 'Bioenergy', icon: Zap },
]


export const collaborators = [
	{
		name: "Dr. Jane Smith",
		role: "Principal Investigator",
		affiliation: "University of Science",
		description: "Expert in quantum computing with over 15 years of experience.",
		image: "/placeholder.svg?height=100&width=100"
	},
	{
		name: "Prof. John Doe",
		role: "Senior Researcher",
		affiliation: "Tech Institute",
		description: "Specializes in machine learning algorithms and their applications.",
		image: "/placeholder.svg?height=100&width=100"
	},
	{
		name: "Dr. Emily Brown",
		role: "Postdoctoral Researcher",
		affiliation: "Global Research Center",
		description: "Focuses on the intersection of AI and renewable energy.",
		image: "/placeholder.svg?height=100&width=100"
	},
	{
		name: "Alex Johnson",
		role: "PhD Candidate",
		affiliation: "University of Innovation",
		description: "Researching novel approaches to natural language processing.",
		image: "/placeholder.svg?height=100&width=100"
	}
]

export const partners = [
	"University of Science",
	"Tech Institute",
	"Global Research Center",
	"University of Innovation",
	"National Science Foundation",
	"Department of Energy"
]

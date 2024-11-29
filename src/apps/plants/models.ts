export interface Plant {
	plantScientificName: string;
	description: string;
	classification: Classification;
}

export interface Classification {
	kingdom: string;
	division: string;
	class: string;
	order: string;
	family: string;
	genus: string;
	species: string;
}

export interface Disease {
  diseaseScientificName: string;
  description: string;
  classification: Classification;
  persticide: string[];
  relatedArticles: Article[];
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

export interface Article {
  title: string;
  url: string;
  abstract: string;
}


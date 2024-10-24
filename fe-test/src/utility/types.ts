type Author = {
  id: string;
  type: string;
  attributes: {
    fullName: string;
  };
};

export type Book = {
  id: string;
  type: string;
  attributes: {
    name: string;
    copiesSold: number;
  };
  relationships?: {
    author?: {
      data: {
        id: string;
        type: string;
      };
    };
  };
};

export type CountryAttributes = {
  code: string;
};

type Country = {
  id: string;
  type: string;
  attributes: CountryAttributes;
};

type StoreAttributes = {
  name: string;
  website: string;
  rating: number;
  storeImage: string;
  establishmentDate: string;
};

type StoreRelationships = {
  countries: {
    data: {
      id: string;
      type: string;
    };
  };
  books?: {
    data: {
      id: string;
      type: string;
    }[];
  };
};

export type Store = {
  type: string;
  id: string;
  attributes: StoreAttributes;
  relationships: StoreRelationships;
};

export type ApiResponse = {
  jsonapi: {
    version: string;
  };
  meta: {
    total: string;
  };
  data: Store[];
  included: (Country | Book | Author)[];
};

export type DerivedBook = {
  name: string;
  author: string;
  id: number;
  copiesSold: number;
};

export type RelationshipData = {
  id: string;
  type: string;
};

export type IncludedItem = {
  id: string;
  type: string;
  attributes: {
    [key: string]: any; // attributes can vary, so this is flexible
  };
  relationships?: {
    [key: string]: {
      data: RelationshipData | RelationshipData[]; // can be one or multiple related items
    };
  };
};
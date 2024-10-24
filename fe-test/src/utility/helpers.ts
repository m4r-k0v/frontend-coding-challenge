import type { ApiResponse, IncludedItem, RelationshipData, Store } from "./types";

export const formatEstablishmentDate = (isoDate: string): string => {
  if (!isoDate) return "Invalid Date";
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return "Invalid Date";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
export const normalizeBookStores = (response: ApiResponse) => {
  if (!response) return;

  const includedMap = createIncludedMap(response.included);

  return response.data.map(store => normalizeStore(store, includedMap));
};

// Create a map for easier lookup of included items
const createIncludedMap = (included: IncludedItem[] = []) => {
  const map = new Map();

  included.forEach(item => {
    if (!map.has(item.type)) {
      map.set(item.type, new Map());
    }
    map.get(item.type).set(item.id, item);
  });

  return map;
};



// Get country code from included items
const getCountryCode = (countryData: RelationshipData | undefined, includedMap: Map<string, Map<string, any>>) => {
  if (!countryData) return "";

  const country = includedMap.get("countries")?.get(countryData.id);
  return country ? country.attributes.code : "";
};

// Get book details from included items
const getBookDetails = (bookRefs: RelationshipData[] = [], includedMap: Map<string, Map<string, any>>) => {
  return bookRefs.map(bookRef => {
    const book = includedMap.get("books")?.get(bookRef.id);
    if (!book) return null;

    const authorName = getAuthorName(book.relationships?.author?.data, includedMap);

    return {
      id: book.id,
      name: book.attributes.name,
      copiesSold: book.attributes.copiesSold,
      author: authorName,
    };
  }).filter(Boolean);
};

// Get author name from included items
const getAuthorName = (authorRef: RelationshipData | undefined, includedMap: Map<string, Map<string, any>>) => {
  if (!authorRef) return "Unknown";

  const author = includedMap.get("authors")?.get(authorRef.id);
  return author ? author.attributes.fullName : "Unknown";
};


// Normalize a single store object
const normalizeStore = (store: Store, includedMap: Map<string, Map<string, any>>) => {
  const { name, website, rating, storeImage, establishmentDate } = store.attributes;
  const relationships = store.relationships;

  const countryCode = getCountryCode(relationships?.countries?.data, includedMap);
  const bookDetails = getBookDetails(relationships?.books?.data, includedMap);

  return {
    id: store.id,
    name,
    website,
    rating,
    image: storeImage,
    establishmentDate: formatEstablishmentDate(establishmentDate),
    countryCode,
    books: bookDetails,
  };
};
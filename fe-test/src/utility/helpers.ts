// Utility function to format the establishment date to DD.MM.YYYY
export const formatEstablishmentDate = (isoDate: string): string => {
  if (!isoDate) return "Invalid Date";
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return "Invalid Date";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

// Utility function to fetch the country flag based on the 2-letter country code
export const fetchCountryFlag = async (
  countryCode: string,
): Promise<string> => {
  try {
    if (!countryCode) throw new Error("Country code is required");
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`,
    );
    if (!response.ok) throw new Error("Failed to fetch country flag");
    const data = await response.json();
    return data[0]?.flags?.png || "Flag not available";
  } catch (error) {
    console.error("Error fetching country flag:", error);
    return "Flag not available";
  }
};

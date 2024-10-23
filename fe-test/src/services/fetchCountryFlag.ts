import { FLAG_BASE_URL } from "../utility/const";

export const fetchCountryFlag = async (
  countryCode: string,
): Promise<string> => {
  try {
    if (!countryCode) throw new Error("Country code is required");
    const response = await fetch(`${FLAG_BASE_URL}/${countryCode}`);
    if (!response.ok) throw new Error("Failed to fetch country flag");
    const data = await response.json();
    return data[0]?.flags?.png || "Flag not available";
  } catch (error) {
    console.error("Error fetching country flag:", error);
    return "Flag not available";
  }
};

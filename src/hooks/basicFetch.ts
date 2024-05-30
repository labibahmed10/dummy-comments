export const fetchAllPosts = async <T>(url: string): Promise<T[]> => {
  try {
    const response = await fetch(url, { cache: "no-cache" });
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

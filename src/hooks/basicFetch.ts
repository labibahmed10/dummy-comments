export const fetchAllPosts = async <T>(url: string, postId?: number): Promise<T[]> => {
  try {
    const response = await fetch(postId ? url + `?postId=${postId}` : url);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

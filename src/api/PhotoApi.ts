import { Photo } from "../models/Photo";

const BASE_URL = "https://picsum.photos/v2";

export const fetchPhotos = async (
  page: number = 1,
  limit: number = 30
): Promise<Photo[]> => {
  const response = await fetch(
    `${BASE_URL}/list?page=${page}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch photos");
  }

  return response.json();
};

export interface SearchResult {
  id: string;
  title: string;
  author: string;
  year: number | null;
  description?: string;
  thumbnail?: string;
}

export interface Book {
  name: string;
  author: string;
  image: string;
  description?: string;
  notes?: string[];
}

export async function searchBooks(query: string) {
	const apiKey = import.meta.env.GOOGLE_BOOKS_API_KEY;
	const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

	const response = await fetch(url);
	if (!response.ok) throw new Error("Failed to fetch books");

	const data = await response.json();
	return data.items || [];
}

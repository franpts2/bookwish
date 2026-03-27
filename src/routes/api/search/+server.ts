import { json, type RequestHandler } from "@sveltejs/kit";
import { GOOGLE_BOOKS_API_KEY } from "$env/static/private";

const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get("q");
	const apiKey = GOOGLE_BOOKS_API_KEY;

	if (!query) {
		return json({ error: "Missing query parameter" }, { status: 400 });
	}

	if (!apiKey) {
		console.error("GOOGLE_BOOKS_API_KEY is not set in .env file");
		return json(
			{ error: "API key is not configured on the server." },
			{ status: 500 },
		);
	}

	try {
		const searchUrl = `${GOOGLE_BOOKS_API}?q=${encodeURIComponent(query)}&maxResults=10&key=${apiKey}`;

		console.log("Fetching from:", searchUrl.replace(apiKey, "***"));

		const response = await fetch(searchUrl);

		if (!response.ok) {
			const errorText = await response.text();
			console.error("Google Books API Error:", response.status, errorText);
			return json(
				{ error: `API error: ${response.status}` },
				{ status: response.status },
			);
		}

		const data = await response.json();
		console.log("API returned items:", data.items?.length || 0);
		return json(data);
	} catch (error) {
		console.error("Error in search endpoint:", error);
		return json({ error: "Failed to search books" }, { status: 500 });
	}
};

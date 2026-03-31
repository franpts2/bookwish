import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export function slugify(str: string): string {
	return str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

export function highlightText(text: string, searchQuery: string) {
	if (!searchQuery.trim()) {
		return [{ text, highlighted: false }];
	}

	const parts: Array<{ text: string; highlighted: boolean }> = [];
	const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const regex = new RegExp(`(${escapedQuery})`, "gi");
	const split = text.split(regex);

	split.forEach((part, index) => {
		if (part) {
			parts.push({
				text: part,
				highlighted: index % 2 === 1, // Odd indices are the captured groups (matches)
			});
		}
	});

	return parts;
}

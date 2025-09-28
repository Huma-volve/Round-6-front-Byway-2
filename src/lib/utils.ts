import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Review, RatingStats } from "@/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates statistics for an array of course reviews.
 *
 * @param {Review[]} reviews - Array of review objects, each containing a rating (1–5).
 * @returns {RatingStats} An object containing:
 * - `totalRatings`: total number of ratings
 * - `averageRating`: average rating value (rounded to 2 decimals)
 * - `percentages`: percentage distribution of ratings from 1 to 5 stars
 *
 * @example
 * const stats = calculateRatingStats(reviews);
 * console.log(stats);
 * // {
 * //   totalRatings: 20,
 * //   averageRating: 3.05,
 * //   percentages: { 1: 15, 2: 30, 3: 10, 4: 10, 5: 35 }
 * // }
 */
export function calculateRatingStats(reviews: Review[]): RatingStats {
  const totalRatings = reviews.length;

  if (totalRatings === 0) {
    return {
      totalRatings: 0,
      averageRating: 0,
      percentages: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    };
  }

  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  const averageRating = parseFloat((sum / totalRatings).toFixed(1));

  // count occurrences of each star rating
  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  reviews.forEach((r) => {
    counts[r.rating] = (counts[r.rating] || 0) + 1;
  });

  // convert counts into percentages
  const percentages: Record<number, number> = {};
  for (let i = 1; i <= 5; i++) {
    percentages[i] = parseFloat(((counts[i] / totalRatings) * 100).toFixed(2));
  }

  return {
    totalRatings,
    averageRating,
    percentages,
  };
}

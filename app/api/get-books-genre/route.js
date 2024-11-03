/**
 * API endpoint for fetching book genres from the inventory.
 * 
 * This endpoint handles POST requests to retrieve a list of distinct book genres.
 * It utilizes the `getBooksGenre` helper function to fetch the data.
 * 
 * @function POST
 * @param {Request} req - The request object (not used in this endpoint).
 * @returns {Promise<Response>} A promise that resolves to the response object containing a list of book genres.
 */
import { getBooksGenre } from "@/server/helper";

export const POST = getBooksGenre;
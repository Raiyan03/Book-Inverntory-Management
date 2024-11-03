/**
 * API endpoint for fetching authors from the inventory.
 * 
 * This endpoint handles POST requests to retrieve a list of distinct authors.
 * It utilizes the `getAuthors` helper function to fetch the data.
 * 
 * @function POST
 * @param {Request} req - The request object (not used in this endpoint).
 * @returns {Promise<Response>} A promise that resolves to the response object containing a list of authors.
 */
import { getAuthors } from "@/server/helper";

export const POST = getAuthors;
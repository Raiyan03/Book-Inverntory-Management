/**
 * API endpoint for retrieving filtered books based on search criteria.
 * 
 * This endpoint handles POST requests to fetch books that match specific 
 * search criteria including title, author, and genre. It utilizes the 
 * `getFilteredBooks` helper function to perform the search and return the results.
 * 
 * @function POST
 * @param {Request} req - The request object containing search criteria in the body.
 * @returns {Promise<Response>} A promise that resolves to the response object 
 * containing the filtered list of books or an error message if the search fails.
 */
import { getFilteredBooks } from "@/server/helper";

export const POST = getFilteredBooks;
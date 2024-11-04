/**
 * API endpoint for adding a new book.
 * 
 * This endpoint handles POST requests to add a new book to the inventory.
 * It uses the `addNewBook` helper function to process the request.
 * 
 * @function POST
 * @param {Request} req - The request object containing the book details in JSON format.
 * @returns {Promise<Response>} A promise that resolves to the response object containing the status of the book addition.
 */
import { addNewBook } from "@/server/helper";
export const POST  = addNewBook;
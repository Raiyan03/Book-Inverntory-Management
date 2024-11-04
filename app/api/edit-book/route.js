/**
 * API endpoint for editing an existing book.
 * 
 * This endpoint handles POST requests to update the details of a book in the inventory.
 * It uses the `editBook` helper function to process the request.
 * 
 * @function POST
 * @param {Request} req - The request object containing the details of the book to be edited in JSON format.
 * @returns {Promise<Response>} A promise that resolves to the response object indicating the status of the update.
 */
import { editBook } from "@/server/helper";

export const POST = editBook;

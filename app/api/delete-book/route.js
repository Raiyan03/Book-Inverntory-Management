/**
 * API endpoint for deleting a book.
 * 
 * This endpoint handles POST requests to delete a book from the inventory.
 * It uses the `deleteBook` helper function to process the request.
 * 
 * @function POST
 * @param {Request} req - The request object containing the entry ID of the book to be deleted in JSON format.
 * @returns {Promise<Response>} A promise that resolves to the response object indicating the status of the deletion.
 */
import { deleteBook } from "@/server/helper";

export const POST = deleteBook;
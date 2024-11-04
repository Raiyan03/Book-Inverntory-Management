import { deleteBook } from "@/server/helper";

/**
 * API endpoint for deleting a book.
 * 
 * This endpoint handles POST requests to delete a book from the inventory.
 * It uses the `deleteBook` helper function to process the request.
 * 
 * **HTTP Method:** `POST`
 * 
 * **API Endpoint:** `/api/delete-book/`
 * 
 * **Request Body:**
 * - Must contain the entry ID of the book to be deleted in JSON format:
 *   - `entry_id` (number): The ID of the book entry to be deleted.
 * 
 * **Response:**
 * - Returns a JSON object containing the status of the deletion:
 *   - `{ success: 'Book deleted successfully' }` on success.
 *   - `{ error: 'Something went wrong', details: <error message> }` on failure.
 * 
 * **Example Call Function:**
 * To call this endpoint, use the `deleteBookCall` function located at `@server/calls`.
 * 
 * @param {Request} req - The request object containing the entry ID of the book to be deleted in JSON format.
 * @returns {Promise<Response>} A promise that resolves to the response object indicating the status of the deletion.
 */
export const POST = deleteBook;
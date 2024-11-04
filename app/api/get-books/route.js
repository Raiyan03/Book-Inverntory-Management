import { getBooks } from "@/server/helper";

/**
 * API endpoint for retrieving all books from the inventory.
 * 
 * This endpoint handles GET requests to fetch a list of all books available in the inventory.
 * It utilizes the `getBooks` helper function to fetch the data.
 * 
 * **HTTP Method:** `GET`
 * 
 * **API Endpoint:** `/api/get-books/`
 * 
 * **Request Body:**
 * - The request object can be empty as this endpoint does not require any input parameters.
 * 
 * **Response:**
 * - Returns a JSON object containing the array of books:
 *   - `{ success: 'Books fetched successfully', data: <array of books> }` on success.
 *   - `{ error: 'Something went wrong', details: <error message> }` on failure.
 * 
 * **Example Call Function:**
 * To call this endpoint, use the `getBooksCall` function located at `@server/calls`.
 * 
 * @param {Request} req - The HTTP request object containing the incoming request.
 * @returns {Promise<Response>} A promise that resolves to a JSON response containing an array of books from the inventory.
 */
export const GET = getBooks;
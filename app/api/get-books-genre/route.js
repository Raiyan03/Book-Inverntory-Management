import { getBooksGenre } from "@/server/helper";

/**
 * API endpoint for fetching book genres from the inventory.
 * 
 * This endpoint handles POST requests to retrieve a list of distinct book genres.
 * It utilizes the `getBooksGenre` helper function to fetch the data.
 * 
 * **HTTP Method:** `POST`
 * 
 * **API Endpoint:** `/api/get-books-genre/`
 * 
 * **Request Body:**
 * - The request object can be empty as this endpoint does not require any input parameters.
 * 
 * **Response:**
 * - Returns a JSON object containing the array of genres:
 *   - `{ success: 'Books genre fetched successfully', data: <array of genres> }` on success.
 *   - `{ error: 'Something went wrong', details: <error message> }` on failure.
 * 
 * **Example Call Function:**
 * To call this endpoint, use the `getBooksGenreCall` function located at `@server/calls`.
 * 
 * @param {Request} req - The request object (not used in this endpoint).
 * @returns {Promise<Response>} A promise that resolves to the response object containing a list of book genres.
 */
export const POST = getBooksGenre;
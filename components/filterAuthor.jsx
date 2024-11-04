/**
 * @component FilterAuthor
 * @description
 * A component that renders a list of filtered authors in a dropdown format.
 * This list appears when the user types in the author filter input, allowing 
 * for selection from a filtered set of authors based on the user's input.
 *
 * @param {Array<string>} filteredAuthors - An array of authors filtered based on user input.
 * @param {function} handleAuthorSelect - Function to handle the selection of an author from the list.
 *
 * @returns {JSX.Element} A dropdown list of filtered authors, or an empty list if none are available.
 *
 * @example
 * <FilterAuthor
 *     filteredAuthors={filteredAuthors}
 *     handleAuthorSelect={selectAuthor}
 * />
 */

const FilterAuthor = ({
    filteredAuthors,
    handleAuthorSelect,
     // Ensure this prop is passed to handle selection
}) => {
    return (
        <ul
            className="absolute z-10 w-full mt-1 bg-white border-2 text-black border-gray-300 rounded-lg shadow-lg overflow-y-auto custom-scrollbar"
            style={{ maxHeight: '150px' }} // Set max-height to limit the height of the dropdown
        >
            {filteredAuthors.map((author, index) => (
                <li
                    key={index}
                    onClick={() => handleAuthorSelect(author)}
                    className="cursor-pointer p-2 hover:bg-gray-200"
                >
                    {author}
                </li>
            ))}
        </ul>
    );
};

export default FilterAuthor;
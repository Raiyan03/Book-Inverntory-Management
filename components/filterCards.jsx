import { AiOutlineClose } from "react-icons/ai";

/**
 * @component FilterCards
 * @description
 * A component that represents a filter card displaying a selected filter (genre or author).
 * It includes a close button to remove the filter when clicked.
 *
 * @param {string} name - The name of the filter to be displayed (e.g., genre or author).
 * @param {function} remove - A function to handle the removal of the filter when the close button is clicked.
 *
 * @returns {JSX.Element} A filter card displaying the filter name and a close button.
 *
 * @example
 * <FilterCards
 *     name="Science Fiction"
 *     remove={handleRemoveFilter}
 * />
 */

const FilterCards = ({
    name,
    remove
}) => {

    const del = () => {
        remove(name);
    };
    return(
        <div className="flex bg-accentborders rounded-lg gap-1 p-1">
            {name}
            <button>
                <AiOutlineClose onClick={del} />
            </button>
        </div>
    );
};

export default FilterCards;
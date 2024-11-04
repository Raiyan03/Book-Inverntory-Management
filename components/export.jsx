import { CiExport } from "react-icons/ci"

/**
 * Export Component
 *
 * @description
 * This component provides a dropdown menu for exporting data in various formats.
 * It includes options for JSON and CSV formats, with each option triggering the `handleExport`
 * function passed in as a prop when clicked.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.handleExport - Callback function to handle the export action. 
 *                                         It accepts a string parameter representing the file type 
 *                                         to export ("json" or "csv").
 *
 * @component
 *
 * @example
 * <Export handleExport={(type) => exportData(type)} />
 *
 * @returns {JSX.Element} A dropdown menu with export options.
 */

const Export = ({handleExport}) => {

    return (
    <div className="absolute right-0 mt-2 w-32 border-accentborders bg-background border shadow-black shadow rounded-lg">
        <ul>
            <li
                className="px-4 py-2 flex gap-2 items-center hover:bg-accent rounded-t-lg cursor-pointer"
                onClick={() => handleExport("json")}
            >
                <CiExport />
                JSON
            </li>
            <li
                className="px-4 py-2 flex gap-2 items-center hover:bg-accent cursor-pointer rounded-b-lg"
                onClick={() => handleExport("csv")}
            >
                <CiExport />
                CSV
            </li>
        </ul>
    </div>
    )
}

export default Export;
import React from "react";
import { IoWarningOutline } from "react-icons/io5";

/**
 * ErrorMessage Component
 *
 * @description
 * This component displays an error message with a warning icon, styled to alert the user
 * to any error or validation issue. It is conditionally rendered, only appearing if a `message`
 * is provided.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.message - The error message to display. If no message is provided,
 *                                  the component will not render.
 *
 * @component
 *
 * @example
 * <ErrorMessage message="Please fill in all required fields." />
 *
 * @returns {JSX.Element|null} A styled error message element if `message` is present, otherwise null.
 */

const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
        <div className=" my-2   flex items-center justify-center text-red-700 px-4 py-2 relative mb-4">
            <div className="flex items-center border p-2 border-red-400 rounded bg-red-100  gap-2 justify-center">
                <IoWarningOutline size={20} />
                <span className="block sm:inline">{message}</span>
            </div>
        </div>
    );
};

export default ErrorMessage;
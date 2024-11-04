import React from "react";

/**
 * DeleteConfirmation Component
 * 
 * @description
 * This component renders a confirmation modal for deleting a book. When open, 
 * it displays a prompt asking the user to confirm the deletion, with options 
 * to either proceed with deletion or cancel the action.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.isOpen - Controls the visibility of the delete confirmation modal.
 * @param {function} props.onClose - Callback function to close the modal without deleting.
 * @param {function} props.onDelete - Callback function to confirm deletion and trigger the delete action.
 * 
 * @component
 * 
 * @example
 * <DeleteConfirmation 
 *    isOpen={isDeletePopupOpen} 
 *    onClose={handleCloseDeletePopup} 
 *    onDelete={handleDeleteBook} 
 * />
 * 
 * @returns {JSX.Element|null} The rendered DeleteConfirmation modal if `isOpen` is true, otherwise null.
 */

const DeleteConfirmation = ({ isOpen, onClose, onDelete }) => {
    if (!isOpen) return null; // If popup is not open, don't render anything

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-black mb-4">Are you sure you want to delete this book?</h2>
                <div className="flex justify-end gap-4">
                    <button onClick={onClose} className="px-4 py-2 text-black bg-gray-300 rounded-lg">
                        Cancel
                    </button>
                    <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded-lg">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;
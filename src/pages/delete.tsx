import Modal from 'react-modal'
export const Delete = ({ onClose, onConfirm }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '12px',
            padding: '2rem',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            width: '90%',
            border: 'none',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '1000',
        },
    };
    return <>
        <Modal isOpen={true} style={customStyles} onRequestClose={onClose}>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Confirm Deletion</h2>
            <p className="text-gray-600 text-center mb-6">Are you sure you want to delete this item? This action cannot be undone.</p>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                    Cancel
                </button>
                <button
                    onClick ={onConfirm}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                    Delete
                </button>
            </div>
        </Modal>
    </>
}
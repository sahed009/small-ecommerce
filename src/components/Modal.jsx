import successImage from '../assets/success.png'; // Import your success image

const Modal = ({ isOpen, onClose, totalPrice }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                {/* Success Image */}
                <img src={successImage} alt="Success" className="w-24 h-24 mx-auto mb-4" />

                {/* Success Message */}
                <h2 className="text-2xl font-bold text-green-600">Payment Successful!</h2>
                <p className="text-gray-700 mt-2">Thank you for your purchase.</p>

                {/* Total Price */}
                <p className="text-lg font-semibold mt-4">Total Price: ${totalPrice.toFixed(2)}</p>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;

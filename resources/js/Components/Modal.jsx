import Modal from "react-modal";

const CustomModal = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Zoom Modal"
            ariaHideApp={false} // to prevent the 'appElement' warning
            className={"h-full w-full overflow-auto relative"}
        >
            <div>
                {children}
                <button
                    className="fixed right-4 top-4 btn"
                    onClick={onRequestClose}
                >
                    x
                </button>
            </div>
        </Modal>
    );
};

export default CustomModal;

import { createPortal } from 'react-dom';

const ChatModal = ({ open, message, onClose }) => {

    if (!open) {
        debugger
        return null
    }
    return (


        createPortal(
            <div className="modal">
                <h3>{message}</h3>
                <button onClick={onClose}>Close</button>
            </div>
            , document.body)
    )
}

export default ChatModal



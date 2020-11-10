import { useEffect, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

interface IModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

export default function FoodModal({ isOpen, toggleModal }: IModalProps) {
  const [modalIsOpen, setIsOpen] = useState(isOpen);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={toggleModal} type="button">
          close
        </button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}

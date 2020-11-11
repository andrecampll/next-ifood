import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import { Container } from '../../../styles/components/pages/Restaurant/FoodModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '0',
    padding: '0',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.6)',
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
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={toggleModal}
      style={customStyles}
    >
      <Container>
        <aside>
          <img
            src="https://static-images.ifood.com.br/image/upload/t_high/pratos/dbc629b1-71e7-406c-8959-d251540157f5/201907302128_YXOh_.jpeg"
            alt=""
            className="blur"
          />
          <img
            src="https://static-images.ifood.com.br/image/upload/t_high/pratos/dbc629b1-71e7-406c-8959-d251540157f5/201907302128_YXOh_.jpeg"
            alt=""
            className="food-cover"
          />
        </aside>
        <main>
          <header>
            <FiX size={25} color="#666" onClick={toggleModal} />
          </header>
          <div>
            <h1>Batata frita</h1>
            <p>Batata frita muito massa</p>
            <strong>R$ 16,90</strong>
            <div className="comments">
              <h2>Algum comentário?</h2>
              <span>0/140</span>
            </div>
            <textarea
              placeholder="Ex: tirar a cebola, maionese à parte"
              maxLength={140}
            />
          </div>
          <footer />
        </main>
      </Container>
    </Modal>
  );
}

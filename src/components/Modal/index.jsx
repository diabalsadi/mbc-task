import cx from 'classnames';
// React core
import { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getModalMessage, getTheme, isModalOpen } from '../../redux/selectors';
import { toggleModal } from '../../redux/slices/modal';
// Component
import IconButton from '../IconButton';
// Styles
import styles from './Modal.module.scss';

const Modal = () => {
  const dispatcher = useDispatch();
  const message = useSelector(getModalMessage);
  const modalOpen = useSelector(isModalOpen);
  const theme = useSelector(getTheme);

  const closeModal = () => dispatcher(toggleModal({ payload: '' }));

  const listenOutSideModal = (e) => {
    if (e.target.id === 'modal-container') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('click', listenOutSideModal);

    return () => window.removeEventListener('click', listenOutSideModal);
  }, []);

  return (
    modalOpen && (
      <div
        id={'modal-container'}
        className={cx(styles.container, styles[theme])}
      >
        <div className={cx(styles.modalWrapper, styles[theme])}>
          <header className={styles.modalHeader}>
            <div className={styles.navigationHeader}>
              <IconButton
                onClick={closeModal}
                icon={<span>x</span>}
                className={styles.xIcon}
              />
            </div>
          </header>
          <div className={styles.message}>{message}</div>
        </div>
      </div>
    )
  );
};

export default Modal;

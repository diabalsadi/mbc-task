// React core
import React from 'react';
// Redux
import { getTheme } from '../../redux/selectors';
import { toggleModal } from '../../redux/slices/modal';
import { useDispatch, useSelector } from 'react-redux';
// Component
import Input from '../../components/Input';
// Styles
import cx from 'classnames';
import styles from './Contact.module.scss';
// Utils
import { isEmailValid, isNameValid } from '../../utils/verifyData';

const Contact = () => {
  const dispatcher = useDispatch();
  const theme = useSelector(getTheme);

  const handleSubmit = (e) => {
    dispatcher(toggleModal('Message sent'));

    const { message } = e.currentTarget;
    message.value = '';

    e.preventDefault();
  };

  const inputs = [
    {
      type: 'email',
      placeholder: 'example@mail.com',
      verification: (e) => isEmailValid(e.target.value),
    },
    {
      type: 'name',
      placeholder: 'Example Example',
      verification: (e) => isNameValid(e.target.value),
    },
    { type: 'message' },
  ];

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      {inputs.map((el, index) => (
        <div className={styles.input} key={`input-${index}`}>
          <Input {...el} />
        </div>
      ))}
      <button type='submit' className={cx(styles.submitButton, styles[theme])}>
        Send !
      </button>
    </form>
  );
};

export default Contact;

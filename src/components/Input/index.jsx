// React
import { useState } from 'react';
// Style
import cx from 'classnames';
import styles from './Input.module.scss';

const Input = ({ type, label, placeholder, verification }) => {
  const [isValidInput, seIsValidInput] = useState({
    isValid: undefined,
    message: '',
  });

  const verifyInput = (e) => {
    seIsValidInput(verification(e));
  };

  return (
    <>
      <label htmlFor={type} className={styles.label}>
        {label || type}:
      </label>
      {type === 'message' ? (
        <textarea
          id={type}
          placeholder={placeholder}
          rows='4'
          cols='50'
          required
        />
      ) : (
        <input
          className={cx(
            styles.input,
            { [styles.isValid]: isValidInput.isValid === true },
            { [styles.notValid]: isValidInput.isValid === false }
          )}
          type={type}
          id={type}
          placeholder={placeholder}
          required
          onChange={verifyInput}
        />
      )}
      {isValidInput.message && (
        <span className={styles.message}>{isValidInput.message}</span>
      )}
    </>
  );
};

export default Input;

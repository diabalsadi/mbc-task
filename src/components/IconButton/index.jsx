// Styles
import cx from 'classnames';
import styles from './IconButton.module.scss';

const IconButton = ({ icon, onClick, label, className }) => {
  return (
    <button className={cx(styles.container, className)} onClick={onClick}>
      {icon && <span className={styles.logo}>{icon}</span>}
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
};

export default IconButton;

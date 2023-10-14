export const isEmailValid = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = regex.test(String(email).toLowerCase());

  return { isValid, message: isValid ? '' : 'Email is not valid' };
};

export const isNameValid = (name) => {
  const regex = /^(?=.*\d)[^!<>?=+@{}_$%]+$/;
  const isValid = name.length ? !regex.test(String(name).toLowerCase()) : false;

  return {
    isValid,
    message: isValid
      ? ''
      : !name.length
      ? "Name can't be empty"
      : 'Name is not valid should not contain number, special chars',
  };
};

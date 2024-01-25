import React, { useState } from 'react';
import { Field } from 'formik';
import { InputProps } from '@/types';
import styles from './input.module.scss';

const Input = ({
  type,
  name,
  title,
  error,
  value,
  required,
  disabled,
  max,
  placeholder,
  inputValue,
  ...rest
}: InputProps) => {
  const [formType, setFormType] = useState(type);

  return (
    <>
      <div className={styles.input_container}>
        <label htmlFor={name}>{title}</label>
        <Field
          id={name}
          name={name}
          type={formType}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          max={max}
          noValidate={true}
          value={inputValue}
          {...rest}
        />

        {type === 'password' && (
          <button
            className={styles.input_container__btn}
            type="button"
            data-testid="input-btn"
            aria-label="show password"
            onClick={() =>
              setFormType(formType === 'password' ? 'text' : 'password')
            }
          >
            {formType === 'password' ? <p>SHOW</p> : <p>HIDE</p>}
          </button>
        )}
        <div>
          {' '}
          {error ? <span className={styles.error}>{error}</span> : null}
        </div>
      </div>
    </>
  );
};

export default Input;

import React, { useState } from "react";
import { Field } from "formik";
import { InputProps } from "@/types";
import styles from "./input.module.scss";
import Closed from "../../assets/closedEye.svg";
import Opened from "../../assets/openEye.svg";
import DragAndDrop from "../DragAndDrop";

const Input = ({
  type,
  name,
  title,
  error,
  required,
  disabled,
  max,
  placeholder,
  value,
  ...rest
}: InputProps) => {
  const [formType, setFormType] = useState(type);

  return (
    <>
      <div className={styles.input_container}>
        <label htmlFor={name}>{title}</label>
        {type !== "file" && (
          <Field
            id={name}
            name={name}
            type={formType}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            max={max}
            noValidate={true}
            value={value}
            {...rest}
          />
        )}
        {type === "password" && (
          <button
            className={styles.input_container__btn}
            type="button"
            aria-label="show password"
            onClick={() =>
              setFormType(formType === "password" ? "text" : "password")
            }
          >
            {formType === "password" ? (
              <img src={Opened} />
            ) : (
              <img src={Closed} />
            )}
          </button>
        )}

        {type === "file" && <DragAndDrop id={rest?.id} onChange={rest?.onChange} />}
        <div>
          {" "}
          {error ? <span className={styles.error}>{error}</span> : null}
        </div>
      </div>
    </>
  );
};

export default Input;
